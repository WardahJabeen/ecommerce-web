import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu2Line } from "react-icons/ri"
import { useAppSelector } from '../redux/hooks'

const Navbar = ({ setShowCart }) => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu)
    };

    const closeMenu = () => {
        setMenu(false)
    };

    const cartCount = useAppSelector((state) => state.cartReducer.length);

    return (
        <header className="fixed w-full z-10">
            <section>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-ExtraDarkColor shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div>
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <h1 className='hover:text-black transition-all  text-2xl font-semibold text-PrimaryColor cursor-pointer'>Fashion Store</h1>
                        </Link>
                    </div>
                    <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8 text-PrimaryColor ">
                        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-black transition-all  cursor-pointer'>Home</Link>
                        <Link to="shop" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer'>Shop</Link>
                        <Link to="features" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer'>Features</Link>
                        <Link to="products" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer'>Products</Link>
                        <Link to="review" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer'>Review</Link>
                    </nav>
                    <div className='flex items-center gap-5'>
                        <FaUser size={25} className='text-PrimaryColor' />
                        <div className='text-PrimaryColor relative'>
                            <FaShoppingCart size={25} className='hover:text-black transition-all  cursor-pointer' onClick={() => setShowCart(true)} />
                            <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center'>{cartCount}</div>
                        </div>
                    </div>
                    <div className='lg:hidden flex items-center'>
                        {menu ?
                            (<AiOutlineClose size={28} onClick={handleChange} />) : (
                                <RiMenu2Line size={25} onClick={handleChange} />
                            )}
                    </div>
                </div>
                {/* mobile menu sections */}
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all  cursor-pointer' onClick={closeMenu}>Home</Link>
                    <Link to="shop" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer' onClick={closeMenu}>Shop</Link>
                    <Link to="features" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer' onClick={closeMenu}>Features</Link>
                    <Link to="products" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer' onClick={closeMenu}>Products</Link>
                    <Link to="review" spy={true} smooth={true} duration={500} className='hover:text-black transition ease-in-out cursor-pointer' onClick={closeMenu}>Review</Link>

                </div>
            </section>
        </header>
    )
}

export default Navbar