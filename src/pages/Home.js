import React from 'react'
import '../styles/Home.css'
import logo from '../assets/logo.png'; 
import sacbg from '../assets/sacbg.png'; 

function Home() {
  return (
    <div class="flex w-screen flex-col max-w-full overflow-x-hidden">
    {/* top slide of home page  */}
        <div class="w-screen h-screen bg-blue-100 relative flex items-center space-x-8">
            <div className="gradient hidden lg:flex"></div>

            <div class="flex flex-initial md:pl-24 lg:pl-52 pl-10">
                <img class="w-[55rem] min-w-[10rem]" src={logo} alt="Milliken Logo"/>
            </div>

            <div class="flex flex-col shrink items-left mb-10">
                <div class="text-left text-indigo-900 2xl:text[7rem] xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem] font-semibold italic font-['Newsreader']">Milliken SAC</div>
                <div class="lg:w-5/12 w-4/6 md:flex pb-10 hidden text-neutral-800 text-xs md:text-sm lg:text-lg xl:text-xl font-['Inter']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nisl et ultrices accumsan. Vivamus tincidunt eleifend sodales. Donec at libero quis nunc luctus porttitor vel quis dolor.</div>
                <button class="lg:w-[20rem] lg:h-[4.5rem] w-[15rem] h-[3rem] z-10 place-content-center flex bg-stone-50 rounded-[40px] shadow-inner border border-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-stone-200">
                    <div class="text-center text-xl place-self-center font-medium font-['Inter']">Learn More</div>
                </button>
            </div>
        </div>

    {/* second slide of home page */}
        <div class="w-screen h-screen flex max-w-full">
            <img class="w-screen max-w-full z-0" src={sacbg} alt="Background"/>
            <div class="w-screen max-w-full h-screen grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-10 place-items-center absolute">
                
                <div className="box1" class="w-[40rem] h-[20rem] flex-col translate-x-[10rem] flex justify-self-end self-end bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl">
                    <div class="place-self-left pl-[1.5rem] pt-9 text-purple-50 text-[1.1rem] font-normal font-['Inter']">see what events are happening in the school...</div>
                    <div class="w-[37rem] h-[14rem] mt-2 place-self-center bg-white rounded-[20px]"></div>
                </div>

                <div className="box2" class="w-[20rem] h-[20rem] flex-col flex translate-x-[10rem] justify-self-start self-end bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl">
                    <div class="place-self-left pl-[1.5rem] pt-9 text-purple-50 text-[1.1rem] font-normal font-['Inter']"></div>
                    <div class="w-[17rem] h-[14rem] mt-[2.17rem] place-self-center bg-white rounded-[20px]"></div>
                </div>

                <div className="box3" class="w-[20rem] h-[20rem] flex-col flex -translate-x-[10rem] justify-self-end self-start bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl">
                    <div class="place-self-left pl-[1.5rem] pt-9 text-purple-50 text-[1.1rem] font-normal font-['Inter']">give us your feedback!</div>
                    <div class="w-[17rem] h-[14rem] mt-2 place-self-center bg-white rounded-[20px]"></div>
                </div>

                <div className="box4" class="w-[40rem] h-[20rem] flex-col flex -translate-x-[10rem] justify-self-start self-start bg-gradient-to-b from-slate-400 to-gray-500 rounded-[20px] shadow-xl hover:scale-105 hover:shadow-2xl">
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