import React from 'react';
import '../styles/Home.css';
import sacbg from '../assets/sacbg.png'; 

function Home() {
  return (
    <div class="flex w-screen flex-col max-w-full overflow-x-hidden">
    {/* top slide of home page  */}
        <div class="w-screen h-screen bg-blue-100 overflow-hidden relative flex flex-col place-items-center place-content-center">
            <div class="z-20 text-indigo-900 2xl:text[14rem] xl:text-[12rem] lg:text-[10rem] md:text-[7rem] text-[3.5rem] flex font-semibold italic font-['Newsreader']">Milliken SAC</div>
            <div class="z-20  w-4/6 md:flex pb-10 hidden text-neutral-800 text-center text-xs md:text-sm lg:text-lg xl:text-xl font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nisl et ultrices accumsan. Vivamus tincidunt eleifend sodales. Donec at libero quis nunc luctus porttitor vel quis dolor.</div>
            <div className="gradient1"></div>
            <div className="gradient2"></div>
            <div className="gradient3"></div>
        </div>

    {/* second slide of home page */}
        <div class="w-screen h-screen flex max-w-full">
            <img class="w-screen h-screen max-w-full z-[-1] absolute" src={sacbg} alt="Background"/>
            <div class="w-screen max-w-full h-screen grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-10 place-items-center z-10">
                
                <div class="w-[40rem] h-[20rem] flex-col translate-x-[10rem] flex justify-self-end self-end bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl transition ease-in-out duration-300">
                    <div class="place-self-left pl-[1.5rem] pt-9 text-purple-50 text-[1.1rem] font-normal font-['Inter']">see what events are happening in the school...</div>
                    <div class="w-[37rem] h-[14rem] mt-2 place-self-center bg-white rounded-[20px]"></div>
                </div>

                <div class="w-[20rem] h-[20rem] flex-col flex translate-x-[10rem] justify-self-start self-end bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl transition ease-in-out duration-300">
                    <div class="place-self-left pl-[1.5rem] pt-9 text-purple-50 text-[1.1rem] font-normal font-['Inter']"></div>
                    <div class="w-[17rem] h-[14rem] mt-[2.17rem] place-self-center bg-white rounded-[20px]"></div>
                </div>

                <div class="w-[20rem] h-[20rem] flex-col flex -translate-x-[10rem] justify-self-end self-start bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl transition ease-in-out duration-300">
                    <div class="place-self-left pl-[1.5rem] pt-9 text-purple-50 text-[1.1rem] font-normal font-['Inter']">give us your feedback!</div>
                    <div class="w-[17rem] h-[14rem] mt-2 place-self-center bg-white rounded-[20px]"></div>
                </div>

                <div class="w-[40rem] h-[20rem] flex-col flex -translate-x-[10rem] justify-self-start self-start bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl transition ease-in-out duration-300">
                    <div class="place-self-left pl-[1.5rem] pt-9 text-purple-50 text-[1.1rem] font-normal font-['Inter']"></div>
                    <div class="w-[37rem] h-[14rem] mt-[2.17rem] place-self-center bg-white rounded-[20px]"></div>
                </div>
            </div>
            
        </div>

    {/* third slide of home page */}
        <div class="w-screen h-screen flex max-w-full justify-center items-center">
            <div class="w-10/12 h-5/6 place-self-center grid grid-cols-2 grid-rows-2 gap-x-40 gap-y-5 bg-gradient-to-b from-indigo-50 to-indigo-100 rounded-[20px]">
                <div class="w-[20rem] h-[18rem] flex flex-col justify-self-end self-end">
                    <div class="pl-3 pt-6 text-black text-[2.1rem] italic font-semibold font-['Newsreader']">Section Description</div>
                    <div class="px-3 mt-5 text-black text-[0.69rem] font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div class="w-[20rem] h-[18rem] flex shrink justify-self-start self-end bg-white rounded-[30px] shadow-xl"></div>
                <div class="w-[20rem] h-[18rem] flex shrink justify-self-end self-start bg-white rounded-[30px] shadow-xl"></div>
                <div class="w-[20rem] h-[18rem] flex flex-col">
                    <div class="pl-3 pt-6 text-black text-[2.1rem] italic font-semibold font-['Newsreader']">Section Description</div>
                    <div class="px-3 mt-5 text-black text-[0.69rem] font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home