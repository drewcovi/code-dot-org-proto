// import React, { useState } from "react";
import parse from 'html-react-parser';
import { useNavigate } from "react-router";

export default function Footer({title, resetSvg, children}){
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
        {svg && (
        <span onClick={() => navigate('/')} className="flex h-20 w-20 object-fit border-gray-800 bg-blue-200 border rounded-full overflow-hidden">
            {parse(svg)}
        </span>
        )}
        </h1>
        {children}
      </header>
      </>

    )
}