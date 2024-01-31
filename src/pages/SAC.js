import React from 'react'
import '../styles/SAC.css'
import {data1, data2, data3, data4, data5} from '../components/data.js'

function SAC() {
  function slideLeft(s) {
    return () => {
      var slider = document.getElementById(s);
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  }

  function slideRight(s) {
    return () => {
      var slider = document.getElementById(s);
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  }

  return (
    <div class="flex w-screen flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Lobster&family=Prata&family=Sumana&family=Syne&display=swap" rel="stylesheet"></link>
      <div class="w-screen mt-20 text-center text-sky-950 text-[10rem] font-thin font-['Prata']">council</div>

      <div class="flex w-screen place-content-center">
        <button type="button" class="items-center pr-5 opacity-50">
          <svg class="" width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow-block-left">
            <path id="Icon" d="M6.25 25L20.8333 10.4167V18.75H42.0833C42.6667 18.75 42.9584 18.75 43.1812 18.8636C43.3772 18.9634 43.5366 19.1228 43.6365 19.3188C43.75 19.5416 43.75 19.8333 43.75 20.4167V29.5834C43.75 30.1667 43.75 30.4584 43.6365 30.6813C43.5366 30.8773 43.3772 31.0366 43.1812 31.1365C42.9584 31.25 42.6667 31.25 42.0833 31.25H20.8333V39.5834L6.25 25Z" stroke="#051747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>

        <div class="w-[20rem] h-[4rem] bg-stone-50 rounded-[40px] shadow-inner border border-slate-500 place-content-center flex">
          <div class="text-center place-self-center text-sky-950 text-opacity-50 text-4xl font-semibold font-['Coolvetica'] tracking-[2px]">2023 - 2024</div>
        </div>

        <button type="button" class="items-center pl-5 opacity-100">
          <svg class="hover:fill-[#051747]" width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow-block-right">
            <path id="Icon" d="M43.75 25L29.1667 10.4167V18.75H7.91667C7.33328 18.75 7.04158 18.75 6.81876 18.8636C6.62276 18.9634 6.4634 19.1228 6.36353 19.3188C6.25 19.5416 6.25 19.8333 6.25 20.4167V29.5834C6.25 30.1667 6.25 30.4584 6.36353 30.6813C6.4634 30.8773 6.62276 31.0366 6.81876 31.1365C7.04158 31.25 7.33328 31.25 7.91667 31.25H29.1667V39.5834L43.75 25Z" stroke="#051747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </div>

      <div class="flex w-screen h-[144rem] justify-center">
        <div class="w-5/6 h-5/6 grid grid-rows-6 place-self-center bg-gradient-to-b from-[#818DAC] to-[#31384C] rounded-[40px]">
          {/* row 1 */}
          <div class="w-full flex flex-col place-content-end">
              <div class="text-center text-white text-5xl font-semibold font-['Sumana']">meet SAC!</div>
              <div class="pt-8 pb-[5rem] text-center text-white text-base font-normal font-['Atkinson Hyperlegible']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e<br/>t dolore magna aliqua.  </div>
            <div class="w-full h-[2px] z-30 flex justify-self-end border-t-0 bg-transparent bg-gradient-to-r from-transparent via-zinc-300 to-transparent bg-opacity-75" />
          </div>
          {/* row 2 */}
          <div class="w-full flex flex-col place-content-end">
            <div class="w-full h-full flex flex-row place-content-center">
              <div class="w-1/5 flex flex-col place-content-center">
                <div class="text-white text-4xl ml-7 font-semibold font-['Syne'] leading-[38.40px]">Executives</div>
                <div class="w-4/5 text-white pt-5 place-self-center text-base font-normal font-['Atkinson Hyperlegible'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div class="w-4/5 relative flex items-center">
      
                <div id='slider' className='w-full h-full flex place-items-center select-none overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                  {data1.map((item) => (
                    <img className='w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/'/>
                  ))}
                </div>
                
              </div>          
            </div>
            <div class="w-full h-[2px] z-30 flex justify-self-end border-t-0 bg-transparent bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-75" />
          </div>
          {/* row 3 */}
          <div class="w-full flex flex-col place-content-end">
            <div class="w-full h-full flex flex-row place-content-center">
              <div class="w-1/5 flex flex-col place-content-center">
                <div class="text-white text-4xl ml-7 font-semibold font-['Syne'] leading-[38.40px]">ESL + Grade Reps</div>
                <div class="w-4/5 text-white pt-5 place-self-center text-base font-normal font-['Atkinson Hyperlegible'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div class="w-4/5 relative flex items-center">
                <svg onClick={slideLeft('slider1')} class="hover:fill-[#051747] mx-3" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-block-left">
                  <path id="Icon" d="M6.25 25L20.8333 10.4167V18.75H42.0833C42.6667 18.75 42.9584 18.75 43.1812 18.8636C43.3772 18.9634 43.5366 19.1228 43.6365 19.3188C43.75 19.5416 43.75 19.8333 43.75 20.4167V29.5834C43.75 30.1667 43.75 30.4584 43.6365 30.6813C43.5366 30.8773 43.3772 31.0366 43.1812 31.1365C42.9584 31.25 42.6667 31.25 42.0833 31.25H20.8333V39.5834L6.25 25Z" stroke="#051747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <div id='slider1' className='w-full h-full flex place-items-center select-none overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                  {data2.map((item) => (
                    <img className='w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/'/>
                  ))}
                </div>
                <svg onClick={slideRight('slider1')} class="hover:fill-[#051747] mx-3" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-block-right">
                  <path id="Icon" d="M43.75 25L29.1667 10.4167V18.75H7.91667C7.33328 18.75 7.04158 18.75 6.81876 18.8636C6.62276 18.9634 6.4634 19.1228 6.36353 19.3188C6.25 19.5416 6.25 19.8333 6.25 20.4167V29.5834C6.25 30.1667 6.25 30.4584 6.36353 30.6813C6.4634 30.8773 6.62276 31.0366 6.81876 31.1365C7.04158 31.25 7.33328 31.25 7.91667 31.25H29.1667V39.5834L43.75 25Z" stroke="#051747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </div>          
            </div>
            <div class="w-full h-[2px] z-30 flex justify-self-end border-t-0 bg-transparent bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-75" />
          </div>
          {/* row 4 */}
          <div class="w-full flex flex-col place-content-end">
            <div class="w-full h-full flex flex-row place-content-center">
              <div class="w-1/5 flex flex-col place-content-center">
                <div class="text-white text-4xl ml-7 font-semibold font-['Syne'] leading-[38.40px]">Secretary, Treasurers, & Social Affairs</div>
                <div class="w-4/5 text-white pt-5 place-self-center text-base font-normal font-['Atkinson Hyperlegible'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div class="w-4/5 relative flex items-center">
                <div id='slider2' className='w-full h-full flex place-items-center select-none overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                  {data3.map((item) => (
                    <img className='w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/'/>
                  ))}
                </div>
              </div>          
            </div>
            <div class="w-full h-[2px] z-30 flex justify-self-end border-t-0 bg-transparent bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-75" />
          </div>
          {/* row 5 */}
          <div class="w-full flex flex-col place-content-end">
            <div class="w-full h-full flex flex-row place-content-center">
              <div class="w-1/5 flex flex-col place-content-center">
                <div class="text-white text-4xl ml-7 font-semibold font-['Syne'] leading-[38.40px]">Visual & Graphic Publicity</div>
                <div class="w-4/5 text-white pt-5 place-self-center text-base font-normal font-['Atkinson Hyperlegible'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div class="w-4/5 relative flex items-center">
                <div id='slider3' className='w-full h-full flex place-items-center select-none overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                  {data4.map((item) => (
                    <img className='w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/'/>
                  ))}
                </div>
              </div>          
            </div>
            <div class="w-full h-[2px] z-30 flex justify-self-end border-t-0 bg-transparent bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-75" />
          </div>
          {/* row 6 */}
          <div class="w-full flex flex-col place-content-end">
            <div class="w-full h-full flex flex-row place-content-center">
              <div class="w-1/5 flex flex-col place-content-center">
                <div class="text-white text-4xl ml-7 font-semibold font-['Syne'] leading-[38.40px]">Video, Photo, & Tech</div>
                <div class="w-4/5 text-white pt-5 place-self-center text-base font-normal font-['Atkinson Hyperlegible'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div class="w-4/5 relative flex items-center">
                <div id='slider4' className='w-full h-full flex place-items-center select-none overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                  {data5.map((item) => (
                    <img className='w-[220px] h-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={item.img} alt='/'/>
                  ))}
                </div>
              </div>          
            </div>
            <div class="w-full h-[2px] z-30 flex justify-self-end border-t-0 bg-transparent bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-75" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SAC