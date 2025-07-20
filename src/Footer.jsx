import React from "react";

export default function Footer({children}){
    // console.log('init')
    return(
        <footer className="bg-gray-200 minh-24 flex items-center justify-between px-6 space-x-4 py-6">
        {children}
        </footer>
    )
}