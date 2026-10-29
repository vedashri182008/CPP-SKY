# CPP SKY — C++ OOP Syllabus Chatbot

A single-page offline study assistant with a dark navy and purple interface.

## Run quickly
1. Extract `CPP-SKY.zip`.
2. Open the `CPP-SKY` folder in VS Code.
3. Open `index.html` in a browser, or use VS Code Live Server.
4. No API key, login, authentication, backend, or package install is required.

## Project structure
- `index.html` — one-page interface, sidebar, chat, units, notes and quiz views.
- `style.css` — dark navy / purple styling and responsive layout.
- `script.js` — keyword-matching chat, page navigation, notes search and MCQ quiz.
- `data/oop-content.js` — all syllabus topics, explanations, examples, keywords and quiz questions.

## Syllabus topics included
1. **OOP Fundamentals:** procedural vs OOP, paradigms and benefits, data types, control structures, arrays and strings, class/object, function prototypes, member/utility functions, constructors and types, destructors, static members, friend functions/classes and inline functions (see inline keyword in notes/search).
2. **Inheritance:** base/derived classes, class hierarchies, protected members, inheritance types and access modes, constructor/destructor order, overriding, ambiguity, virtual base classes/diamond problem, abstract/friend/nested classes.
3. **Polymorphism:** compile-time/run-time polymorphism, function overloading, unary/binary operator overloading, overriding, base pointers, virtual/pure virtual functions, abstract classes and virtual destructors.
4. **Files and Streams:** fstream/ifstream/ofstream, file opening/closing, modes, reading/writing, getline, file pointers, seekg/seekp/tellg/tellp, navigation and error handling.
5. **Exceptions and Templates:** try/throw/catch, multiple handlers, standard and custom exceptions, rethrowing, function/class templates, argument deduction, specialization and generic programming.
6. **STL:** sequence, ordered associative and unordered containers, multimap/unordered_multimap, iterators, adaptors, algorithms, sorting, searching, applications and complexity.

## Important limitation
This is an offline rule-based chatbot, not a generative AI model. It responds using the knowledge base and keyword matching. Add topics/keywords in `data/oop-content.js` to improve matching and coverage. The visual design/layout has been preserved; the app name is CPP SKY.
