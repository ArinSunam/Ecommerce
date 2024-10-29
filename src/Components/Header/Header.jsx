import React, { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { HiMenu, HiX } from 'react-icons/hi';
import Cart from '../Cart';
import { useCartContext } from '../../Context/CartContext';

const Header = () => {
  const { cartItems } = useCartContext();
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navlinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '#' },
    { name: 'Shop', to: '#' },
    { name: 'Blogs', to: '#' },
    { name: 'Contact Us', to: '#' },
  ];

  const [cartOpen, setCartOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onClose = () => setCartOpen(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="fixed z-40 bg-white w-full shadow-md">
      {cartOpen && <Cart onClose={onClose} />}

      <div className="main-container py-5 flex items-center justify-between">
        {/* Logo */}
        <section>
          <h1 className="text-4xl font-medium text-primary">Logo</h1>
        </section>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-12 text-lg font-semibold">
          {navlinks.map((el, i) => (
            <a key={i} href={el.to} className="hover:text-primary transition">
              {el.name}
            </a>
          ))}
        </nav>



        {/* Icons */}
        <ul className="flex items-center gap-5">
          <li className="relative p-2 rounded-full flex cursor-pointer">
            <CiHeart size={28} />
            <div className="h-[20px] w-[20px] rounded-full absolute top-[-4px] right-[-6px] bg-red-500 flex items-center justify-center">
              <p className="text-white text-sm">0</p>
            </div>
          </li>

          <li className="p-2 rounded-full flex cursor-pointer relative">
            <BsCart size={24} onClick={() => setCartOpen(true)} title="Cart" />
            <div className="h-[20px] w-[20px] rounded-full absolute top-[-4px] right-[-8px] bg-red-500 flex items-center justify-center">
              <p className="text-white text-sm">{totalQuantity > 0 ? totalQuantity : '0'}</p>
            </div>
          </li>

          <li className="p-2 rounded-full flex cursor-pointer">
            <IoPersonOutline size={24} />
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>



      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col gap-4 p-4">
            {navlinks.map((el, i) => (
              <li key={i}>
                <a href={el.to} className="block hover:text-primary transition">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
