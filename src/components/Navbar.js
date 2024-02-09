import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  let Links =[
    {name:"Home",link:"/"},
    {name:"Meet SAC!",link:"/SAC"},
    {name:"Clubs",link:"/Clubs"},
    {name:"Event Calender",link:"/Event"},
    {name:"FAQ",link:"/FAQ"},
  ];
  let [open,setOpen] = useState(false);

  let navigate = useNavigate(); 
  
  const routeChange = () =>{ 
    navigate("/");
  }

  return (
    <div className='z-50 w-screen max-w-full absolute'>
      <div className='md:flex items-center justify-between text-indigo-900 bg-transparent py-4 md:px-10 px-7'>
      <div onClick={routeChange} className='font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-indigo-900'>
        Milliken SAC
      </div>
      
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

      <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-blue-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out ${open ? 'top-14 ':'top-[-490px]'}`}>
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