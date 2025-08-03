// import React, { useState } from "react";
import parse from 'html-react-parser';
import { useNavigate } from 'react-router';

export default function Footer({ title, resetSvg, avatar, children }) {
  const navigate = useNavigate();
  if (resetSvg) {
    localStorage.removeItem('codemate');
  }
  let svg = localStorage.getItem('codemate');
  return (
    <>
    {avatar && svg && (
        <span
            onClick={() => navigate('/')}
            className="ml-6 flex h-30 w-30 object-fit border-gray-800 bg-blue-200 border rounded-full overflow-hidden fixed bottom-30 z-200 right-5 shadow-md"
        >
            {parse(svg)}
        </span>
        )}
      <div className="row-start-1 p-8 border-b border-b-1 border-gray-300">
        <h1 className="text-3xl flex flex-row items-center">{title}</h1>
        {children}
      </div>
    </>
  );
}
