// episode09.js
/*
Lib.uv

1. Event Loop
-- The job of event loop is to continuously keep checking the call stack in the JS engine and the callback queues.
-- When the JS engine's call stack is empty (JS engine is idle/main thread is not blocked)
and there are tasks waiting to be executed in the callback queues
the event loop gives one of the tasks from the callback queues to the JS engine's call stack
-- It has a mechanism to prioritize the tasks in the callback queues
-- Event loop keeps running in phases
-- Each phase has its own queue
-- Following are some of the phases
a. timer - when it is in timer phase all callbacks associated with setTimeout and setInterval are executed
b. poll - in poll phase all callbacks associated with I/O are executed
example - incoming api connections, filesystem access, crypto, http.get api call
c. check - setImmediate callbacks are executed in this phase
d. close - Socket.on("close") related callbacks are executed in this phase
-- Priority Cycle - Before each phase, event loop first checks if there are any pending callbacks in 
a. process.nextTick() phase  
b. and then it checks if there are any promise callbacks
// process.nextTick(cb); // 1 - priority cycle (a)
// Promise.resolve(cb); // 2 - priority cycle (b)
// setTimeout(cb, 0); // 3 - timer phase
// setImmediate(cb); // 6 - check phase
// fs.readFile("./file.txt", cb); // 4 - poll phase
// https.get("URL", cb); // 5 - poll phase
-- When there are no callbacks in any of the phases, the event loop will come and wait in the "poll" phase.
This is different from how it works in the browser. The event loop in the browser does not pause or wait, it keeps running


2. Thread Pool

3. Callback Queues
-- there is a separate queue for timers, separate queue for api calls, etc 


*/
