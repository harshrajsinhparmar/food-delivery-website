import React, { useState } from "react";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import FoodBox from "./FoodBox";
const Slider =({props,Toprest})=>{
    const [scrollPosition,setscrollPosition]=useState(0);


const itemWidth= Toprest?1200:500;
const gap= Toprest? 40:35;
const totalItemWidth=itemWidth+gap;
const totalWidth=itemWidth*props.length;                            

const nextNow =()=>{
    setscrollPosition((prevPosition)=>{
        let newPosition=prevPosition+totalItemWidth;
        if(prevPosition>=totalWidth - totalItemWidth*3){
           return (newPosition =0 );
    }
    return newPosition;
    })}

const prevNow =()=>{
if(scrollPosition >0){
    setscrollPosition((prevPosition)=>{
        let newPosition=prevPosition-totalItemWidth;
        return newPosition


    });
};

};    


return (
<div>
     
    <div className="flex justify-end flex-row me-200">
        <div className="text-[100px] font-semibold relative  right-460   ">{Toprest? ("        Top restaurant's in Surat"):("Whats on your Mind?")}</div>
    
        {scrollPosition !== 0 ?(
            <div onClick={prevNow}>
                <FaAngleLeft className="border rounded cursor-pointer size-30"/>
            </div>
            )
            :("")

        }

        <div onClick={nextNow}>
        <FaAngleRight className="size-30  border rounded cursor-pointer" />
        </div>
    </div>

    {/* Carousel */}
    <div className="overflow-hidden   ms-150 " style={{width :  3150 }}>
        <div
            className="flex transition-transform duration-300 ease-linear "
            style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
            { props.map((item, index) => (
            Toprest===true ?(
            
           <FoodBox items={props} IW={itemWidth} G={gap} />
                )       
                :
                 ( 

                <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${itemWidth}px`, marginRight: `${gap}px` }}>
                    <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-200 object-cover rounded-lg shadow-md"
                    />
                </div>)
            ))};
      </div>
    </div>
</div>
        )};
export default Slider;