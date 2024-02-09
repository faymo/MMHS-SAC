import React, { useState } from "react";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

export default function Question({question, answer}){ 

    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="border border-gray-400 text-indigo-900 rounded-xl shadow-xl bg-indigo-200 font-['Inter'] w-5/6 place-self-center">
            <article className="flex items-center justify-between p-4 lg:p-6">
                <h2
                    className="cursor-pointer"
                    onClick={() => setShowAnswer(!showAnswer)}
                >
                    {question}
                </h2>
                <ul>
                    {!showAnswer && (
                    <li>
                        <button onClick={() => setShowAnswer(true)} class="place-self-center flex">
                        <CiSquarePlus size="2.5rem" />
                        </button>
                    </li>
                    )}
                    {showAnswer && (
                    <li>
                        <button onClick={() => setShowAnswer(false)} class="place-self-center flex">
                        <CiSquareMinus size="2.5rem"/>
                        </button>
                    </li>
                    )}
                </ul>
            </article>

            <article
            className={`${showAnswer && "p-4 lg:p-6"}`}
            >
            {showAnswer && <p>{answer}</p>}
            </article>
        </div>
    )
  }