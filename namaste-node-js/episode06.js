// episode06.js
/*
Node.js - Event Driven Architecture, Asynchronous I/O

- libuv
  -- makes async I/O simple
  -- written in C
  -- has event-loop
  -- has thread pool
  -- has a lot of queues inside it I/O queue, Timer queue, etc
- also called non-blocking I/O since async operations like File system read, api calls, setTimeout do not block the main thread

JS Engine - a C++ program
Garbage Collector - part of engine which clears unused memory from memory heap
Memory heap - part of the RAM used by the JS engine to store JS objects

*/
