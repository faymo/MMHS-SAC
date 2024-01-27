import React from 'react'
import '../styles/Home.css'
import logo from '../assets/logo.png'; 

function Home() {
  return (
    <section>
        <div class="w-screen h-screen bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-50 relative grid grid-cols-2 grid-rows-3 gap-x-5 gap-y-0">
            <img class="grid grid-row-subgrid row-span-3 self-center justify-self-end" src={logo} alt="Milliken Logo"/>
            <div class="text-left self-end  text-indigo-900 text-8xl font-semibold italic font-['Newsreader']">Milliken SAC</div>
            <div class="w-4/6 self-center text-neutral-800 text-3xl font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nisl et ultrices accumsan. Vivamus tincidunt eleifend sodales. Donec at libero quis nunc luctus porttitor vel quis dolor.</div>
            <div class="w-[341px] h-[81px] place-content-center self-left flex bg-stone-50 rounded-[40px] shadow-inner border border-slate-500">
                <div class="text-center text-2xl place-self-center font-medium font-['Inter']">Learn More</div>
            </div>
        </div>
    </section>
  )
}

export default Home