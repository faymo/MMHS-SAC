import React from 'react';
import '../styles/Clubs.css';
import ClubCard from '../components/ClubCard.js';
import logo from '../assets/logo.png';

function Clubs() {
  return (
    <div class="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <div class="flex w-fit h-fit font-['Suranna'] text-[6rem] mt-20 place-self-center italic text-indigo-900">
        Clubs
      </div>

      <div class="grid w-5/6 max-w-full grid-cols-3 gap-y-10 place-items-center place-self-center mb-10 mt-5 ">
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
        <ClubCard name="Milliken SAC" desc="The Milliken Mills High School Student Actiity Council" imgSrc={logo} link="https://www.instagram.com/milliken_sac/"/>
      </div>
    </div>
  )
}

export default Clubs