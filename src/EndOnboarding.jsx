import React from 'react';
import { useNavigate } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function EndOnboarding() {
  let navigate = useNavigate();
  return (
    <>
    <title>End onboarding</title>
      <Header title="The end">
        {/* <small className="text-sm">You can change this later</small> */}
      </Header>
      <div className="center row-start-2 flex grid grow-1 grid-cols-12 flex-col content-center items-center overflow-y-scroll text-left">
        <div className="col-span-8 col-start-3 my-10 flex flex-col self-center rounded-xl bg-gray-200 p-12">
          {/* <h2 className="text-xl font-bold"></h2> */}
          <p className="my-3">
            This is the end of Phase 1, Please click "End Task" or close the tab.
          </p>
          {/* <p><a className="mt-3 inline-block px-12 py-4 bg-indigo-600 text-white rounded-xl shadow bg-primary" onClick={()=>navigate('/styles')}>Get started</a></p> */}
        </div>
      </div>
    </>
  );
}
