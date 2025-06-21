import React,{useState,useEffect} from 'react';
import { GiFoodTruck } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";
import { IoSearchCircleOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelp } from "react-icons/io5"
import { PiSignInBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Header.css'

function Header ({user}) {

    const [showHeader, setShowHeader] = useState(true);
    // console.log(user);
    const [id, setId] = useState(null)
     
    /*useEffect(() => {
        const id = localStorage.getItem("id");
        console.log(id);
        setId(id);
      }, []);
    */


      useEffect(() => {
  const storedUser = localStorage.getItem("id");
  if (storedUser) {
    try {
      const userObj = JSON.parse(storedUser);
      const extractedId = userObj._id;
      console.log(extractedId);
      setId(extractedId);
    } catch (error) {
      console.error("Failed to parse user ID from localStorage:", error);
    }
  }
}, []);

  useEffect(() => {
    const handleScroll = () => {
      
      const filterHeader = document.getElementById("filter-header");
      if (filterHeader) {
        const rect = filterHeader.getBoundingClientRect();
        setShowHeader(rect.top > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
 return (<div className={`z-20 bg-white flex sticky top-0  flex-row shadow-xl text-black items-center justify-between  h-80 font-bold w-full transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0 "}`} >  
   <div >
      <GiFoodTruck className="ms-200 cursor-pointer flex-row hover:text-yellow-500 size-70 "/>
    </div >
<div className="flex text-[100px]">
    <div className="flex   cursor-pointer flex-row hover:text-yellow-500 items-center   ">Other <FaChevronDown className='ms-4'/></div>
    <div className="flex ms-200  cursor-pointer flex-row hover:text-yellow-500 items-center "><PiSuitcaseSimple className='size-30'/>Corporate</div>
    <div className="flex ms-7   cursor-pointer flex-row hover:text-yellow-500 items-center "><IoSearchCircleOutline className='size-30' />Search</div>
    <div className="flex ms-7   cursor-pointer flex-row hover:text-yellow-500 items-center "><BiSolidOffer className='size-24'/>Offers</div>
    <div className="flex ms-7   cursor-pointer flex-row hover:text-yellow-500 items-center "><IoHelp className='size-24'/>Help</div>
    <div className="flex mx-7   cursor-pointer flex-row hover:text-yellow-500 items-center "><PiSignInBold className='size-27'/> 
    {user ? <Link to={`/profile/${id}`} className="link-style"><div className='hover:text-orange-600 cursor-pointer'>Profile</div></Link>
          :<Link to="/sign-up" className='link-style'>Sign-Up</Link>}</div>
    <div className="flex ms-7   cursor-pointer flex-row hover:text-yellow-500 items-center "><FaShoppingCart className='size-27'/>Cart</div>
    
    
    
    </div>
    
    </div>
 
  );
}

export default Header;