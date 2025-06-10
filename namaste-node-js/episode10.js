// episode10.js
/*
Thread Pool

- What is it and when is it used?
-- Libuv uses a thread from the thread pool to perform tasks like 
--- fs.readFile(+ also for other methods in fs module)
--- or cryto
--- or dns.lookup
--- user specfied input
-- There are 4 threads by default - UV_THREADPOOL_SIZE = 4

- When there are a lot of concurrent incoming requests to the server, we cannot use the thread per connection model
Thread per connection is exactly as it sounds, we create a thread for each request coming to the server
These requests connects to the sockets on the server, we can not keep creating sockets for each request

- In an OS, there are Scalable I/O event notification mechanisms at the kernel level 
-- epoll (Linux)
-- kqueue (MacOS)
- similar algorithms for above two ^
- 1 epoll descriptor can manage many socket descriptors/file descriptors (fds)
- each socket descriptor or file descriptor (fds) can handle one incoming request through its socket
- so, 1 epoll descriptor can handle many incoming requests
- As soon as there is some activity in any of the socket descriptors, epoll will notify Lib.uv
- The event loop in Lib.uv will then handle the request when it is in the poll phase

A web server basically opens a socket and then listens to it
- when any connection comes in, it handles it

Is NodeJS single-threaded or multi-threaded?
- it depends on the code that it is executing
- for synchronous code, NodeJS is single-threaded
- for some of the async things listed above, NodeJS uses the uv thread pool, which makes it multi-threaded

Homework
- Epoll and Kqueue - What Data structure is epoll using? Complexity is O(1) - Why Red/Black Tree?
- FDS (Socket Descriptors)
- Event Emitters
- Streams and Buffers
- Pipes

*/
