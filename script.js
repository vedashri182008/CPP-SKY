/* CPP SKY - offline, rule-based study assistant */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const units = OOP_CONTENT.units;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let selectedOption = null;
let answered = false;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}
function setView(view, unitId = null) {
  $$('.view').forEach(el => el.classList.toggle('active-view', el.id === `view-${view}`));
  $$('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.view === view));
  const titles = {chat:'Chat assistant', units:'All units', notes:'Study notes', quiz:'Practice quiz'};
  $('#top-title').textContent = titles[view] || 'Chat assistant';
  $('#sidebar').classList.remove('open');
  if (view === 'notes' && unitId) $('#notes-unit').value = unitId;
  if (view === 'quiz' && unitId) $('#quiz-unit').value = unitId;
  if (view === 'notes') renderNotes();
}
function unitById(id) { return units.find(u => u.id === Number(id)); }

function renderSidebarUnits() {
  $('#sidebar-units').innerHTML = units.map(u => `<button class="sidebar-unit" data-unit="${u.id}"><span class="unit-mini">${String(u.id).padStart(2,'0')}</span><span>${escapeHTML(u.shortTitle)}</span></button>`).join('');
  $('#unit-grid').innerHTML = units.map(u => `
    <article class="unit-card">
      <div class="unit-card-top"><span class="unit-number">${String(u.id).padStart(2,'0')}</span><span class="unit-tag">${u.topics.length} KEY TOPICS</span></div>
      <h3>Unit ${u.id}: ${escapeHTML(u.shortTitle)}</h3><p>${escapeHTML(u.summary)}</p>
      <div class="topic-chips">${u.topics.slice(0,4).map(t=>`<span>${escapeHTML(t.title)}</span>`).join('')}</div>
      <button class="text-button" data-unit-chat="${u.id}">Study this unit ↗</button>
    </article>`).join('');
  const options = units.map(u => `<option value="${u.id}">Unit ${u.id}: ${escapeHTML(u.shortTitle)}</option>`).join('');
  $('#notes-unit').insertAdjacentHTML('beforeend', options);
  $('#quiz-unit').insertAdjacentHTML('beforeend', options);
}
function renderNotes() {
  const query = $('#notes-search').value.trim().toLowerCase();
  const unitFilter = $('#notes-unit').value;
  const cards = [];
  units.forEach(u => {
    if (unitFilter !== 'all' && Number(unitFilter) !== u.id) return;
    u.topics.forEach(topic => {
      const text = `${u.shortTitle} ${topic.title} ${topic.explanation} ${topic.example || ''} ${topic.keywords.join(' ')}`.toLowerCase();
      if (!query || text.includes(query)) cards.push({unit:u, topic});
    });
  });
  $('#notes-list').innerHTML = cards.length ? cards.map(({unit:u,topic:t}) => `
    <article class="note-card"><div class="note-card-head"><span class="unit-tag">UNIT ${u.id}</span></div>
    <h3>${escapeHTML(t.title)}</h3><p>${escapeHTML(t.explanation)}</p>
    ${t.example ? `<div class="note-example">${escapeHTML(t.example)}</div>` : ''}
    <button class="text-button ask-topic" data-topic="${escapeHTML(t.title)}">Ask chatbot about this ↗</button></article>`).join('') : `<div class="empty-state"><h3>No matching notes</h3><p>Try another keyword or select All units.</p></div>`;
}
function addMessage(text, who='bot', html=false) {
  const wrap = document.createElement('div');
  wrap.className = `message ${who === 'user' ? 'user-message' : 'bot-message'}`;
  const avatar = document.createElement('div'); avatar.className = 'avatar'; avatar.textContent = who === 'user' ? 'Y' : 'O';
  const content = document.createElement('div'); content.className = 'message-content';
  const name = document.createElement('div'); name.className = 'message-name'; name.textContent = who === 'user' ? 'YOU' : 'OOP BUDDY';
  const stamp = document.createElement('span'); stamp.textContent = 'NOW'; name.appendChild(stamp);
  const bubble = document.createElement('div'); bubble.className = 'bubble';
  if (html) bubble.innerHTML = text; else bubble.textContent = text;
  content.append(name,bubble); wrap.append(avatar,content); $('#chat-messages').appendChild(wrap);
  $('#chat-messages').scrollTop = $('#chat-messages').scrollHeight;
}
function findTopic(query) {
  const q = query.toLowerCase();
  let best = null, bestScore = 0;
  units.forEach(u => u.topics.forEach(t => {
    let score = 0;
    const allTerms = [t.title, ...t.keywords];
    allTerms.forEach(term => {
      const termLow = term.toLowerCase();
      if (q.includes(termLow)) score += termLow.length > 5 ? 3 : 1;
      if (termLow.includes(q) && q.length > 3) score += 1;
    });
    if (score > bestScore) {bestScore=score; best={unit:u,topic:t};}
  }));
  return bestScore ? best : null;
}
function answerQuestion(query) {
  const q = query.toLowerCase();
  if (/\b(hi|hello|hey|namaste)\b/.test(q)) return 'Hello! 😊 Ask me anything from your C++ OOP syllabus. You can ask for definitions, examples, notes, or select a unit from the sidebar.';
  if (q.includes('help') || q.includes('what can you do')) return 'I can explain syllabus topics, show built-in notes and C++ examples, help you explore all six units, and run MCQ quizzes. Try asking “Explain polymorphism” or open Study notes.';
  if (q.includes('unit') && (q.includes('all') || q.includes('syllabus') || q.includes('list'))) {
    return 'Your syllabus has six units: ' + units.map(u=>`Unit ${u.id}: ${u.shortTitle}`).join('; ') + '. Open “All units” in the sidebar to browse topics.';
  }
  if (q.includes('quiz') || q.includes('mcq') || q.includes('test me')) return 'Let’s practise! Open “Practice quiz” from the sidebar, choose a unit or All units, and press Start quiz.';
  if (q.includes('notes')) return 'Open “Study notes” from the sidebar to search topics and read definitions with examples. You can filter notes by unit.';
  const match = findTopic(query);
  if (match) {
    const t = match.topic;
    let out = `<strong>Unit ${match.unit.id}: ${escapeHTML(match.unit.shortTitle)} · ${escapeHTML(t.title)}</strong><br><br>${escapeHTML(t.explanation)}`;
    if (t.example) out += `<br><br><strong>C++ example / syntax</strong><pre>${escapeHTML(t.example)}</pre>`;
    out += `<br><strong>Exam tip:</strong> Learn the definition, purpose, syntax and one example. Related keywords: ${escapeHTML(t.keywords.slice(0,5).join(', '))}.`;
    return out;
  }
  return 'I couldn’t find an exact match in my built-in syllabus notes. Try a topic keyword such as class, constructor, inheritance, virtual function, file handling, exception, template, vector, iterator or sorting. This offline bot answers from its included content; it does not generate new AI answers.';
}
function sendChat(message) {
  const text = message.trim(); if (!text) return;
  addMessage(text,'user');
  addMessage(answerQuestion(text),'bot',true);
}
function startQuiz() {
  const filter = $('#quiz-unit').value;
  quizQuestions = OOP_CONTENT.questions.filter(q => filter === 'all' || q.unit === Number(filter));
  if (!quizQuestions.length) { showToast('No questions available for this selection yet.'); return; }
  quizIndex=0; quizScore=0; selectedOption=null; answered=false;
  renderQuizQuestion();
}
function renderQuizQuestion() {
  const area = $('#quiz-area');
  if (quizIndex >= quizQuestions.length) {
    const percent = Math.round(quizScore / quizQuestions.length * 100);
    area.innerHTML = `<div class="quiz-card" style="text-align:center"><div class="eyebrow">QUIZ COMPLETED</div><div class="result-score">${quizScore} / ${quizQuestions.length}</div><h2>${percent >= 70 ? 'Great work!' : 'Keep practising!'}</h2><p style="color:#9ba7c3">You scored ${percent}%. Revisit your notes and try again.</p><button class="primary-button" id="restart-quiz">Try again <span>↻</span></button></div>`;
    $('#restart-quiz').addEventListener('click',startQuiz); return;
  }
  const q = quizQuestions[quizIndex];
  area.innerHTML = `<div class="quiz-card"><div class="quiz-progress"><span style="width:${(quizIndex/quizQuestions.length)*100}%"></span></div>
    <div class="quiz-meta"><span>QUESTION ${quizIndex+1} OF ${quizQuestions.length}</span><span>UNIT ${q.unit}</span></div>
    <h2 class="quiz-question">${escapeHTML(q.question)}</h2>
    <div class="quiz-options">${q.options.map((o,i)=>`<button class="quiz-option" data-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${escapeHTML(o)}</span></button>`).join('')}</div>
    <div id="quiz-feedback" class="quiz-feedback"></div><div class="quiz-actions"><span style="color:#8491ae;font-size:11px">Score: ${quizScore}</span><button class="primary-button" id="quiz-next" disabled>${quizIndex === quizQuestions.length-1 ? 'Finish quiz' : 'Next question'} <span>→</span></button></div></div>`;
  $$('.quiz-option').forEach(btn=>btn.addEventListener('click',()=>{
    if(answered) return;
    answered=true; selectedOption=Number(btn.dataset.option);
    const correct=selectedOption===q.answer;
    if(correct) quizScore++;
    $$('.quiz-option').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.style.borderColor='#40c99a';if(i===selectedOption&&!correct)b.style.borderColor='#f07891';});
    $('#quiz-feedback').textContent=(correct?'Correct! ':'Not quite. ')+q.explanation;
    $('#quiz-feedback').style.color=correct?'#72e5bf':'#f39baa';
    $('#quiz-next').disabled=false;
  }));
  $('#quiz-next').addEventListener('click',()=>{if(!answered){showToast('Choose an answer first.');return;}quizIndex++;answered=false;selectedOption=null;renderQuizQuestion();});
}
function init() {
  renderSidebarUnits(); renderNotes();
  $$('.nav-item').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.view)));
  $('#sidebar-units').addEventListener('click',e=>{const b=e.target.closest('[data-unit]');if(b){const u=unitById(b.dataset.unit);setView('chat');sendChat(`Give me an overview of Unit ${u.id}: ${u.shortTitle}`);}});
  $('#unit-grid').addEventListener('click',e=>{const b=e.target.closest('[data-unit-chat]');if(b){const u=unitById(b.dataset.unit);setView('chat');sendChat(`Explain Unit ${u.id}: ${u.shortTitle}`);}});
  $$('.quick-card').forEach(btn=>btn.addEventListener('click',()=>setView(btn.dataset.view)));
  $('#new-chat').addEventListener('click',()=>{$('#chat-messages').innerHTML='';addMessage('New conversation started. Ask me about any topic from the OOP syllabus.');setView('chat');});
  $('#chat-form').addEventListener('submit',e=>{e.preventDefault();sendChat($('#chat-input').value);$('#chat-input').value='';});
  $('#suggestions').addEventListener('click',e=>{const b=e.target.closest('[data-prompt]');if(b)sendChat(b.dataset.prompt);});
  $('#notes-search').addEventListener('input',renderNotes); $('#notes-unit').addEventListener('change',renderNotes);
  $('#notes-list').addEventListener('click',e=>{const b=e.target.closest('.ask-topic');if(b){setView('chat');sendChat(`Explain ${b.dataset.topic}`);}});
  $('#start-quiz').addEventListener('click',startQuiz); $('#start-quiz-empty').addEventListener('click',startQuiz);
  $('#mobile-menu').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
}
document.addEventListener('DOMContentLoaded',init);
