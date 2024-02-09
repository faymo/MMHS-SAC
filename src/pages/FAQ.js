import React from 'react'
import '../styles/FAQ.css'
import Question from '../components/Question'

function FAQ() {
  return (
    <div class="flex w-screen h-fit flex-col max-w-full overflow-x-hidden relative bg-blue-100">
      <div class="h-fit w-fit py-1 mt-20 place-self-center px-2 text-sm font-semibold font-['Inter'] text-indigo-900 rounded-full inline-block bg-indigo-200 ">FREQUENTLY ASKED QUESTIONS</div>
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>
      <div class="flex w-fit h-fit place-self-center relative text-center text-sky-950 lg:text-[6rem] md:text-[4rem] text-[3rem] font-thin font-['Prata']">
        Your questions answered.
      </div>

      <div class="flex flex-col my-14 gap-y-6">
        <Question question="Who is the president of SAC?" answer="Rosalyn Tu"/>
        <Question question="Who is the vice president of SAC?" answer="Pedram Tizgadham"/>
        <Question question="Who is the tech chair of SAC?" answer="Fayez Mohammed"/>
        <Question question="Who is the tech chair of SAC?" answer="Fayez Mohammed"/>
        <Question question="Who is the tech chair of SAC?" answer="Fayez Mohammed"/>
        <Question question="Who is the tech chair of SAC?" answer="Fayez Mohammed"/>
        <Question question="Who is the tech chair of SAC?" answer="Fayez Mohammed"/>
        <Question question="Who is the tech chair of SAC?" answer="Fayez Mohammed"/>
        <Question question="Who is the tech chair of SAC?" answer="Fayez Mohammed"/>
      </div>
    </div>
  )
}

export default FAQ