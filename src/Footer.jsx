import React from "react";

export default function Footer({children}){
    // console.log('init')
    return(
        <footer className="bg-gray-200/80 backdrop-blur-lg minh-24 flex items-center justify-between px-6 space-x-4 py-4 absolute bottom-0 left-0 right-0">
        {children}
        </footer>
    )
}