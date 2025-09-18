# Episode-02 | Igniting our App

## Theory Assignment:

### What is `NPM`?

It is a package manager for javascript and node packages.

### What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack/Vite are bundlers - We need these to optimize the app for deploying on production.

### What is `.parcel-cache`

It stores cached files for parcel which help in improving the development experience and the changes are reflected quickly on the localhost site

### What is `npx` ?

npx is a command to execute a package.

### What is difference between `dependencies` vs `devDependencies`

dependencies are packages on which the app depends normally while devDependencies are packages on which the app depends in the developement enviroment

### What is Tree Shaking?

It is a technique to remove unused code i.e. dead code elimiation process

### What is Hot Module Replacement?

Development time tool which injects updated modules into the browser without a full page reload, which improves development speed.

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your

HMR, Tree Shaking, Caching, SSL support, Minified code

### What is `.gitignore`? What should we add and not add into it?

.gitignore is a file in which we list the files/directories that we do not want to push to git. We should list files/directories in .gitignore which can be regenerated on different systems using the files that have been pushed on git. Ex: node_modules, dist, .parcel-cache, etc

### What is the difference between `package.json` and `package-lock.json`

Package.json list all the dependencies for the app but does not mention the exact version required, this is mentioned in the lock file. Also, a package mentioned in package.json might have more dependencies which are listed in the lock file.

### Why should I not modify `package-lock.json`?

It is an auto generated file

### What is `node_modules` ? Is it a good idea to push that on git?

Node_modules has all the code of all the packages which are listed as dependencies in the package lock file. It should not be pushed to git.

### What is the `dist` folder?

Dist folder has the files built by the npx command and these files are served by the server.

### What is `browserlists`

A neat package to mention which browsers should be supported by the app.

### Read about different bundlers: vite, webpack, parcel

OK

### Read about: ^ - caret and ~ - tilde

Caret supports minor and patch updates while tilde only supports patch updates

### Read about Script types in html (MDN Docs)

Used to embed executable code or data

### Project Assignment:

- In your existing project
  ● - intialize `npm` into your repo
  ● - install `react` and `react-dom`
  ● - remove CDN links of react
  ● - install parcel
  ● - ignite your app with parcel
  ● - add scripts for “start” and “build” with parcel commands
  ● - add `.gitignore` file
  ● - add `browserlists`
  ● - build a production version of your code using `parcel build`

### References

● Creating your own create-react-app
● Parcel Documentation
● Parcel on Production
● BrowsersList: https://browserslist.dev/

### Vite vs Webpack vs Parcel

Choose Vite for fast development builds on modern browsers using native ES modules, suitable for most new projects, and Webpack for maximum control and stability in complex enterprise applications requiring extensive configuration. Use Parcel for a quick, zero-configuration start to simple projects and prototypes. [1, 2]

#### Vite (https://vite.dev/)

##### Pros:

- Blazing Fast: Uses native ES Modules for development, providing near-instant server start-up and HMR (Hot Module Replacement). [3, 4]
- Production Bundling: Leverages Rollup with the fast esbuild for optimized production builds. [3, 5, 6, 7]
- Flexible: Supports multiple frameworks and libraries and has a robust plugin API compatible with Rollup. [5, 6, 7, 8]

##### Cons:

- Configuration: While offering built-in options, achieving custom behavior can require familiarizing yourself with its plugin API. [8, 9]

- Best For: Most new projects and developers looking for a modern, efficient development experience. [1, 8]

#### Webpack (https://webpack.js.org/) [1, 2, 10, 11]

##### Pros:

- Maximum Control: Offers extensive customization and configuration for complex applications. [1, 2]
- Stability: A well-established and stable tool that remains necessary for many large-scale projects. [1, 2]
- Rich Ecosystem: Has a large and advanced ecosystem with many plugins available. [8, 12, 13]

##### Cons:

- Slower Development: Can have slow startup times and bundle times, as it bundles all project files during development. [3, 4]

- Best For: Complex enterprise applications where maximum control and stability are prioritized over initial speed. [1, 2]

#### Parcel (https://parceljs.org/) [1, 2, 14]

##### Pros:

- Zero-Configuration: Ideal for quick setups and simple projects that require minimal setup and special requirements. [1, 2]
- Fast Startup: Designed for simplicity and speed, making it a good option for quick prototypes. [1, 2]

##### Cons:

- Less Configuration: While fast and easy to use, it offers less granular control compared to Webpack. [1, 10, 15]

- Best For: Quick prototypes, small projects, or when you need to get started with minimal configuration. [1, 2, 10]

[1] https://betterstack.com/community/guides/scaling-nodejs/vite-alternatives/
[2] https://derkuba.de/posts/en/0325/bundling-hell/
[3] https://medium.com/@iboroinyang01/bundle-up-vite-or-webpack-c260915e0ff7
[4] https://www.youtube.com/watch?v=9OmnmouE6tw
[5] https://fareye.com/resources/blogs/parcel-shipping-optimization
[6] https://patak.dev/vite/ecosystem.html
[7] https://en.wikipedia.org/wiki/Webpack
[8] https://medium.com/trendyol-tech/vite-webpack-killer-or-something-else-87019b4aeca2
[9] https://pieces.app/blog/vite-vs-webpack-which-build-tool-is-right-for-your-project
[10] https://ritza.co/articles/gen-articles/webpack-vs-babel-vs-rollup-vs-gulp-vs-parcel-vs-vite/
[11] https://www.youtube.com/watch?v=i9oGEsNWFEE
[12] https://www.sayonetech.com/blog/vite-vs-webpack/
[13] https://javascript.plainenglish.io/webpack-vs-vite-which-build-tool-is-right-for-your-project-3bedad46d433
[14] https://github.com/parcel-bundler/parcel
[15] https://strapi.io/blog/top-5-alternatives-to-webpack
