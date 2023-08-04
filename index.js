// acquire express library
const express=require('express');
// port address
const port=3000;
// call express 
const app=express();

// acquire mongoose & Schema
const db=require('./config/mongoose')
const Task=require('./models/task');

// acquire and use express-ejs-layout
const expressLayout = require('express-ejs-layouts');


// middleware for incoming request object as string or arrays
app.use(express.urlencoded());

// access static file in assets
app.use(express.static('assets'));

// use express layout
app.use(expressLayout)

// extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express route
app.use('/', require('./routes'))


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// this app should listen the port and start serving the page
app.listen(port, function(err){
    if(err){
        console.log(`Gotcha Error while running server: ${err}`)
        return;
    }
    console.log(`server is up and running on port: ${port}`)
})
