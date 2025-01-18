

//   State 


import { useState } from "react"

function  Light(){

const [color, setColor] =useState("")

//fuction update kusamenayo state ka
const handleOn = ()=>{
    setColor("yellow")
}

const handleOff = ()=>{
    setColor("white")
}
    return <div className="flex justify-center mt-5"> 
   <div>
   
    <div style={{backgroundColor:color}} className="w-[400px] h-[400px] border-8 border-black rounded-full">  </div>

   <button onClick={handleOn} className="bg-blue-500 px-12 py-4 text-2xl m-3 rounded-[10px] ml-10">On</button>
   <button onClick={handleOff} className="bg-blue-500 px-12 py-4 text-2xl m-3 rounded-[10px] ml-10">Off</button>
   </div>



    </div>
}

export default Light