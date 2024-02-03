import React from 'react'
import '../styles/Event.css'
import Navbar from '../components/Navbar'
import Calender from '../components/Calender'

function Event() {
  return (
    <div class="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet"></link>
      <div class="flex w-screen h-40 place-content-center">
        <button type="button" class="items-center pr-5 self-end opacity-100">
          <svg class="hover:fill-[#051747]" width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow-block-left">
            <path id="Icon" d="M6.25 25L20.8333 10.4167V18.75H42.0833C42.6667 18.75 42.9584 18.75 43.1812 18.8636C43.3772 18.9634 43.5366 19.1228 43.6365 19.3188C43.75 19.5416 43.75 19.8333 43.75 20.4167V29.5834C43.75 30.1667 43.75 30.4584 43.6365 30.6813C43.5366 30.8773 43.3772 31.0366 43.1812 31.1365C42.9584 31.25 42.6667 31.25 42.0833 31.25H20.8333V39.5834L6.25 25Z" stroke="#051747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>

        <div class="w-[20rem] h-[4rem] self-end bg-stone-50 rounded-[40px] shadow-inner border border-slate-500 place-content-center flex">
          <div class="text-center place-self-center text-sky-950 text-opacity-50 text-4xl font-semibold font-['Coolvetica'] tracking-[2px]">January</div>
        </div>

        <button type="button" class="items-center self-end pl-5 opacity-100">
          <svg class="hover:fill-[#051747]" width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow-block-right">
            <path id="Icon" d="M43.75 25L29.1667 10.4167V18.75H7.91667C7.33328 18.75 7.04158 18.75 6.81876 18.8636C6.62276 18.9634 6.4634 19.1228 6.36353 19.3188C6.25 19.5416 6.25 19.8333 6.25 20.4167V29.5834C6.25 30.1667 6.25 30.4584 6.36353 30.6813C6.4634 30.8773 6.62276 31.0366 6.81876 31.1365C7.04158 31.25 7.33328 31.25 7.91667 31.25H29.1667V39.5834L43.75 25Z" stroke="#051747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </div>

      <div class="w-[35rem] h-32 my-10 flex flex-col place-self-center place-content-center shadow-md hover:scale-[1.1] shadow-indigo-900 bg-gradient-to-b from-indigo-200 to-white rounded-[20px]">
        <div class="h-fit text-center flex self-center text-indigo-900 text-[4.2rem] font-normal font-['Suranna'] lowercase tracking-[9px]">SAC Calendar</div>
        <div class="h-fit mb-5 text-center flex self-center text-indigo-900 text-[1.3rem] font-normal font-['Suranna'] lowercase tracking-[9px]">2023 - 2024</div>
      </div>

      <Calender/>
    </div>
  )
}

export default Event