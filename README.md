# r³ Foundation Boilerplate

Minimal Boilerplate for Redux + React + React-Router-Redux and Foundation

## Usage

```
npm i
npm start
```

Open [localhost:3000](http://localhost:3000)

Use `CTRL + H` to toggle the Redux Dock Monitor

## What's in it?

Everything what you need to build an awesome Single Page Application:

- [x] [Redux](http://redux.js.org/)
- [x] [React](https://facebook.github.io/react/)
- [x] [react-router-redux](https://github.com/rackt/react-router-redux) (formerly known as redux-simple-router)
  - no [rackt/history](https://github.com/rackt/history) included anymore!
- [x] [redux-devtools](https://github.com/gaearon/redux-devtools)
- [x] [Webpack](https://webpack.github.io/)
- [x] [PostCSS](http://postcss.org/) with [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [Babel](http://babeljs.io/)
- [x] [Foundation Sites](http://foundation.zurb.com/sites/docs/)
  - Sass version

## Content

- responsive menu with a subnav
- button to create a callout (formerly known as as alert)
  - implemented in redux ([action](./src/actions/index.js), [reducer](./src/reducers/index.js), store)
- [3 routes](./src/routes.js)
 - `/` Dashboard
 - `/table` just a scrollable foundatino table
 - `/*` 404 Catching Page
- each container which is mapped to a route is wrapped by the [App](./src/containers/app.js) container
- __App__ loads all important things in a clean way and the proper scope:
  - Font Awesome
  - jQuery
  - what-input
  - Foundation Styles and JavaScript
