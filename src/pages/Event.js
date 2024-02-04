import React from 'react'
import '../styles/Event.css'
import Calender from '../components/Calender'

function Event() {
  return (
    <div class="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet"></link>

      <div class="w-[35rem] h-24 mt-20 mb-10 flex flex-col place-self-center place-content-center shadow-md hover:scale-[1.1] shadow-indigo-900 bg-gradient-to-b from-indigo-200 to-white rounded-[20px]">
        <div class="h-fit text-center flex self-center text-indigo-900 text-[4.2rem] font-normal font-['Suranna'] lowercase tracking-[9px]">SAC Calendar</div>
      </div>

      <div class="-translate-y-[3rem]">
        <Calender/>
      </div>
    </div>
  )
}

export default Event