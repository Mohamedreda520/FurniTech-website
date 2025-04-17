import React from 'react'

export default function Button({ text, bgcolor, textcolor, handler = () => { } }) {
  
    return (
        <button
            onClick={handler}
            className={`${bgcolor} ${textcolor}
   cursor-pointer hover:scale-105 duration-300 py-2 px-8
    rounded-full relative z-10 font-semibold capitalize`}
        >
            {text}

        </button>
    )
}
