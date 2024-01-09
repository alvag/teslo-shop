'use client';

import { IoCloseOutline } from '@react-icons/all-files/io5/IoCloseOutline';
import { IoSearchOutline } from '@react-icons/all-files/io5/IoSearchOutline';
import Link from 'next/link';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { IoTicketOutline } from '@react-icons/all-files/io5/IoTicketOutline';
import { IoLogInOutline } from '@react-icons/all-files/io5/IoLogInOutline';
import { IoLogOutOutline } from '@react-icons/all-files/io5/IoLogOutOutline';
import { IoShirtOutline } from '@react-icons/all-files/io5/IoShirtOutline';
import { IoPeopleOutline } from '@react-icons/all-files/io5/IoPeopleOutline';
import { useUIStore } from '@/store';
import { clsx } from 'clsx';


export const Sidebar = () => {

    const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
    const closeMenu = useUIStore( state => state.closeSideMenu );

    return (
        <div>

            {
                isSideMenuOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"/>
                )
            }


            {
                isSideMenuOpen && (
                    <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                         onClick={ closeMenu }/>
                )
            }


            <nav
                className={
                    clsx(
                        'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                        {
                            'translate-x-full': !isSideMenuOpen,
                        },
                    )
                }>

                <IoCloseOutline size={ 50 } className="absolute top-5 right-0 cursor-pointer"
                                onClick={ () => closeMenu() }/>

                <div className="relative mt-14">
                    <IoSearchOutline size={ 20 } className="absolute top-2 left-2"/>
                    <input type="text" placeholder="Buscar"
                           className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <Link href="/" className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoPersonOutline size={ 30 }/>
                    <span className="ml-3 text-xl">Perfil</span>
                </Link>

                <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoTicketOutline size={ 30 }/>
                    <span className="ml-3 text-xl">Órdenes</span>
                </Link>

                <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogInOutline size={ 30 }/>
                    <span className="ml-3 text-xl">Ingresar</span>
                </Link>

                <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogOutOutline size={ 30 }/>
                    <span className="ml-3 text-xl">Salir</span>
                </Link>

                <div className="w-full h-px bg-gray-200 my-10"/>

                <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoShirtOutline size={ 30 }/>
                    <span className="ml-3 text-xl">Productos</span>
                </Link>

                <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoTicketOutline size={ 30 }/>
                    <span className="ml-3 text-xl">Órdenes</span>
                </Link>

                <Link href="/" className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoPeopleOutline size={ 30 }/>
                    <span className="ml-3 text-xl">Usuarios</span>
                </Link>
            </nav>

        </div>
    );
};
