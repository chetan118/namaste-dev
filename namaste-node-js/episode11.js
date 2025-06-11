// episode11.js
/*
Creating a Server

Client opens a socket to make a TCP/IP connection to the server.
Protocol is set of rules.
Sockets operate using the TCP/IP protocol (Transmission Control Protocol/Internet Protocol).

The format/language in which the response will be sent back to the client is determined by the following protocols
HTTP - Hyper Text Transfer Protocol
FTP - File Transfer Protocol
SMTP - Simple Mail Transfer Protocol
and so on...

Generally we create a HTTP web server with NodeJS which listens for incoming requests.
Used for sending text, html, json data, etc
Server sends data in streams of packets/chunks. This is controlled by TCP/IP. Hence transmission control protocol.
The TCP/IP protocol ensures that data is transmission is properly managed.

In NodeJS, there are concepts of streams and buffers that are used for handling
and writing code related to data transmission.

Domain Name Server
Manages the mapping between the Domain Name and the IP
The browser first makes a call to the DNS server to fetch the IP

We can have multiple HTTP servers running on the same server (physical server/hardware/computer).
i.e. multiple NodeJS applications running on the same server
In this case the port number defines which server the request is supposed to be sent to
Example
one http server running on port 3001 and another running on port 3000
a request coming to 120.324.3.1:3001 will be sent to the 1st http server

there might be other servers as well on the same server (physical) 
like database server, mail server, file server, etc
Each of these servers are differentiated by port numbers

a server might connect to other servers as well
example - namastedev frontend and backend are on the same server
but the database, video files, images are hosted on some other servers
so when we request a course video, the namastedev server gets the video from another server

Web Sockets
web sockets are persistent connections,
once the connection is opened the client and the server can have 2 way communication until the connection is closed
Eg - Live chat app


*/
