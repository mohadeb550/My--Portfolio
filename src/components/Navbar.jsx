import { NavLink } from "react-router-dom"




export default function Navbar() {

  

  const navLinks = <>
   <li ><NavLink className={({isActive})=> isActive? ' font-kanit text-[#FFC107] px-3 py-[3px] rounded ': '' } to='/'> Home </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-kanit text-[#FFC107] px-3 py-[3px] rounded ': '' } to='/dashboard' state={{ from : {location}}} > About </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-kanit text-[#FFC107] px-3 py-[3px] rounded ': '' } to='/sign-up' state={{ from : {location}}} > Contact </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive? ' font-kanit text-[#FFC107] px-3 py-[3px] rounded ': '' } to='/sign-up' state={{ from : {location}}} > Blog </NavLink></li>

  </>



  return (
    <div className={`navbar max-w-[1400px] mx-auto  flex justify-between md:pt-3 bg-[#242429]`}>
  <div className="navbar-start z-50" >
    <div className="dropdown z-50">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/95" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className={`menu-sm dropdown-content mt-2 text-white/80 p-2 shadow bg-[#2D2D39] rounded w-52 `}>
        {navLinks}
      </ul>


    </div>
    <div className="flex items-center gap-4 px-8" data-aos="fade-right" data-aos-duration="1000">
    <img src='https://i.ibb.co/BVRG8Yw/pngwing-com-23.png' className="w-9 md:w-12 lg:w-[50px]"/>
    <p className="text-[20px]  md:text-xl lg:text-2xl  text-amber-400 font-racing  whitespace-nowrap "> Mohadeb <span className="text-white/80"> Bhowmik </span> </p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex gap-24 px-10" data-aos="fade-left" data-aos-duration="1000">
    <ul className="flex items-center gap-10 menu-horizontal px-1 text-white/80 ">
      {navLinks}
    </ul>
    <a href="https://drive.google.com/file/d/1VvI3kxUpt8bto3pNdxnCyRcVJ4xnRROx/view?usp=sharing"><button className="btn btn-warning"> Download Resume </button></a>
  </div>



</div>
  )
}
