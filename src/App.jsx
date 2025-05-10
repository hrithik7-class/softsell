import './App.css'
import React, { useState } from 'react'
import { useTheme } from './context/ThemeContext';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { Menu } from 'lucide-react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';


function App() {
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);


  return (
    <>
      <div className="min-h-screen max-w-screen " >
        {/* Navigation */}
        <nav className="max-w-full  flex items-center sm:justify-around px-2 py-4    bg-white justify-start  top-0 sticky mx-auto    dark:bg-background-dark">

          <div className='md:w-[80px] w-[65px]  top-5  ' >
            <img src='/softsell.png' alt='Netflix Logo' className='w-15 sm:w-40 sm:ml-0 ' />
          </div>

          {/* Desktop Navigation Links */}

          <div className="hidden sm:flex sm:items-center sm:gap-8   md:text-lg text-sm font-semibold max-w-full dark:text-blue-500  dark:hover:text-white ">
            <Link to="hero" duration={500} smooth={true} className="text-gray-500 hover:text-blue-600 font-custom  dark:text-blue-400 dark:hover:text-white ">
              Home
            </Link>
            <Link to="how-it-works" duration={500} smooth={true} className="text-gray-500 hover:text-blue-600 font-custom  dark:text-blue-400 dark:hover:text-white">
              How It Works
            </Link>
            <Link to="why-us" duration={500} smooth={true} className="text-gray-500 hover:text-blue-600 font-custom  dark:text-blue-400 dark:hover:text-white">
              Why Us
            </Link>
            <Link to="testimonials" duration={500} smooth={true} className="text-gray-500 hover:text-blue-600 font-custom  dark:text-blue-400 dark:hover:text-white">
              Testimonials
            </Link>
            <Link to="contact" duration={500} smooth={true} className="text-gray-500 hover:text-blue-600 font-custom  dark:text-blue-400 dark:hover:text-white">
              Contact
            </Link>

          </div>


          <p onClick={toggleTheme} className=' hidden sm:flex flex-center sm:text-2xl     md:text-black text-3xl   dark:text-blue-700    transition   ' >
            {theme === 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </p>

          {/* Mobile Menu Toggle Button */}

          <div className="flex size-6 cursor-pointer justify-end sm:hidden ml-auto " onClick={toggleMobileMenu}>
            <Menu />
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed top-16 left-0 w-full bg-white shadow-md sm:hidden border bottom-gray-100
             dark:bg-background-dark dark:border-b-0  dark:border-t-0 dark:border-l-0 dark:border-r-0">
              <div className="flex flex-col p-4">

                <p onClick={toggleTheme} className='  md:text-black text-3xl   dark:text-blue-700    transition ml-3  ' >
                  {theme === 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                </p>
                <Link to='hero' duration={500} smooth={true} className='block hover:underline p-2  font-custom' onClick={toggleMobileMenu}> Home</Link>
                <Link to='why-us' duration={500} smooth={true} className='block hover:underline p-2  font-custom' onClick={toggleMobileMenu}>How It Works</Link>
                <Link to='how-it-works' duration={500} smooth={true} className='block hover:underline p-2  font-custom' onClick={toggleMobileMenu}>Why Us </Link>
                <Link to='why-us' duration={500} smooth={true} className='block hover:underline p-2  font-custom' onClick={toggleMobileMenu}>Testimonials</Link>
                <Link to='testimonials' duration={500} smooth={true} className='block hover:underline p-2  font-custom' onClick={toggleMobileMenu}> Contact </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Sections */}
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <div className="border border-t-gray-300 border-t-1 border-l-0 border-r-0 border-b-0" >
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App
