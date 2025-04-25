'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/Logo.svg';
import Profile from '../../public/assets/images/profile.svg';
import Bag from '../../public/assets/images/bag.svg';
import Menu from '../../public/assets/images/menu.svg';
import Sidebar from './Sidebar';
import { Product } from './ProductsServer'; // Product type

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState<Product[]>([]); // Track cart products

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false); // Close the sidebar
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAddToCart = (product: Product) => {
        setCartProducts((prevProducts) => [...prevProducts, product]); // Add product to the cart
        handleSidebarToggle(); // Open the sidebar when a product is added
    };

    // Handle removing the product based on its id
    const handleRemoveFromCart = (productId: string) => {
        setCartProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId)); // Remove product by id
    };

    return (
        <>
            <header className="text-[#00000099] body-font">
                <div className="container mx-auto flex flex-wrap py-10 flex-row items-center">
                    <Link href={''} className="flex lg:order-1 md:order-1 order-2 title-font font-medium items-center mb-4 md:mb-0">
                        <Image src={Logo} alt="Logo" />
                    </Link>

                    {/* Desktop Links */}
                    <nav className={`md:ml-auto md:mr-auto lg:order-3 md:order-3 order-1 lg:flex md:flex flex-wrap items-center text-base hidden justify-center ${isMenuOpen ? 'hidden' : ''}`}>
                        <Link className="px-[17.5px] hover:text-[#1E503F]" href={''}>Custom Paddles</Link>
                        <Link className="px-[17.5px] hover:text-[#1E503F]" href={''}>Shop</Link>
                        <Link className="px-[17.5px] hover:text-[#1E503F]" href={''}>Our Story</Link>
                        <Link className="px-[17.5px] hover:text-[#1E503F]" href={''}>Collaborations</Link>
                        <Link className="px-[17.5px] hover:text-[#1E503F]" href={''}>Blog</Link>
                        <Link className="px-[17.5px] hover:text-[#1E503F]" href={''}>Contact Us</Link>
                    </nav>

                    <div className="gap-2.5 flex order-3">
                        {/* Desktop buttons */}
                        <button className="inline-flex items-center border-[#00000099] hover:border-[#1E503F] border-1 p-2.5 focus:outline-none rounded-full hover:bg-[#B2FFA9] transition ease-in-out text-base mt-4 md:mt-0 cursor-pointer">
                            <Image src={Profile} alt="Profile" />
                        </button>
                        <button onClick={handleSidebarToggle} className="inline-flex items-center border-[#00000099] hover:border-[#1E503F] border-1 p-2.5 focus:outline-none rounded-full hover:bg-[#B2FFA9] transition ease-in-out text-base mt-4 md:mt-0 cursor-pointer">
                            <Image src={Bag} alt="Bag" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={handleMenuClick} className="md:hidden flex justify-start items-center p-2 rounded-full hover:bg-[#B2FFA9] transition">
                        <Image src={Menu} alt="Menu" className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Sidebar component with cartProducts */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                cartProducts={cartProducts}
                onRemoveFromCart={handleRemoveFromCart} // Pass the function here
            />
        </>
    );
};

export default Navbar;
