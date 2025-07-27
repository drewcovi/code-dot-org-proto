import React from 'react';
import {useNavigate} from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function EndOnboarding() {
    let navigate = useNavigate();
    return (
        <>
            <Header title="The end">
                {/* <small className="text-sm">You can change this later</small> */}
            </Header>
            <div className="row-start-3 grid grid-cols-12 text-left flex flex-col grow-1 center items-center content-center grow-1 overflow-y-scroll">
                <div className="my-10 col-span-8 col-start-3 flex flex-col bg-gray-200 p-12 rounded-xl self-center">
                    {/* <h2 className="text-xl font-bold"></h2> */}
                    <p className="my-3">This is the end of Phase 1, Please click "End Task".</p>
                    {/* <p><a className="mt-3 inline-block px-12 py-4 bg-indigo-600 text-white rounded-xl shadow bg-primary" onClick={()=>navigate('/styles')}>Get started</a></p> */}
                </div>
            </div>
            
        </>
    )
}