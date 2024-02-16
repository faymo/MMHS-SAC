import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 


function Navbar() {
  let Links =[
    {name:"Home",link:"/MMHS-SAC"},
    {name:"Meet SAC!",link:"/MMHS-SAC/SAC"},
    {name:"Clubs",link:"/MMHS-SAC/Clubs"},
    {name:"Event Calendar",link:"/MMHS-SAC/Event"},
    {name:"FAQ",link:"/MMHS-SAC/FAQ"},
  ];
  let [open,setOpen] = useState(false);

  let navigate = useNavigate(); 
  
  const routeChange = () =>{ 
    navigate("/MMHS-SAC");
  }

  return (
    <div className='z-50 w-screen max-w-full absolute'>
      <div className='md:flex items-center justify-between text-indigo-900 bg-transparent py-4 md:px-10 px-7'>
      <img onClick={routeChange} src={logo} alt="Milliken Logo" class='w-[3rem] font-bold cursor-pointer flex items-center font-[Poppins] text-indigo-900'/>

      <ul>
        {!open && (
        <li>
            <button onClick={() => setOpen(true)} class='text-3xl absolute right-6 top-4 cursor-pointer md:hidden'>
              <IoMenu />
            </button>
        </li>
        )}
        {open && (
        <li>
            <button onClick={() => setOpen(false)} class='text-3xl absolute right-6 top-4 cursor-pointer md:hidden'>
              <IoClose />
            </button>
        </li>
        )}
      </ul>

      <ul className={`md:flex md:items-center md:pb-0 absolute md:static backdrop-blur md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out ${open ? 'top-14 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-2xl md:my-0 my-7'>
              <a href={link.link} className='text-indigo-900 p-2 rounded-lg hover:text-blue-100 hover:bg-indigo-900 duration-200'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
      
    </div>

      
        
  )
}

export default Navbar