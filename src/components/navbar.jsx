import React, { useState, useEffect } from 'react';
import './style/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Set to true if screen width is <= 768px
  };

  useEffect(() => {
    checkScreenSize(); // Check screen size on initial render
    window.addEventListener('resize', checkScreenSize); // Update on resize

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Cleanup
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      const navbar = document.querySelector('.navbar'); 
      const menu = document.querySelector('.menu'); 
      if (navbar) {
        navbar.style.position = 'sticky'; // Use a valid CSS value
        menu.innerHTML = "";
      }
    }
  }, [isSmallScreen]);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Close the menu after clicking
    }
  };

  return (
    <nav className="navbar fixed w-full flex items-center justify-between p-8 bg-transparent">
      <div className="logo text-white">Portfolio</div>
      <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
        <button className="text-white menubtn flex justify-between items-center m-3 mr-6">
          <p className="mb-1 mr-5 menu">menu</p>
          <i className="fa-solid fa-bars nav-button"></i>
        </button>
      </div>

      {/* Background overlay */}
      {/* <div
        className={fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-500 ${menuOpen ? 'opacity-50 visible' : 'opacity-0 visible'}}
        onClick={toggleMenu}
      ></div> */}

      {/* Navbar Menu */}
      <div className={`nav-screen fixed top-0 right-0 p-6 max-2xl:w-1/2 max-xl:w-2/3 max-md:w-full bg-white shadow-lg transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="offcanvas-header">
          <button className="text-black text-2xl p-6 text-3xl absolute top-4 right-4" onClick={toggleMenu}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="flex justify-center items-center" style={{ marginTop: '100px' }}>
          <div className="container off-nav-cont mt-12 mx-[15%] max-sm:mx-[5%] flex justify-between items-center" style={{ padding: '0' }}>
            <div className="left-off-nav flex flex-col">
              <span id="social">Socials</span>
              <a href="https://www.linkedin.com/in/muhid-khan-b038a9310/" className="hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com/muhidkhanbadozai/" className="hover:underline">Instagram</a>
              <a href="https://github.com/MuhidKhanBadozai" className="hover:underline">Github</a>
            </div>
            <div className="right-off-nav flex flex-col justify-start">
              <span id="menu">Menu</span>
              <button onClick={() => scrollToSection('aboutMe')} className="btn-1">About Me</button>
              <button onClick={() => scrollToSection('projects')} className="btn-2">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="btn-3">Contact</button>
            </div>
          </div>
        </div>
        <div className="footer flex flex-col">
          <span>Get in touch</span>
          <a href="#" className="email">muhidkhan2021@gmail.com</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;