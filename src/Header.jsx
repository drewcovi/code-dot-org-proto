// import React, { useState } from "react";
import parse from 'html-react-parser';
import { useNavigate } from "react-router";

export default function Footer({title, resetSvg, avatar, children}){
    const navigate = useNavigate();
    if (resetSvg) {
        localStorage.removeItem('codemate');
    }
    let svg = localStorage.getItem('codemate');
    return(
    <>
        <header className="flex-row bg-code-teal text-white flex min-h-24 items-center px-6 py-4">
        <h1 className="text-3xl flex flex-row grow-1 items-center">
        <span className="grow-1 flex">{title}</span>
        {children}
        {avatar && (
         svg && (
        <span onClick={() => navigate('/')} className="ml-6 flex h-30 w-30 object-fit border-gray-800 bg-blue-200 border rounded-full overflow-hidden fixed bottom-30 z-200 right-5 shadow-md">
            {parse(svg)}
        </span>
        )
        )}
        </h1>
      </header>
      </>

    )
}