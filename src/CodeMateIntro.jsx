import React from 'react';
import { useNavigate } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function CodeMateIntro() {
  let navigate = useNavigate();
  return (
    <>
      <title>Intro to Learning Styles</title>
      <Header title="Welcome! Your Code Mate Companion" avatar={false}>
        {/* <small className="text-sm">You can change this later</small> */}
      </Header>
      <div className="center row-start-2 flex grid grow-1 grid-cols-12 flex-col content-center items-center overflow-y-scroll text-left">
        <div className="col-span-8 col-start-3 mb-30 flex flex-col self-center rounded-xl bg-gray-200 p-12">
          {/* <h2 className="text-xl font-bold"></h2> */}
          <h2 className="">
            Hello! To enhance your learning journey we created an Avatar Code
            Mate companion to be with you during your learning journey.{' '}
          </h2>
          <p className="my-3">What this means for you</p>
          <ul>
            <li>Choose to share it with your classmates on group projects</li>
            <li>In-lesson character for your learning journey</li>
            <li>A learning companion</li>
          </ul>
          {/* <p><a className="mt-3 inline-block px-12 py-4 bg-indigo-600 text-white rounded-xl shadow bg-primary" onClick={()=>navigate('/styles')}>Get started</a></p> */}
        </div>
      </div>
      <Footer>
        {/* <button
          className="rounded-xl bg-gray-600 px-8 py-4 text-white shadow"
          onClick={() => navigate('/')}
        >
          Back
        </button> */}
        <span></span>
        <button
          onClick={() => navigate('/codemate')}
          className="bg-code-purple rounded-xl px-8 py-4 text-white"
        >
          Next
        </button>
      </Footer>
    </>
  );
}
