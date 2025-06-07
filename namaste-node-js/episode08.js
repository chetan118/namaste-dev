// episode06.js
/*
Two Types of Languages

- Interpreted
-- As soon as it receives the code, it goes through it line by line and executes it
-- Fast to start execution and easier to debug
-- Slower overall execution
-- uses Interpreters
-- Example - Python

- Compiled
-- First high level code is compiled into machine code
-- Machine code is run
-- Longer initial compilation time with more complex debugging process 
-- Faster overall execution since the code is pre-compiled into machine code
-- uses Compilers
-- Example - C, C++

V8 JS Engine
Javascript is both interpreted and compiled language.
It has an interpreter as well as a compiler.
It uses Just In Time compilation.

When code is given to the V8 engine, it performs the following steps

1. Parsing
a. Lexical Ananlysis (Tokenization) - code is broken down into tokens
b. Syntax Analysis (Parsing) - AST (Abstract Syntax Tree) is developed. https://astexplorer.net
c. AST is given to the Interpreter

2. Ignition Interpreter
a. Convert the AST to Byte Code
b. Execution of code
c. Also identifies code which is used a lot or run multiple times. This is also called as "Hot code".
d. The interpreter gives this "Hot Code" to the Turbofan Compiler

3. Turbo Fan Compiler (Earlier there was CrankShaft compiler)
a. Job of the compiler is to generate the optimized machine code
b. The optimized machine code is then executed when required
c. This process is also called as optimization

Other Processes

Deoptimization
- Lets say, the interpreter ecnountere a line sum(1, 2) 
- and it identified the sum(a, b) function as HOT code and passed it to the compiler
- The compiler makes an assumption that a and b are numbers
- Later when the code has function calls sum(4, 5) or sum(6, 7) etc,
the code executes very fast since the compiler had generated optimized machine code for this function
- But when the call is sum("x", "y"), the compiler deoptimizes the code 
and this function call is then handled by the interpreter

Inline Caching - https://medium.com/@conboys111/how-javascript-engines-use-inline-caching-to-optimize-your-code-aaf94d3d1801

Copy Elision - https://en.wikipedia.org/wiki/Copy_elision

Garbage Collection (Mark and Sweep Algorithm)
- Orinoco
- Oil pan
- Scavenger
- Mark Compact

V8 Blog
- https://v8.dev/blog/launching-ignition-and-turbofan
- https://v8.dev/blog

*/
