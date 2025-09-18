# Episode-01 | Inception

## Theory Assignment

### What is Emmet?

Emmet is a tool in VS Code which we use to get boilerplate code by typing keywords. Ex: html:5 generates a basic html file

### Difference between a Library and Framework?

Library can be used in an existing app and the user still has the control where the code from the library will be used. While in a framework, the control lies with the framework as to where the code files will go and how those will be used.

### What is CDN? Why do we use it?

Content Delivery Networks are used to serve js, css, image files etc in a faster way. The CDN could have distributed servers which could serve files to the user from the closest location.

### Why is React known as React?

Because of its reactive nature to data changes and how it handles updates to the UI

### What is crossorigin in script tag?

Required when the script will be loaded from a different CDN or a different website.

### What is diference between React and ReactDOM

React is the core React code which provides functions like createElement, components etc while ReactDOM provides functions for Document Object Model modifications

### What is difference between react.development.js and react.production.js files via CDN?

Different versions of the react library for different environments. Dev version is helpful for debugging and the files are larger. Producion version is minified, compressed and does not have debugging tools, which reduces load times.

### What is async and defer? - see my Youtube video ;)

Async downloads the script in parallel over the network while the html parsing is in progress and interrupts the process to execute the downloaded scripts. Hence, scripts are executed in an unpredictable order.

Defer downloads the script in parallel over the network while the html parsing is progress but executes them only after the html parsing is done. Hence, scripts are executed in a predictable order.

## Coding Assignment

- Set up all the tools in your laptop
  - VS Code
  - Chrome
  - Extensions of Chrome
- Create a new Git repo
- Build your first Hello World program using,
  - Using just HTML
  - Using JS to manipulate the DOM
  - Using React
    - use CDN Links
    - Create an Element
    - Create nested React Elements
    - Use root.render
- Push code to Github (Theory as well as code)
- Learn about Arrow Functions before the next class

## References:

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8

## From Chat.gpt and PDF Notes

### What is Emmet?

Emmet is a powerful web-developer's toolkit built directly into Visual Studio Code (VS Code) that significantly speeds up HTML and CSS workflow. It leverages abbreviations and short expressions to rapidly generate full code snippets.

### What is a CDN?

Content Delivery Network
A CDN (Content Delivery Network) is a distributed network of servers that store copies of web content (like images, videos, and HTML files) in various geographic locations worldwide. When a user requests content, the CDN delivers it from a server near the user, reducing the physical distance data must travel. This process significantly speeds up website and application loading times, improves performance, and provides better reliability and security by distributing traffic and offloading the origin server. [1, 2, 3, 4, 5]

### How CDNs Work?

1. **Caching**: CDNs cache (temporarily store) copies of web content on strategically located servers called edge servers. [2, 5]
2. **Geographic Distribution**: These edge servers are situated in different data centers or "points of presence" (POPs) around the world. [2, 4]
3. **User Request Routing**: When a user requests a website, the CDN routes the request to the closest edge server. [3, 6]
4. **Faster Delivery**: Because the content is served from a nearby location, the data travels a shorter distance, resulting in faster loading times for the user. [2, 3]

### Key Benefits of using a CDN

- **Improved Performance**: Reduces latency and speeds up the delivery of web content, leading to a better user experience. [2, 3]
- **Increased Reliability**: Distributes content across multiple servers, ensuring high availability and preventing downtime even under heavy traffic. [4, 6]
- **Enhanced Security**: Helps protect websites from attacks like DDoS floods by absorbing malicious traffic before it reaches the origin server. [4, 7]
- **Reduced Bandwidth Costs**: Offloads work from the origin server and reduces the bandwidth consumption, which can lower costs for website owners. [4, 5, 8]
- **Global Reach**: Enables organizations to deliver high-performance content to users worldwide, regardless of their location. [4, 9]

- [1] https://www.geeksforgeeks.org/websites-apps/what-is-cdn/
- [2] https://www.akamai.com/glossary/what-is-a-cdn
- [3] https://www.f5.com/glossary/content-delivery-network-cdn
- [4] https://www.youtube.com/watch?v=nhhfSBm6v4A
- [5] https://www.ibm.com/think/topics/content-delivery-networks
- [6] https://www.youtube.com/watch?v=OvzvhWj7bj0
- [7] https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/
- [8] https://www.cloudflare.com/application-services/products/cdn/
- [9] https://www.keycdn.com/what-is-a-cdn
  Not all images can be exported from Search.

### What is crossorigin in script tag?

- Required when script is loaded from a CDN (Content Delivery Network) or another website
- Only accepts two values - either "anonymous" or "use-credentials
- "anonymous" is same as no value or empty string `<script crossorigin="anonymous">` = `<script crossorigin>` = `<script crossorigin="">`
