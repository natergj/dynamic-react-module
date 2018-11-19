# Dynamic React Modules

This project was created to see if it was possible to develop a React application where various sections could be written, maintained and deployed completely independently of other component modules.
I wanted to see if it was possible and feasible to maintain a single page application where components were loaded as needed without having to have all of the code in a single repository.
With this project, different teams working on different sections of a web app can deploy updates with greater frequency.
Rarely updated sections remain unchanged and each section of the web app can be cached separately.
Teams can also choose to write their part of the web app using whatever technology they prefer with the sole requirement that the web app be wrapped in a single React component.
With this in mind, a larger team should be able to deprecate old code over time by slowly replacing legacy code with new web app modules.
This allows for the potential of different React Router configurations being served to different users to easily allow for beta programs and A/B testing.

## Demo

Install docker on your computer and issue a `docker-compose up` from the base of this project directory.
You will see each of the web app parts are built into their own docker images and started with docker-compose.
An nginx docker container is started to manage proxying requests to the appropriate project container.
Once started, go to [http://localhost:8080](http://localhost:8080) to see project.
Open the web browser developer tools Network tab and then click on each item in the sidebar.
Notice that a network request is made for that module's code only when requested and only the first time it is requested.

## Project parts

### App Loader

This is responsible for loading other web app modules when requested.
The project consists of a header and navigation sidebar.
The individual web apps are loading in the main section of the web page when clicking on their respective item in the sidebar.
The App Loader also provides some libraries as UMD modules that other app modules can use without having to bundle their own version.
These modules are lazily loaded when requested by individual web apps using [SystemJS 2.0](https://github.com/systemjs/systemjs) and [Package Name Maps](https://github.com/systemjs/systemjs/blob/master/docs/package-name-maps.md).

### App Module 1

A basic web app module. This module includes react-router 4 subroutes to dynamically show additional content based on route changes.

### App Module 2

A basic web app that implements components in a library provided by the App Loader.

## Project overview

This project uses the following technologies

- [SystemJS](https://github.com/systemjs/systemjs)
  - [SystemJS](https://github.com/systemjs/systemjs) is used to handle the loading and registering of module
- Webpack
  - Webpack is used because I felt it was the most supported of all of the javascript bundlers for web applications
  - Specific info on webpack can be found in the webpack.config.js file of app-loader
- Webpack Dev Server
  - Webpack Dev Server is used to provide live updates and quick developing
  - A custom websocket implementation was made handle hot reloading of web app modules
  - Specific info on webpack can be found in the webpack.config.js file of app-module-1
- Typescript
  - So many bugs prevented when using Typescript
