/* CPP SKY syllabus knowledge base: edit this file to add notes, keywords, examples and MCQs. */
const OOP_CONTENT = {
  "units": [
    {
      "id": 1,
      "shortTitle": "OOP Fundamentals",
      "summary": "Programming paradigms, C++ basics, classes, objects, functions, constructors and member types.",
      "topics": [
        {
          "title": "Procedural vs Object-Oriented Programming",
          "explanation": "Procedural programming organizes a program around procedures/functions that operate on data. Object-oriented programming (OOP) groups data and related operations into objects. OOP commonly uses encapsulation, abstraction, inheritance and polymorphism; it can improve modularity, reuse and maintainability, though the best paradigm depends on the problem.",
          "example": "// Procedural style: functions operate on separate data\n// OOP style: data and behaviour are grouped in classes",
          "keywords": [
            "procedural programming",
            "object oriented programming",
            "oop",
            "paradigm",
            "comparison",
            "benefits",
            "advantages"
          ]
        },
        {
          "title": "Programming Paradigms and Benefits of OOP",
          "explanation": "A programming paradigm is a general style of structuring programs. Procedural, object-oriented, functional and logic programming are examples. OOP benefits include modularity, data hiding, reuse through inheritance/composition, extensibility through polymorphism, and easier modelling of real-world entities.",
          "example": "class BankAccount { /* state + operations */ };",
          "keywords": [
            "programming paradigm",
            "benefits of oop",
            "advantages of oop",
            "modularity",
            "reusability"
          ]
        },
        {
          "title": "C++ Data Types, Control Structures, Arrays and Strings",
          "explanation": "C++ has fundamental types such as int, char, bool, float and double; derived and user-defined types include arrays, pointers, references, classes and enums. Control flow includes if/switch, for/while/do-while, and break/continue. Arrays store same-type elements in indexed contiguous positions; std::string represents text and is generally easier to manage than raw character arrays.",
          "example": "int marks[3] = {80, 90, 75};\nstd::string name = \"Asha\";\nfor (int mark : marks) { std::cout << mark << ' '; }",
          "keywords": [
            "data types",
            "control structures",
            "array",
            "arrays",
            "string",
            "strings",
            "char",
            "loop",
            "if",
            "switch"
          ]
        },
        {
          "title": "Class, Object and Access Specifiers",
          "explanation": "A class is a user-defined blueprint containing data members and member functions. An object is an instance of that class. public members are accessible from permitted outside code, private members are limited to the class and its friends, and protected members are also accessible to derived classes.",
          "example": "class Student {\nprivate: int marks;\npublic: void setMarks(int m) { marks = m; }\n};\nStudent s;",
          "keywords": [
            "class",
            "object",
            "data member",
            "member function",
            "access specifier",
            "public",
            "private",
            "protected"
          ]
        },
        {
          "title": "Function Prototype, Member Functions and Utility Functions",
          "explanation": "A function prototype declares a function's name, return type and parameter types before its use. Member functions define class behaviour and may be defined inside or outside the class using the scope resolution operator ::. Utility functions provide reusable operations; const references can avoid unnecessary copies when passing larger objects.",
          "example": "int add(int a, int b); // prototype\nint add(int a, int b) { return a + b; }\n// Outside-class definition: void Student::display() { ... }",
          "keywords": [
            "function prototype",
            "function declaration",
            "member function",
            "utility function",
            "scope resolution",
            "prototype"
          ]
        },
        {
          "title": "Constructors and Constructor Types",
          "explanation": "A constructor initializes an object and has the same name as its class with no return type. Common forms taught in introductory C++ include default, parameterized and copy constructors. Constructors can be overloaded; modern C++ also supports move constructors and initializer lists.",
          "example": "class Point {\npublic: int x, y;\nPoint() : x(0), y(0) {}\nPoint(int a, int b) : x(a), y(b) {}\nPoint(const Point& p) : x(p.x), y(p.y) {}\n};",
          "keywords": [
            "constructor",
            "default constructor",
            "parameterized constructor",
            "copy constructor",
            "constructor overloading",
            "initializer list"
          ]
        },
        {
          "title": "Destructors",
          "explanation": "A destructor runs when an object's lifetime ends and is written as ~ClassName(). It has no return type and takes no parameters. Destructors release owned resources; a base class used polymorphically should generally have a virtual destructor.",
          "example": "class Demo {\npublic:\n ~Demo() { std::cout << \"Object destroyed\"; }\n};",
          "keywords": [
            "destructor",
            "virtual destructor",
            "object lifetime"
          ]
        },
        {
          "title": "Static Members",
          "explanation": "A static data member belongs to the class rather than each individual object, so all objects share it. A static member function can be called using the class name and has no this pointer; it directly accesses static members.",
          "example": "class Counter {\npublic:\n static int count;\n Counter() { ++count; }\n};\nint Counter::count = 0;",
          "keywords": [
            "static member",
            "static data member",
            "static member function",
            "static"
          ]
        },
        {
          "title": "Friend Function and Friend Class",
          "explanation": "A friend function or friend class is granted access to a class's private and protected members. Friendship is explicit, not automatically reciprocal or inherited. Use it selectively because it relaxes encapsulation.",
          "example": "class Box {\n int value = 7;\n friend int readValue(const Box& b);\n};\nint readValue(const Box& b) { return b.value; }",
          "keywords": [
            "friend function",
            "friend class",
            "friend",
            "encapsulation"
          ]
        }
      ]
    },
    {
      "id": 2,
      "shortTitle": "Inheritance",
      "summary": "Base and derived classes, inheritance types and modes, constructor order, ambiguity and class hierarchies.",
      "topics": [
        {
          "title": "Base Class and Derived Class",
          "explanation": "Inheritance lets a derived class acquire accessible members and behaviour from a base class and extend or specialize them. It is useful for reuse and modelling an is-a relationship. Private base members remain part of the base subobject but are not directly accessible by derived-class code.",
          "example": "class Animal { public: void eat() {} };\nclass Dog : public Animal { public: void bark() {} };",
          "keywords": [
            "inheritance",
            "base class",
            "derived class",
            "relationship",
            "is-a",
            "code reuse"
          ]
        },
        {
          "title": "Types of Inheritance and Class Hierarchies",
          "explanation": "Single inheritance has one direct base; multiple inheritance has multiple direct bases; multilevel inheritance forms a chain; hierarchical inheritance has several derived classes sharing a base; hybrid inheritance combines patterns. A class hierarchy represents these relationships.",
          "example": "class A {};\nclass B : public A {};       // single\nclass C : public B {};       // multilevel\nclass D : public A {};       // hierarchical",
          "keywords": [
            "types of inheritance",
            "single inheritance",
            "multiple inheritance",
            "multilevel inheritance",
            "hierarchical inheritance",
            "hybrid inheritance",
            "class hierarchy"
          ]
        },
        {
          "title": "Public, Protected and Private Inheritance",
          "explanation": "In public inheritance, base public members remain public and base protected members remain protected. In protected inheritance, both become protected. In private inheritance, both become private. Base-class private members cannot be directly accessed in the derived class under any of these modes.",
          "example": "class Base { public: int a; protected: int b; private: int c; };\nclass PublicChild : public Base {};",
          "keywords": [
            "public inheritance",
            "protected inheritance",
            "private inheritance",
            "inheritance mode",
            "access mode"
          ]
        },
        {
          "title": "Protected Members and Member Access",
          "explanation": "protected members are accessible within their class, its friends, and derived-class member functions, subject to C++ access rules. They are not generally accessible through an ordinary object from unrelated code. Choose access levels to balance encapsulation and extensibility.",
          "example": "class Base { protected: int value = 10; };\nclass Child : public Base { public: int get() { return value; } };",
          "keywords": [
            "protected member",
            "protected",
            "member access",
            "access control"
          ]
        },
        {
          "title": "Constructor and Destructor Order in Inheritance",
          "explanation": "When a derived object is constructed, virtual bases are initialized first, then direct bases in declaration order, then members in declaration order, then the derived constructor body. Destruction reverses the completed construction order. Base constructors can be selected through a member-initializer list.",
          "example": "class Base { public: Base() { std::cout << \"Base \"; } };\nclass Derived : public Base { public: Derived() { std::cout << \"Derived\"; } };",
          "keywords": [
            "constructor order",
            "destructor order",
            "base constructor",
            "derived constructor",
            "inheritance constructor"
          ]
        },
        {
          "title": "Function Overriding in Derived Classes",
          "explanation": "Overriding provides a derived-class implementation of a virtual base-class function with a matching signature. Use override to ask the compiler to verify that the function truly overrides a base virtual function.",
          "example": "struct Base { virtual void show() {} };\nstruct Derived : Base { void show() override {} };",
          "keywords": [
            "overriding",
            "function overriding",
            "override",
            "virtual function"
          ]
        },
        {
          "title": "Ambiguity in Multiple Inheritance",
          "explanation": "If two base classes provide a member with the same name, an unqualified use in a derived class may be ambiguous. Qualify the member with BaseName::member or redesign the hierarchy when appropriate.",
          "example": "struct A { void show() {} };\nstruct B { void show() {} };\nstruct C : A, B { void test() { A::show(); B::show(); } };",
          "keywords": [
            "ambiguity",
            "multiple inheritance ambiguity",
            "scope resolution",
            "ambiguous base"
          ]
        },
        {
          "title": "Virtual Base Class and Diamond Problem",
          "explanation": "In a diamond hierarchy, two intermediate classes may inherit the same base, causing two base subobjects. Virtual inheritance lets the most-derived object share one virtual base subobject.",
          "example": "struct A { int value; };\nstruct B : virtual A {};\nstruct C : virtual A {};\nstruct D : B, C {};",
          "keywords": [
            "virtual base class",
            "virtual inheritance",
            "diamond problem",
            "multiple inheritance"
          ]
        },
        {
          "title": "Abstract, Friend and Nested Classes",
          "explanation": "An abstract class has at least one pure virtual function and cannot be instantiated directly. A friend class has access to another class's private/protected members when friendship is granted. A nested class is declared inside another class's scope and can be useful for grouping helper types.",
          "example": "class Interface { public: virtual void run() = 0; };\nclass Outer { public: class Inner { }; };",
          "keywords": [
            "abstract class",
            "friend class",
            "nested class",
            "pure virtual"
          ]
        }
      ]
    },
    {
      "id": 3,
      "shortTitle": "Polymorphism",
      "summary": "Compile-time and run-time polymorphism, function/operator overloading, virtual functions and abstract classes.",
      "topics": [
        {
          "title": "Polymorphism: Compile-Time and Run-Time",
          "explanation": "Polymorphism means one interface can represent different behaviour. Compile-time polymorphism includes function and operator overloading. Run-time polymorphism uses virtual functions and dynamic dispatch through base pointers or references.",
          "example": "void print(int);\nvoid print(const std::string&); // compile-time overloads",
          "keywords": [
            "polymorphism",
            "compile-time polymorphism",
            "runtime polymorphism",
            "run-time polymorphism",
            "static polymorphism",
            "dynamic polymorphism"
          ]
        },
        {
          "title": "Function Overloading",
          "explanation": "Function overloading defines several functions with the same name but different parameter lists. The compiler chooses a viable overload based on argument types and conversions. Return type alone cannot distinguish overloads.",
          "example": "int area(int side);\ndouble area(double radius);\nint sum(int a, int b);",
          "keywords": [
            "function overloading",
            "overloading",
            "overloaded function",
            "parameter list"
          ]
        },
        {
          "title": "Operator Overloading: Unary and Binary",
          "explanation": "Operator overloading gives an existing operator a suitable meaning for user-defined types. Unary operators act on one operand and binary operators on two. At least one operand must be a user-defined type; you cannot invent operators or change precedence/arity rules arbitrarily.",
          "example": "class Number {\npublic:\n int value;\n Number(int v) : value(v) {}\n Number operator+(const Number& n) const { return Number(value + n.value); }\n Number operator-() const { return Number(-value); }\n};",
          "keywords": [
            "operator overloading",
            "unary operator",
            "binary operator",
            "overload operator",
            "operator"
          ]
        },
        {
          "title": "Function Overriding and Virtual Functions",
          "explanation": "A virtual member function enables dynamic dispatch when called through a base pointer or reference. The final overrider for the object's dynamic type is selected at run time. The override specifier helps catch signature mistakes.",
          "example": "struct Shape { virtual void draw() { } virtual ~Shape() = default; };\nstruct Circle : Shape { void draw() override { } };\nShape* p = new Circle(); p->draw();",
          "keywords": [
            "virtual function",
            "dynamic binding",
            "late binding",
            "overriding",
            "base class pointer",
            "base pointer"
          ]
        },
        {
          "title": "Pure Virtual Functions and Abstract Classes",
          "explanation": "A pure virtual function is declared with = 0. A class with a pure virtual function that has no final overrider remains abstract and cannot be instantiated. Derived classes can become concrete by implementing the required functions.",
          "example": "class Shape {\npublic:\n virtual double area() const = 0;\n virtual ~Shape() = default;\n};",
          "keywords": [
            "pure virtual function",
            "pure virtual",
            "abstract class",
            "= 0"
          ]
        },
        {
          "title": "Virtual Destructors and Base-Class Pointers",
          "explanation": "If a derived object may be deleted through a base-class pointer, the base class should have a virtual destructor; otherwise deleting through that pointer can cause undefined behaviour. Base pointers and references are common tools for run-time polymorphism.",
          "example": "Shape* p = new Circle();\ndelete p; // safe when Shape has a virtual destructor",
          "keywords": [
            "virtual destructor",
            "base class pointer",
            "base pointer",
            "dynamic dispatch"
          ]
        }
      ]
    },
    {
      "id": 4,
      "shortTitle": "Files and Streams",
      "summary": "File stream classes, opening/closing files, reading/writing, file modes, pointers and error handling.",
      "topics": [
        {
          "title": "File Handling and Stream Classes",
          "explanation": "C++ file I/O is commonly provided by <fstream>. ifstream reads from files, ofstream writes to files, and fstream supports input and output. Stream objects provide operators and state flags for working with files.",
          "example": "#include <fstream>\nstd::ifstream input(\"input.txt\");\nstd::ofstream output(\"output.txt\");\nstd::fstream both;",
          "keywords": [
            "file handling",
            "file stream",
            "stream classes",
            "fstream",
            "ifstream",
            "ofstream",
            "header file"
          ]
        },
        {
          "title": "Opening and Closing Files",
          "explanation": "Open a file using a stream constructor or open(). Use is_open() or stream-state checks to verify success. close() closes a file explicitly; file stream objects also close open files when destroyed. A file may fail to open due to a missing path or permissions.",
          "example": "std::ofstream out;\nout.open(\"notes.txt\", std::ios::out);\nif (out.is_open()) out << \"Revision\";\nout.close();",
          "keywords": [
            "opening files",
            "open file",
            "closing files",
            "close file",
            "is_open",
            "file operation"
          ]
        },
        {
          "title": "File Modes",
          "explanation": "Common file modes include ios::in for input, ios::out for output, ios::app to append at the end, ios::ate to initially position at the end, ios::trunc to truncate existing content, and ios::binary for binary mode. Modes can be combined with |.",
          "example": "std::ofstream out(\"log.txt\", std::ios::out | std::ios::app);",
          "keywords": [
            "file modes",
            "ios::in",
            "ios::out",
            "ios::app",
            "ios::ate",
            "ios::trunc",
            "ios::binary"
          ]
        },
        {
          "title": "Reading From and Writing To Files",
          "explanation": "Use << to write formatted output and >> to extract formatted input. std::getline reads a full line including spaces. For larger or binary data, unformatted read/write operations may be used. Always check stream state and validate data.",
          "example": "std::ofstream out(\"message.txt\");\nout << \"Hello C++\";\nout.close();\nstd::ifstream in(\"message.txt\");\nstd::string line; std::getline(in, line);",
          "keywords": [
            "reading from file",
            "writing to file",
            "read file",
            "write file",
            "getline",
            "file input",
            "file output"
          ]
        },
        {
          "title": "File Pointers and Navigation",
          "explanation": "The get position is used for input and the put position for output. seekg/tellg move or report the input position; seekp/tellp do so for output. std::ios::beg, cur and end identify reference positions.",
          "example": "in.seekg(0, std::ios::beg);\nauto start = in.tellg();\nout.seekp(0, std::ios::end);",
          "keywords": [
            "file pointer",
            "file navigation",
            "seekg",
            "seekp",
            "tellg",
            "tellp",
            "get pointer",
            "put pointer"
          ]
        },
        {
          "title": "File Error Handling",
          "explanation": "Check is_open(), good(), fail(), bad() or the stream's boolean conversion to detect problems. A failed extraction can set failbit; reaching the end sets eofbit. Prefer checking the operation itself, for example while (std::getline(in, line)).",
          "example": "std::string line;\nwhile (std::getline(in, line)) {\n    std::cout << line << '\\\\n';\n}\nif (in.bad()) std::cerr << \"I/O error\";",
          "keywords": [
            "file error handling",
            "error handling",
            "failbit",
            "badbit",
            "eofbit",
            "good",
            "fail"
          ]
        }
      ]
    },
    {
      "id": 5,
      "shortTitle": "Exceptions & Templates",
      "summary": "Try/catch/throw, standard and custom exceptions, function/class templates, deduction and specialization.",
      "topics": [
        {
          "title": "Exception Handling: try, throw and catch",
          "explanation": "Place code that may fail inside try. throw signals an exception; a matching catch handler handles it. Exceptions separate error handling from normal logic. Catch standard exceptions by const reference to avoid unnecessary copies and preserve polymorphism.",
          "example": "try {\n if (denominator == 0) throw std::runtime_error(\"divide by zero\");\n} catch (const std::exception& e) {\n std::cerr << e.what();\n}",
          "keywords": [
            "exception handling",
            "try",
            "throw",
            "catch",
            "try catch throw"
          ]
        },
        {
          "title": "Built-In and Standard Exceptions",
          "explanation": "C++ permits throwing values of many types, but standard exceptions typically derive from std::exception. Examples include std::runtime_error, std::logic_error, std::invalid_argument, std::out_of_range and std::bad_alloc. Prefer meaningful exception types over arbitrary values in application code.",
          "example": "throw std::invalid_argument(\"age must be positive\");",
          "keywords": [
            "built-in exception",
            "standard exception",
            "std::exception",
            "runtime_error",
            "logic_error",
            "invalid_argument",
            "out_of_range"
          ]
        },
        {
          "title": "Multiple Catch Blocks and Rethrowing",
          "explanation": "A try block can have multiple catch handlers. Place specific exception handlers before broader base types so they can be reached. Use throw; inside a handler to rethrow the currently handled exception.",
          "example": "try { /* operation */ }\ncatch (const std::invalid_argument& e) { /* specific */ }\ncatch (const std::exception& e) { /* general */ }",
          "keywords": [
            "multiple catch",
            "catch block",
            "rethrow",
            "throw;",
            "exception types"
          ]
        },
        {
          "title": "Custom/User-Defined Exceptions",
          "explanation": "A custom exception can be represented by a class, often derived from std::exception, with a what() method describing the problem. Custom types let callers distinguish application-specific error conditions.",
          "example": "class AppError : public std::runtime_error {\npublic:\n using std::runtime_error::runtime_error;\n};\nthrow AppError(\"invalid record\");",
          "keywords": [
            "custom exception",
            "user defined exception",
            "user-defined exception",
            "what()",
            "exception class"
          ]
        },
        {
          "title": "Function Templates and Argument Deduction",
          "explanation": "A function template describes a family of functions parameterized by types or values. The compiler often deduces template arguments from function arguments; explicit template arguments can be supplied when deduction is not sufficient or when desired.",
          "example": "template <typename T>\nT maximum(T a, T b) { return a > b ? a : b; }\nauto m = maximum(4, 9);",
          "keywords": [
            "function template",
            "template function",
            "template argument deduction",
            "argument deduction",
            "template argument",
            "template parameter"
          ]
        },
        {
          "title": "Class Templates",
          "explanation": "A class template describes a family of class types. Template parameters allow containers and utility classes to work with different types. Template definitions are commonly placed in headers so the compiler can instantiate them where needed.",
          "example": "template <typename T>\nclass Box {\npublic: T value;\nexplicit Box(T v) : value(v) {}\n};\nBox<int> n(5);",
          "keywords": [
            "class template",
            "template class",
            "class templates",
            "generic class"
          ]
        },
        {
          "title": "Template Specialization",
          "explanation": "Specialization supplies a tailored implementation for a particular template argument. Full specialization defines a specific case; partial specialization is available for class templates and variable templates, but not function templates. Overloaded functions are often used for function-template-specific behaviour.",
          "example": "template <typename T> struct Printer { static void print() {} };\ntemplate <> struct Printer<bool> { static void print() {} };",
          "keywords": [
            "template specialization",
            "specialization",
            "full specialization",
            "partial specialization"
          ]
        },
        {
          "title": "Template Definitions and Generic Programming",
          "explanation": "Templates support generic programming by allowing code to be written independently of a particular type. Template parameters may be types, values or template templates. Constraints/concepts in modern C++ can express requirements on template arguments.",
          "example": "template <typename T, std::size_t N>\nstruct Buffer { T data[N]; };",
          "keywords": [
            "template definition",
            "generic programming",
            "template arguments",
            "templates"
          ]
        }
      ]
    },
    {
      "id": 6,
      "shortTitle": "Standard Template Library",
      "summary": "STL containers, iterators, sequence and associative containers, adaptors, algorithms, sorting and searching.",
      "topics": [
        {
          "title": "STL Overview and Components",
          "explanation": "The Standard Template Library provides generic containers, iterators, algorithms and function objects. Containers manage collections, iterators describe positions/ranges, and algorithms operate on ranges. Include the standard header required by each component.",
          "example": "#include <vector>\n#include <algorithm>\nstd::vector<int> v{3, 1, 2};\nstd::sort(v.begin(), v.end());",
          "keywords": [
            "stl",
            "standard template library",
            "components",
            "containers",
            "iterators",
            "algorithms",
            "function objects"
          ]
        },
        {
          "title": "Sequence Containers",
          "explanation": "Sequence containers store elements in a linear sequence. vector offers dynamic contiguous storage; deque supports efficient operations at both ends; list is a doubly linked list; forward_list is singly linked; array is fixed-size. Select based on access and insertion patterns.",
          "example": "std::vector<int> v{10, 20};\nv.push_back(30);\nstd::deque<int> d{1, 2};\nd.push_front(0);",
          "keywords": [
            "sequence containers",
            "sequence container",
            "vector",
            "deque",
            "list",
            "forward_list",
            "array"
          ]
        },
        {
          "title": "Associative Containers: set, map and Multi-Variants",
          "explanation": "Ordered associative containers maintain keys in sorted order. set stores unique keys, multiset allows equivalent keys, map stores unique key-value pairs, and multimap allows multiple entries with equivalent keys. Their typical search, insertion and removal complexities are logarithmic.",
          "example": "std::map<std::string, int> marks;\nmarks[\"Asha\"] = 90;\nstd::multimap<int, std::string> byMark;",
          "keywords": [
            "associative containers",
            "associative container",
            "set",
            "multiset",
            "map",
            "multimap",
            "ordered container"
          ]
        },
        {
          "title": "Unordered Associative Containers",
          "explanation": "unordered_set, unordered_multiset, unordered_map and unordered_multimap use hashing and do not maintain sorted iteration order. Their average lookup/insertion complexity is often constant, though worst-case operations can be linear. unordered_multimap permits multiple values for equivalent keys.",
          "example": "std::unordered_map<std::string, int> scores;\nstd::unordered_multimap<int, std::string> groups;",
          "keywords": [
            "unordered container",
            "unordered containers",
            "unordered_map",
            "unordered_multimap",
            "unordered_set",
            "unordered_multiset",
            "hashing"
          ]
        },
        {
          "title": "Iterators and Iterator Categories",
          "explanation": "Iterators provide a common way to traverse container elements. begin() and end() define a half-open range [begin, end). Iterator capabilities vary: input/output, forward, bidirectional and random-access; not every algorithm works with every iterator category.",
          "example": "for (auto it = v.begin(); it != v.end(); ++it) {\n    std::cout << *it << ' ';\n}",
          "keywords": [
            "iterator",
            "iterators",
            "iterator categories",
            "begin",
            "end",
            "range"
          ]
        },
        {
          "title": "STL Algorithms: Searching and Sorting",
          "explanation": "Algorithms such as find, count, binary_search, lower_bound, reverse and sort operate on iterator ranges. std::sort requires random-access iterators and typically runs in O(N log N); linear find is O(N). binary_search requires a range sorted according to the same ordering.",
          "example": "std::sort(v.begin(), v.end());\nauto it = std::find(v.begin(), v.end(), 20);\nbool found = std::binary_search(v.begin(), v.end(), 20);",
          "keywords": [
            "stl algorithms",
            "algorithm",
            "sorting",
            "sort",
            "searching",
            "search",
            "find",
            "binary_search",
            "lower_bound",
            "complexity"
          ]
        },
        {
          "title": "Container Adaptors: stack, queue and priority_queue",
          "explanation": "Container adaptors provide restricted interfaces over an underlying container. stack follows LIFO, queue follows FIFO, and priority_queue exposes the highest-priority element according to its comparison rule. They do not provide general iterators like sequence containers.",
          "example": "std::stack<int> st; st.push(1); st.push(2); st.pop();\nstd::queue<int> q; q.push(1); q.pop();\nstd::priority_queue<int> pq; pq.push(8);",
          "keywords": [
            "container adaptors",
            "container adaptor",
            "stack",
            "queue",
            "priority_queue",
            "lifo",
            "fifo"
          ]
        },
        {
          "title": "STL Applications and Complexity",
          "explanation": "Use vector for indexed dynamic sequences, map for ordered key-value lookup, unordered_map for hash-based lookup, set for unique ordered values, and queue/stack for restricted access patterns. Big-O analysis describes how operations scale with input size and helps choose an appropriate container/algorithm.",
          "example": "// Choose by operations needed:\n// vector: indexed access\n// map: ordered keys\n// unordered_map: average fast key lookup",
          "keywords": [
            "stl applications",
            "applications",
            "complexity",
            "time complexity",
            "big o",
            "container selection"
          ]
        }
      ]
    }
  ],
  "questions": [
    {
      "unit": 1,
      "question": "Which OOP principle bundles data and related methods together?",
      "options": [
        "Inheritance",
        "Encapsulation",
        "Compilation",
        "Iteration"
      ],
      "answer": 1,
      "explanation": "Encapsulation groups state and behaviour and controls access."
    },
    {
      "unit": 1,
      "question": "Which statement best describes a class?",
      "options": [
        "A loop",
        "A blueprint for objects",
        "A file stream",
        "A pointer only"
      ],
      "answer": 1,
      "explanation": "A class defines the structure and behaviour of its objects."
    },
    {
      "unit": 1,
      "question": "Which special member is called when an object's lifetime ends?",
      "options": [
        "Constructor",
        "Destructor",
        "Friend function",
        "Prototype"
      ],
      "answer": 1,
      "explanation": "The destructor is invoked when the object is destroyed."
    },
    {
      "unit": 1,
      "question": "Which type is used for text in modern C++?",
      "options": [
        "std::file",
        "std::string",
        "std::loop",
        "std::text"
      ],
      "answer": 1,
      "explanation": "std::string is the standard string class."
    },
    {
      "unit": 2,
      "question": "Which inheritance type has one derived class inherit from multiple base classes?",
      "options": [
        "Single",
        "Multilevel",
        "Multiple",
        "Hierarchical"
      ],
      "answer": 2,
      "explanation": "Multiple inheritance has more than one direct base class."
    },
    {
      "unit": 2,
      "question": "Which keyword marks a virtual base inheritance relationship?",
      "options": [
        "static",
        "friend",
        "virtual",
        "inline"
      ],
      "answer": 2,
      "explanation": "Virtual inheritance helps share one base subobject in a diamond hierarchy."
    },
    {
      "unit": 2,
      "question": "Which constructor executes before the derived constructor body?",
      "options": [
        "Derived constructor",
        "Destructor",
        "Copy assignment",
        "Friend function"
      ],
      "answer": 0,
      "explanation": "Base subobjects are initialized before the derived constructor body."
    },
    {
      "unit": 2,
      "question": "What is a common way to resolve a same-name base member ambiguity?",
      "options": [
        "Delete all constructors",
        "Use ios::app",
        "Use sizeof only",
        "Make it a template"
      ],
      "answer": 0,
      "explanation": "Scope qualification selects the intended base member."
    },
    {
      "unit": 3,
      "question": "Function overloading is generally which type of polymorphism?",
      "options": [
        "Compile-time",
        "Run-time only",
        "File polymorphism",
        "Memory polymorphism"
      ],
      "answer": 0,
      "explanation": "The compiler resolves overloads from argument lists."
    },
    {
      "unit": 3,
      "question": "Which keyword enables run-time dispatch for a member function?",
      "options": [
        "virtual",
        "static",
        "friend",
        "typedef"
      ],
      "answer": 0,
      "explanation": "Virtual functions support dynamic dispatch through base pointers/references."
    },
    {
      "unit": 3,
      "question": "A pure virtual function declaration uses which suffix?",
      "options": [
        "== 0",
        "= 0",
        "-> 0",
        ":: 0"
      ],
      "answer": 1,
      "explanation": "A pure virtual function is declared with = 0."
    },
    {
      "unit": 3,
      "question": "Which operator can be overloaded to define addition for a user-defined type?",
      "options": [
        "operator+",
        "newclass",
        "addoperator",
        "plus!"
      ],
      "answer": 0,
      "explanation": "operator+ defines overloaded addition."
    },
    {
      "unit": 4,
      "question": "Which stream class is used to read from a file?",
      "options": [
        "ofstream",
        "ifstream",
        "ostream",
        "ostringstream"
      ],
      "answer": 1,
      "explanation": "ifstream is the input file stream."
    },
    {
      "unit": 4,
      "question": "Which file mode appends output at the end?",
      "options": [
        "ios::in",
        "ios::trunc",
        "ios::app",
        "ios::binary only"
      ],
      "answer": 2,
      "explanation": "ios::app directs output to the file's end."
    },
    {
      "unit": 4,
      "question": "Which pair is used for input-position navigation?",
      "options": [
        "seekp and tellp",
        "seekg and tellg",
        "push and pop",
        "find and sort"
      ],
      "answer": 1,
      "explanation": "seekg and tellg move/report the get position."
    },
    {
      "unit": 5,
      "question": "Which keyword throws an exception?",
      "options": [
        "try",
        "catch",
        "throw",
        "template"
      ],
      "answer": 2,
      "explanation": "throw signals an exception."
    },
    {
      "unit": 5,
      "question": "Which keyword starts an exception handler?",
      "options": [
        "try",
        "catch",
        "typename",
        "include"
      ],
      "answer": 1,
      "explanation": "A matching catch clause handles the exception."
    },
    {
      "unit": 5,
      "question": "What does a function template allow?",
      "options": [
        "Only one fixed function",
        "Closing a file",
        "Creating a base class automatically",
        "Disabling exceptions"
      ],
      "answer": 0,
      "explanation": "Templates enable generic functions across types."
    },
    {
      "unit": 5,
      "question": "Which kind of template may be partially specialized?",
      "options": [
        "Function template",
        "Class template",
        "Only ordinary function",
        "Constructor only"
      ],
      "answer": 1,
      "explanation": "Partial specialization is available for class templates, not function templates."
    },
    {
      "unit": 6,
      "question": "Which STL container is a dynamic array?",
      "options": [
        "std::stack",
        "std::map",
        "std::vector",
        "std::queue"
      ],
      "answer": 2,
      "explanation": "vector is a resizable sequence container."
    },
    {
      "unit": 6,
      "question": "Which container allows repeated equivalent ordered keys?",
      "options": [
        "map",
        "set",
        "multimap",
        "unordered_set"
      ],
      "answer": 2,
      "explanation": "multimap permits multiple entries with equivalent keys."
    },
    {
      "unit": 6,
      "question": "Which adaptor follows LIFO?",
      "options": [
        "queue",
        "stack",
        "map",
        "vector"
      ],
      "answer": 1,
      "explanation": "A stack removes the last item pushed."
    },
    {
      "unit": 6,
      "question": "Which algorithm sorts a random-access range?",
      "options": [
        "std::find",
        "std::sort",
        "std::count",
        "std::push"
      ],
      "answer": 1,
      "explanation": "std::sort sorts a range of random-access iterators."
    },
    {
      "unit": 6,
      "question": "What is the typical complexity of std::sort?",
      "options": [
        "O(1) always",
        "O(N log N)",
        "O(N^3) always",
        "O(2^N)"
      ],
      "answer": 1,
      "explanation": "std::sort has O(N log N) complexity in typical standard guarantees."
    }
  ]
};
