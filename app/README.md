
# webpack-react-redux
This is developed using the boilerplate for playing around with react, redux and react-router with the help of webpack.

Contains: 

* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* Redux-saga for API calls.
* An apikey has been generated for development purpose for consuming the weather api.
* hot module replacement support so you can change modules or react components without having to reload the browser
* Sass support, just import your styles wherever you need them. Bootstrap used for better UX.
* eslint to keep your js readable
* much more...



## Run the app

0. ```npm install```
0. ```npm start```


### Assumptions

1.As soon as the app is loaded, weather data is loaded for the user’s current location using navigator.geolocation.
2.As and when user makes any change in the form, the change will be reflected in the Widget.



## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

## Build the app

0. ```restore the db backup file```
0. ```change the db.config.js with the new credentials```