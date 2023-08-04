const express=require('express');
const Task = require("../models/task");
const router=express.Router();

const homeController=require('../controllers/homeController');
const formController=require('../controllers/form_controller');
const deleteController=require('../controllers/deleteController');
// const deleteSelectedTaskController=require('../controllers/deletetask_controller');


router.get('/', homeController.home);
router.post('/create-tasklist', formController.form);
router.get('/delete-task', deleteController.delete);
// router.get('./delete-selectedTask', deleteSelectedTaskController.deleteSelected);



router.post('/update-task/:id', async (req, res) => {
    const taskId = req.params.id;
   
  
    try {
      const task = await Task.findById(taskId);
      
      task.completed = !task.completed;
      await task.save();
  
      res.json({ success: true });
    //   res.redirect('/'); // Redirect back to your task list
    } catch (error) {
      console.error(error);
    }
  });
  

module.exports=router;