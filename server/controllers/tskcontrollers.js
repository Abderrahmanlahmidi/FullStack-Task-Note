import taskModel from "../model/taskModel.js";
import mongoose from "mongoose";


const db = "mongodb+srv://TASKS:111222@cluster0.jqubwhc.mongodb.net/?retryWrites=true&w=majority";

// connetct the server with the db
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log("connected to mongoodb");
}).catch((err) => {
   console.error("Failed mongoodb not connected", err);
})


//GET the data from the db
const gettsk = (req, res) => {
    taskModel.find().
    then((task) => {
      res.json(task)
    }).catch((err) => {
       console.error(err);
       res.status(500).json({ message: 'Error retrieving users' });
    });
  }


//POST data from the db
const posttsk = async (req, res) => {
    const {Title, Note} = req.body;
    const newTask = new taskModel({Title,Note})
 
    await newTask.save()
    .then(savedTask => {
      res.json(savedTask);
    }).catch(err => {
     console.error(err);
     res.status(500).send('Error saving user');
   });
 }


//DELETE task from the db
const deletetsk =  (req, res) => {
    const taskid = req.params.id;

    taskModel.findByIdAndDelete(taskid).then((deleteTask) => {
        if(!deleteTask){
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json({ message: 'task deleted successfully' });
    }).catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error deleting user' });
    });

}

export {
    deletetsk,
    gettsk,
    posttsk
}