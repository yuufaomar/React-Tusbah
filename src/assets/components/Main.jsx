function Main(props){
   return  <div>
   <div className="flex mt-10">
   <div className="ml-40">
     <img className="h-[170px]" src={props.img} />
   </div>
   <div className="ml-10">
     <h1 className="font-semibold text-3xl">  {props.name}</h1>
     <h3 className="py-2">{props.deliver}</h3>
     <h2 className="font-mono text-2xl pb-4">$23</h2>
     <button  style={{backgroundColor:props.color}} className=" px-10 py-3 rounded-[8px] font-bold text-[18px]">Order Now</button>
   </div>
 </div>
 </div>
}

export default Main