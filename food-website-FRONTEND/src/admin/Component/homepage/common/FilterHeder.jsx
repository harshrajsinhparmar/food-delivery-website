import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom";
function FilterHeader() {
  return (
    <div
      id="filter-header"
      className="z-10  text-[90px]  bg-white shadow-xl  sticky top-0 flex gap-40 h-50  items-center "
    >
      <div className=" ms-10 flex border-2 border-solid rounded-full p-5 items-center  transform hover:scale-90 duration-100 "><Link style={{color: 'black',decoration:'none'}}>Filter</Link><LuSettings2 /></div>
             <div className=" flex border-2 border-solid rounded-full p-5 items-center  transform hover:scale-90 duration-100 ">Sort By</div>
       <div className=" flex border-2 border-solid rounded-full p-5 items-center  transform hover:scale-90 duration-100 ">Rs. 300-Rs. 600</div>
      <div className=" flex border-2 border-solid rounded-full p-5 items-center  transform hover:scale-90 duration-100 ">Less than Rs. 300</div>
      <div className=" flex border-2 border-solid rounded-full p-5 items-center  transform hover:scale-90 duration-100 ">Food in 10mins</div>
 <div className=" flex border-2 border-solid rounded-full p-5 items-center  transform hover:scale-90 duration-100 ">Pure Veg</div>

    </div>
  );
}

export default FilterHeader;
