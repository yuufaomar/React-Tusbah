import { NavLink} from "react-router-dom"


function Header (){
  return <div className="flex bg-blue-500 justify-between p-10 ">
  <h1 className="text-5xl text-white  font-bold">This is header</h1>
  <ul className="flex text-5xl gap-20">

   <NavLink to="/"> <li>Home</li> </NavLink>
   <NavLink to="/About"> <li>About</li> </NavLink>
   <NavLink to="/contact"><li>Contact</li> </NavLink> 
  </ul>
</div>
}

export default Header
