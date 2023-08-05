const Task=require('../models/task');
// for deleting  a contact
module.exports.delete=function(req, res){
// get the id from the query in the url
 let id=req.query.id;
// find the contact in the database using id and delete
 Task.findByIdAndDelete(id)
     .then(() => {
        res.redirect('back');
     }).catch((err) => {
        console.log("Error while deleting task from db databse", err);
     });
    
}
