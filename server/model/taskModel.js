import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title:{

      type:String,
      require:true

  },
  task:{

    type:String,
    require:true 

  }

});


const taskModel = mongoose.model("task", taskSchema);
export default taskModel;

