// import React, { useState } from "react";
import parse from 'html-react-parser';

export default function Footer({title, resetSvg, children}){
    if (resetSvg) {
        localStorage.removeItem('codemate');
    }
    let svg = localStorage.getItem('codemate');
    return(
    <>
        <header className="flex-row flex min-h-24 items-center bg-gray-100 px-6 py-4">
        <h1 className="text-3xl flex flex-row grow-1 items-center">
        <span className="grow-1 flex">{title}</span>
        {svg && (
        <span className="flex h-16 w-16 object-fit border-gray-800 bg-blue-200 border rounded-full overflow-hidden">
            {parse(svg)}
        </span>
        )}
        </h1>
        {children}
      </header>
      </>

    )
}