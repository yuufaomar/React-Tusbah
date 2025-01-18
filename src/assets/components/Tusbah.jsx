
// UseStae tusbah lagu sameey

import { useState } from "react"



function Tusbah (){

     const [conter,setCounter]=useState(0)

     const HandelIncrement = ()=>{
        setCounter(conter +1)

     }

     const HandleReset =()=>{
       setCounter(0)
     }


    return <div className="text-center mt-28">
    <h1 className="text-9xl mt-28">{conter}</h1>
    <button onClick={HandelIncrement} className= " bg-orange-500 px-10 py-3 text-3xl m-3 rounded-full text-white  ">Increment</button>
    <button onClick={HandleReset}className="bg-orange-500 px-10 py-3 text-3xl m-3 rounded-full text-white  ">Rest</button>

    </div>
}


export default Tusbah