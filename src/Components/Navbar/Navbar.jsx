'use client'

import Link from 'next/link'

import React, { useState } from 'react'

import { FaBars } from 'react-icons/fa'

import { RxCross1 } from 'react-icons/rx'
import NavLink from '../Navlink/NavLink'
import Image from 'next/image'
import Logo from '../Logo/Logo'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const [auth, setAuth] = useState(true)

    const [openPfileMenu, setOpenProfileMenu] = useState(false)

    const navLinks = [

        { name: 'Home', path: '/' },
        { name: 'Services', path: '/service' },
        { name: 'My Bookings', path: '/myboking' },
        { name: 'About', path: '/about' },
        { name: 'Contact ', path: '/contact' },

    ]

    // TOGGLE MENU FOR MOBILE VIEW

    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen)

    }

    return (

        <div className='bg-base-100 py-5  w-full '>

            <nav className=' w-11/12 md:w-10/12 mx-auto flex justify-between items-center relative'>

                {/* Logo */}

                <div className=''>

                    {/* Mobile Nav Link */}

                    {

                        isMenuOpen &&

                        <div className='absolute left-0 top-full w-full md:hidden z-50'>

                            <ul className='flex flex-col gap-5 bg-base-100 py-4 px-5 shadow-xl text-center'>

                                {

                                    navLinks.map(link => <Link onClick={toggleMenu} key={link.path} href={link.path}> {link.name} </Link>)

                                }

                            </ul>

                        </div>

                    }

                    <div className='flex items-center gap-3'>

                        <div onClick={toggleMenu} className='md:hidden'>

                            {

                                isMenuOpen ? <RxCross1 className='text-primary' size={20} /> : <FaBars className='text-primary' size={20} />

                            }



                        </div>

                        <Link href={'/'} >
                            <Logo/>
                        </Link>

                    </div>

                </div>

                {/* Nav Links Desktop */}

                <ul className='md:gap-5 items-center  hidden md:flex'>

                    {

                        navLinks.map(link => <NavLink key={link.path} href={link.path}> {link.name} </NavLink>)

                    }

                </ul>
                {/* PROFILE AND AUTH BUTTONS and theme controll */}

                <div className='flex items-center gap-5'>
                    {/* Auth Buttons */}

                    <div className='flex items-center gap-3'>

                        <div className='flex items-center gap-3'>
                            {
                                auth ? (
                                    // Profile and Logout button
                                    <div className='relative'> {/* Parent container must be relative */}
                                        <div
                                            onClick={() => setOpenProfileMenu(!openPfileMenu)}
                                            className="cursor-pointer border-2 border-primary rounded-full p-0.5 hover:shadow-lg transition-all"
                                        >
                                            <Image
                                                src={'https://i.ibb.co.com/nMRdpq3M/Adobe-Express-file.png'}
                                                width={45}
                                                height={45}
                                                alt='profile-picture'
                                                unoptimized
                                                className='rounded-full object-cover'
                                                title='profile'
                                            />
                                        </div>

                                        {/* Dropdown Menu */}
                                        {openPfileMenu && (
                                            <div className='absolute right-0 mt-3 z-50 w-48 bg-base-100 rounded-xl shadow-2xl border border-gray-100 py-2 transition-all'>
                                                <div className='px-4 py-2 border-b border-gray-100'>
                                                    <p className='text-sm font-semibold text-gray-700'>User Name</p>
                                                    <p className='text-xs text-gray-500 truncate'>user@example.com</p>
                                                </div>

                                                <ul className='flex flex-col'>
                                                    <li>
                                                        <Link href="/profile" className='block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors'>
                                                            My Profile
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/settings" className='block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors'>
                                                            Settings
                                                        </Link>
                                                    </li>
                                                    <li className='border-t border-gray-100 mt-1'>
                                                        <button className='w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors'>
                                                            Logout
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <Link className='btn btn-primary' href={'/login'}> Login </Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )

}



export default Navbar