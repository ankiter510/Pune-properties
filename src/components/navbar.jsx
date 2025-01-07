import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../index.css';
import Logo from '../assets/logo.webp';
import { useNavigate } from "react-router-dom"; 
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEnquireForm, setShowEnquireForm] = useState(false);
  const [showPostPropertyForm, setShowPostPropertyForm] = useState(false);
  // const [showchatbot, setchatbot] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleEnquireNowClick = () => {
    setShowEnquireForm(!showEnquireForm);
  };

  const handlePostPropertyClick = () => {
    setShowPostPropertyForm(!showPostPropertyForm);
  };

  const handlechatbotClick = () => {
    setchatbot(!showchatbot);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 33) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className={`fixed top-0 z-50 w-full h-[px] flex justify-between items-center px-4 text-black font-semibold ${isScrolled ? "bg-white" : "bg-transparent"}`}>
        {/* Logo */}
        <div className="ml-10 mt-5 w-400 ">
          <img src={Logo} alt="Logo" className="w-auto h-[50px]" /> {/* Keep logo size constant */}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleMenuClick}>
          {showMenu ? (
            <svg
              className="h-6 w-6 text-black cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-black cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex mt-5">
          <li>
            {/* <Link to="TopLocations" smooth={true} duration={500} className='hover:text-orange-500'>
              HOME
            </Link> */}
            <button className='hover:text-orange-500' onClick={()=>navigate('/')}>
              Home
            </button>

          </li>
          <li>
            <Link to="about" smooth={true} duration={500}className='hover:text-orange-500'>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="feature" smooth={true} duration={500} className='hover:text-orange-500'>
              RESIDENTIAL
            </Link>
          </li>
          <li>
            <Link to="sale" smooth={true} duration={500} className='hover:text-orange-500'>
              COMMERCIAL
            </Link>
          </li>
          <li>
            <Link to="service" smooth={true} duration={500} className='hover:text-orange-500'>
              RESALE
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500} className='hover:text-orange-500'>
              CONTACT US
            </Link>
          </li>
          <li>
            <button className='hover:text-orange-500' onClick={()=>navigate('/chatbot')}>
              CHATBOT
            </button>
          </li>
        </ul>

        {/* Post Property and Enquire Now Button */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-orange-600 hover:text-white mx-2" onClick={handlePostPropertyClick}>
            POST PROPERTY
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-orange-600 hover:text-white mx-2" onClick={handleEnquireNowClick}>
            ENQUIRE NOW
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } md:hidden flex flex-col bg-blue-800 text-white w-full absolute top-16 left-0 z-10`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer"
            onClick={handleMenuClick}
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer"
            onClick={handleMenuClick}
          >
            ABOUT US
          </Link>
          <Link
            to="feature"
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer"
            onClick={handleMenuClick}
          >
            RESIDENTIAL
          </Link>
          <Link
            to="sale"
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer"
            onClick={handleMenuClick}
          >
            COMMERCIAL
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer"
            onClick={handleMenuClick}
          >
            RESALE
          </Link>
          <Link
            to="demo"
            smooth={true}
            duration={500}
            className="p-4 cursor-pointer"
            onClick={handleMenuClick}
          >
            CONTACT US
          </Link>

          <button className="p-4 cursor-pointer">
            {/* <TableRestaurantIcon className="p-4 cursor-pointer" /> */}
            <span className='p-4 cursor-pointer' >chatbot</span>
          </button>
          <button
            className="p-4 cursor-pointer"
            onClick={() => {
              handleMenuClick();
              handleEnquireNowClick();
            }}
          >
          ABC
          </button>
          <button
            className="p-4 cursor-pointer"
            onClick={() => {
              handleMenuClick();
              handlePostPropertyClick();
            }}
          >
         ABD
          </button>
        </div>
      </div>

{/* Enquire Now Form */}
      {showEnquireForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Enquire Now</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                Submit Message
              </button>
              <button
                type="button"
                className="w-full mt-2 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-700"
                onClick={handleEnquireNowClick}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

{/* export default ChatbotForm; */}


      {/* Post Property Form */}
      {showPostPropertyForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Post Property</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Property Details"
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                Submit Property
              </button>
              <button
                type="button"
                className="w-full mt-2 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-700"
                onClick={handlePostPropertyClick}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
