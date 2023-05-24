import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';


function Createnote() {
   const [Title, setTitle] = useState("");
   const [Note, setNote] = useState("");
   const [TitleError, setTitleError] = useState(false);
   const [NoteError, setNoteError] = useState(false);
   const [Sucess, setSucess] = useState("")

   const handleSubmit = (e) => {
     e.preventDefault();
     
     if(Title && Note) {
      setSucess("Your Note Add Sucess")
      fetch("http://localhost:5000/tasks/createTask", {
          method:"POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({Title, Note}) 
        })
     }

     if(Title === ""){
       setTitleError(true);
     } 

     if( Note === ""){
       setNoteError(true);
     } 

   }

  return (
    <div className='py-[15px] ml-[4pc]  space-y-4  w-full'>
     <h1 className='font-bold text-[34px]'>Create Task</h1>
     <p className='ml-3 text-colorfont1 text-[20px]'>Create a new task</p>
     <div className='ml-3 mr-[27px] '>
      <form onSubmit={handleSubmit} className='flex flex-col  space-y-5' >
      { Sucess === "" ? undefined : (<Alert  variant="outlined" onClose={() => {setSucess("")}} className="w-full "><p className="text-[#4caf50] ">{Sucess}</p></Alert>)}
       <TextField
          id="outlined-basic" 
          label="Title" 
          variant="outlined" 
          onChange={(e) => setTitle(e.target.value)}
          error={Title === "" ? TitleError : undefined}
        />
       <TextField
          id="filled-multiline-static"
          label="Your Note"
          multiline
          rows={4}
          variant="outlined"
          error={Note === "" ? NoteError : undefined}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className='w-[130px] border border-1  border-colorfont1 rounded h-[40px]' type='submit'>add note</button>
      </form>
     </div>
    </div>
  )
}

export default Createnote
