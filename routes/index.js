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



router.put('/update-task/:id', async (req, res) => {
    const taskId = req.params.id;
   
    try {
      const task = await Task.findById(taskId);
      
      task.completed = !task.completed;
      await task.save();

      res.status(200).json({ completed: task.completed });
    //   res.redirect('/'); // Redirect back to your task list
    } catch (error) {
      console.error(error);
    }
  });

  
router.post('/delete-completed', async (req, res) => {
    try {
      await Task.deleteMany({ completed: true });

    } catch (error) {
      res.status(500).send('Error deleting tasks.');
    }
  });
  

module.exports=router;