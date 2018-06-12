# Dynamic React Modules

This project was created to see if it was possible to develop a React application where various sections could be written, maintained and deployed completely independently of other component modules.
I wanted to see if it was possible and feasible to maintain a single page application where components were loaded as needed without having to have all of the code in a single repository.

## Demo

Install docker on your computer and issue a `docker-compose up` from the base of this project directory.
You will see each of the web app parts are built into their own docker images and started with docker-compose.
An nginx docker container is stared to manage proxying requests to the appropriate project container.
Once started, go to [http://localhost:8080](http://localhost:8080) to see project.
Open the web browser developer tools Network tab and then click on each item in the sidebar.
Notice that a network request is made for that module's code only when requested and only the first time it is requested.

## Project parts

### App Loader

This is responsible for loading other web app modules when requested.
The project consists of a header and navigation sidebar.
The individual web apps are loading in the main section of the web page when clicking on their respective item in the sidebar.
The App Loader also provides some libraries as AMD modules that other app modules can use without having to bundle their own version.

### App Module 1

A basic web app module. This module includes react-router 4 subroutes to dynamically show additional content based on route changes.

### App Module 2

A basic web app that implements components in a library provided by the App Loader.

## Project overview

This project uses the following technologies

- [SystemJS](https://github.com/systemjs/systemjs)
  - [SystemJS](https://github.com/systemjs/systemjs) is used to handle the loading and registering of module
  - This library allows for easy deletion of a registered module which is needed for hot module reloading
  - This library allows allows for package React in such as way that it can be consumed as an ES6 module. This is necessary with React16 so that individual modules will all be able to reference the same instance of React rather than having their own.
- Webpack
  - Webpack is used because I felt it was the most supported of all of the javascript bundlers
  - Webpack build is a dual process, first npm packages are compiled to AMD libraries and then application code is compiled as an AMD module with npm packages as externals
  - Specific info on webpack can be found in the webpack.config.js file of app-loader
- Webpack Dev Server
  - Webpack Dev Server is used to provide live updates and quick developing
  - A custom websocket implementation was made handle hot reloading of web app modules
  - Specific info on webpack can be found in the webpack.config.js file of app-module-1
- Typescript
  - So many bugs prevented when using Typescript
