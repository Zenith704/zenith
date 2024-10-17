'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import MarketSphereLogo from '../../assets/svg/marketplace.svg';
import ToggleMenu from '../reusables/buttons/ToggleMenu';

const Navbar = () => {
  const [navDrawer, setNavDrawer] = useState(false);
  const toggleNav = () => {
    setNavDrawer(!navDrawer);
  };



  return (
    <>
      <nav
        className={`fixed w-full backdrop-blur-lg transition-all duration-1000 border-b border-[#0FEADF] overflow-hidden ${navDrawer ? 'h-[20rem]' : 'h-[3rem]'} md:h-[3rem] z-10`}
      >
        <div className='items-start justify-around flex flex-row py-3 cursor-pointer'>
          <div className='flex flex-row items-center gap-5 uppercase'>
            <Image src={MarketSphereLogo} height={30} width={30} alt='logo' />
            <h1 className='hidden md:flex bg-gradient-to-tr from-[#6B0F9C] to-[#0FEADF] bg-clip-text text-transparent text-2xl font-semibold tracking-tighter'>
              Market Sphere
            </h1>
          </div>
          <div className='w-1/2 md:w-1/4'>
            <SearchInput />
          </div>
          <div className=' flex-row md:flex gap-5 text-neutral-300 hidden text-xs items-center'>
          {navItems.map((items, index) => (
            <ul key={index} className='flex gap-2 hover:text-[#0FEADF] active:underline border-l pl-4 items-center'>
              <span>
                {items.name}
              </span>
              <span>
                {items.icon}
              </span>
            </ul>
          ))}
        </div>
          <div className='md:hidden'>
            <ToggleMenu Click={toggleNav} />
          </div>
        </div>
        <div className='w-full h-max md:hidden flex flex-col items-center justify-around gap-5'>
          {navItems.map((items, index) => (
            <ul key={index} className='flex gap-2 hover:text-[#0FEADF] active:underline pb-2 items-center'>
              <span>
                {items.name}
              </span>
              <span>
                {items.icon}
              </span>
            </ul>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
