import React from 'react';
import {useNavigate} from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function LearningStyleIntro() {
    let navigate = useNavigate();
    return (
        <>
            <Header title="Help us get to know you" avatar={true}>
                {/* <small className="text-sm">You can change this later</small> */}
            </Header>
            <div className="row-start-3 grid grid-cols-12 text-left flex flex-col grow-1 center items-center content-center grow-1 overflow-y-scroll">
                <div className="mb-30 col-span-8 col-start-3 flex flex-col bg-gray-200 p-12 rounded-xl self-center">
                    {/* <h2 className="text-xl font-bold"></h2> */}
                    <p className="my-3">To get to know you a little better, we have a few quick questions about your style and preferences.</p>
                    <p className="my-3">With this information we can work better to match you during group activites and work with your teacher to streamline your experience.</p>
                    <p className="my-3">If at any point you would like to change these answers, you can visit your profile page to make updates.</p>
                    {/* <p><a className="mt-3 inline-block px-12 py-4 bg-indigo-600 text-white rounded-xl shadow bg-primary" onClick={()=>navigate('/styles')}>Get started</a></p> */}
                </div>
            </div>
            <Footer>
            <button
              className="px-8 py-4 text-white rounded-xl shadow bg-gray-600"
              onClick={()=>navigate('/')}>
              Back
            </button>
            <button
                onClick={()=>navigate('/styles')}
                className="bg-code-purple text-white px-8 py-4 rounded-xl">
                Next
            </button>
            </Footer>
        </>
    )
}