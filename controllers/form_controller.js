const Task = require("../models/task");

module.exports.form = function (req, res) {
  const { task, option, taskDate } = req.body;

  const taskData = new Task({
    task,
    option,
    taskDate,
    completed: false,
  });
  /* 
  const task=new Task(taskData);
  task.save()
  .then(()={
    .then((createdItem) => {
      console.log("Item created:", createdItem);
      return res.redirect("back");
    })
    .catch((error) => {
      console.error("Error creating item:", error);
    });
  })
  */


  Task.create(taskData)
    .then((createdItem) => {
      return res.redirect("/");
    })
    .catch((error) => {
      console.error("Error creating item:", error);
    });
};

