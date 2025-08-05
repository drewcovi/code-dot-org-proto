// import React, { useState } from "react";
import parse from 'html-react-parser';
import { useNavigate } from 'react-router';
import { Children } from 'react';

export default function Wrapper({
  title,
  subhead,
  resetSvg,
  avatar,
  children,
}) {
  const body = Children.toArray(children).find(
    (child) => child.type === Wrapper.Body
  );
  const footer = Children.toArray(children).find(
    (child) => child.type === Wrapper.Footer
  );

  const navigate = useNavigate();
  if (resetSvg) {
    localStorage.removeItem('codemate');
  }
  let svg = localStorage.getItem('codemate');
  return (
    <div className="flex grid h-screen grid-cols-[auto] grid-rows-[auto_auto_1fr_auto] flex-col font-sans text-gray-800">
      <header className="bg-code-teal flex min-h-12 flex-row items-center px-6 py-4 text-white">
        <h1 className="">
          <span className="flex grow-1"></span>
          {avatar && svg && (
            <span
              onClick={() => navigate('/')}
              className="object-fit fixed right-5 bottom-30 z-200 ml-6 flex h-30 w-30 overflow-hidden rounded-full border border-gray-800 bg-blue-200 shadow-md"
            >
              {parse(svg)}
            </span>
          )}
        </h1>
      </header>
      <main className="row-start-3 flex flex-1 overflow-y-auto overflow-y-scroll">
        <div className="row-start-2 border-b border-b-1 border-gray-300 p-8">
          <h1 className="flex flex-row items-center text-3xl">{title}</h1>
          {subhead}
        </div>
        {body}
      </main>
      <footer className="minh-24 absolute right-0 bottom-0 left-0 row-start-3 flex items-center justify-between space-x-4 bg-gray-200/80 px-6 py-6 backdrop-blur-lg">
        {footer}
      </footer>
    </div>
  );
}
