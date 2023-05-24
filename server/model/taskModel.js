import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  Title:{

    type:String,
    require:true

  },
  Note:{

    type:String,
    require:true 

  },


});


const taskModel = mongoose.model("task", taskSchema);
export default taskModel;

