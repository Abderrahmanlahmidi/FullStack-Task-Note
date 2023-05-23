import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';





function Sidebare() {
  const [activebutton, setactivebutton] = useState("")
  const [close, setclose] = useState(false);
  const active = " transition delay font-medium bg-[#EBEBEB]";
  const handleButtonClick = (buttonName) => {
     setactivebutton(buttonName);
  }

  


  return (
    <div className='p-4 flex flex-col'>
      <motion.div animate={{ width: close ? 60 : 230 }}
       className={`rounded bg-background p-2 h-[39pc]`}>
    
       <div className="flex w-full justify-between">
           {close === false ? (
               <h1 className='mt-1 text-colorfont1 text-[19px] font-semibold'>
                 Menu
               </h1>
               ): (
                 <></>
               )
            }
          <IconButton className='relative left-[3px]' onClick={() => {setclose(!close)}} >
            <MenuRoundedIcon />
          </IconButton>
       </div>      
       
      <div className='flex flex-col mt-3 space-y-2'>
        <motion.button 
           whileTap={{ scale: 0.9 }}
           onClick={() => handleButtonClick("mynotes")} 
           className={`${activebutton === "mynotes" ? active : ""}  flex rounded text-colorfont1 hover:bg-[#EBEBEB] `}>
             <ArticleOutlinedIcon className='my-2 ml-[10px]'/>
             {close === false ? (<p className='mt-2 ml-2'>My Notes</p>): (<></>)}
        </motion.button>
        <motion.button 
           whileTap={{ scale: 0.9 }}
           onClick={() => handleButtonClick("createnote")} 
           className={`${activebutton === "createnote" ? active : ""} flex rounded text-colorfont1 hover:bg-[#EBEBEB] `}>
             <AddCircleOutlineRoundedIcon className='my-2 ml-[10px]'/>
             {close === false ? (<p className='mt-2 ml-2'>Create Note</p>): (<></>)}
        </motion.button>       
        <motion.button 
           whileTap={{ scale: 0.9 }} 
           onClick={() => handleButtonClick("calendar")} 
           className={`${activebutton === "calendar" ? active : ""} flex rounded text-colorfont1 hover:bg-[#EBEBEB] `}>
             <CalendarMonthRoundedIcon className='my-2 ml-[10px]'/>
             {close === false ? (<p className='mt-2 ml-2'>Calendar</p>): (<></>)}
        </motion.button>              
        
      </div>
      </motion.div>
    </div>
  )
}

export default Sidebare
