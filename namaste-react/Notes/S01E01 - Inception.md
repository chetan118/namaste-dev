# Episode-01 | Inception

## What is Emmet?

Emmet is a powerful web-developer's toolkit built directly into Visual Studio Code (VS Code) that significantly speeds up HTML and CSS workflow. It leverages abbreviations and short expressions to rapidly generate full code snippets.

## What is a CDN?

Content Delivery Network
A CDN (Content Delivery Network) is a distributed network of servers that store copies of web content (like images, videos, and HTML files) in various geographic locations worldwide. When a user requests content, the CDN delivers it from a server near the user, reducing the physical distance data must travel. This process significantly speeds up website and application loading times, improves performance, and provides better reliability and security by distributing traffic and offloading the origin server. [1, 2, 3, 4, 5]

### How CDNs Work?

1. **Caching**: CDNs cache (temporarily store) copies of web content on strategically located servers called edge servers. [2, 5]
2. **Geographic Distribution**: These edge servers are situated in different data centers or "points of presence" (POPs) around the world. [2, 4]
3. **User Request Routing**: When a user requests a website, the CDN routes the request to the closest edge server. [3, 6]
4. **Faster Delivery**: Because the content is served from a nearby location, the data travels a shorter distance, resulting in faster loading times for the user. [2, 3]

### Key Benefits

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

## What is crossorigin in script tag?

- Required when script is loaded from a CDN (Content Delivery Network) or another website
- Only accepts two values - either "anonymous" or "use-credentials
- "anonymous" is same as no value or empty string `<script crossorigin="anonymous">` = `<script crossorigin>` = `<script crossorigin="">`
