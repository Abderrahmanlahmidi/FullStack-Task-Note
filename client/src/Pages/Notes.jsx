import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion"


function Notes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/tasks');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 

  return (
    <div className='ml-[4pc]  w-full h-full flex flex-col mr-[40px] '>
     <h1 className='font-bold bg-[#ffffff] py-4  w-full fixed text-[34px]'>My Notes</h1>
     <div className='grid-container  pt-2 px-[10px] ml-3 mb-6  w-full mt-[5pc] h-full justify-center md:justify-start items-center'>
       {data.map((get) => (
        <motion.div  
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="card"
        >
           <div className='w-[17pc] bg-rednote  p-[20px] space-y-2 rounded-[10px]  h-[18pc]'>
              <h1 className='font-semibold text-[20px]'>{get.Title}</h1>
              <p className='text-[14px] text-start text-colorfont1'>{get.Note} </p>
           </div>
         </motion.div> 
         
       )) }

     </div>
     
    
    </div>
  )
}

export default Notes
