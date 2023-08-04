const Task = require("../models/task");

// function  redirecting to home page
module.exports.home=function(req,res){

    getTask().then(function(FoundItems){
    FoundItems.forEach(i=>{
        i.taskDate=new Date(i.taskDate);
    })
    
        res.render('home',{
            title: 'Todo App',
            task_list: FoundItems
        })
    })
}
async function getTask(){

    const Items = await Task.find({});
    return Items;
  
  }


