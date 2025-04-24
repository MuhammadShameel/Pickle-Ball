// app/components/Sidebar.tsx
'use client'

import React from 'react';
import Image from 'next/image';


interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // If the sidebar is not open, don't render it

    return (
        <div
            className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="flex justify-end p-4">
                <button onClick={onClose}>
                    {/* <Image src={CloseIcon} alt="Close Sidebar" width={24} height={24} /> */}
                    Close
                </button>
            </div>

            {/* Sidebar content */}
            <nav className="flex flex-col items-start px-4">
                <a href="#" className="py-2 hover:text-[#B2FFA9]">Home</a>
                <a href="#" className="py-2 hover:text-[#B2FFA9]">Shop</a>
                <a href="#" className="py-2 hover:text-[#B2FFA9]">Blog</a>
                <a href="#" className="py-2 hover:text-[#B2FFA9]">Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;
