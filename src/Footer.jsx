import React from "react";

export default function Footer({children}){
    // console.log('init')
    return(
        <footer className="bg-gray-200 h-24 shadow-inner b-0 l-0 r-0 flex items-center justify-between px-6 space-x-4">
        {children}
        </footer>
    )
}