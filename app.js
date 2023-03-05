const express=require('express');
const expressLayouts = require('express-ejs-layouts');
const port=8001;
const mongoose=require('mongoose');
const session=require('express-session');
const flash=require('connect-flash');

//...fire the server.......
const app = express();
//db collect
const db=require('./config/key');
//......ejs.........//
app.use(expressLayouts);
app.use('/assets',express.static('./assets'));

// app.use(express.static(__dirname + '/assets'));

app.set('view engine','ejs');

//...bodyParser.....//
app.use(express.urlencoded({ extended:false}));

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(flash());

//---------Global Variables----------//
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
});