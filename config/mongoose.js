// acquire mongpoose library
const mongoose=require('mongoose');

// connect to db database
mongoose.connect('mongodb://127.0.0.1:27017/task_listDB');

const db=mongoose.connection
// error
db.on('error', console.error.bind(console,'error connecting to db'));
// up and running then print the messege
db.once('open',function(){
    console.log('db database connected succesfully');
})