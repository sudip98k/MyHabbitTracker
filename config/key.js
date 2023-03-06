// const mongoose=require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/Myhabit-tracker');
// const db=mongoose.connection;
// db.on('error',console.log.bind(console,"Error Connecting"));
// db.once('open',()=>{
//     console.log("Connecting to Database:MongoDB");
// })

const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://sudip98:6VL7uaRkMtUN7XV4@cluster0.f9bjwrh.mongodb.net/?retryWrites=true&w=majority');
const db=mongoose.connection;
db.on('error',console.log.bind(console,"Error Connecting"));
db.once('open',()=>{
    console.log("Connecting to Database:MongoDB");
})

