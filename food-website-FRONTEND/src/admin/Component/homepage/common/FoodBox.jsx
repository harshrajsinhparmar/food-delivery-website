import React from 'react';
import { FaStar } from "react-icons/fa";

function FoodBox({items,IW,G}) {
  return (
        items.map((item,index)=>(
     <div
                key={index}
                className="flex-shrink-0 transform hover:scale-90 duration-100 " 
                style={{  width: `${IW}px`, marginRight: `${G}px` }}>
                    <img
                        src={item.img}
                        className="w-full h-200 object-cover rounded-xl shadow-md"
                    ></img>
                    <div className="text-[60px] text-left font-semibold">{item.name}</div>
                    <div className="text-[100px] text-left font-bold">{item.discount}</div>
                    <div className="text-[60px] flex font-semibold"><FaStar className="size-20"/>{item.ratings}[{item.time}]</div>
                    <div className="text-[60px] text-left ">{item.specials}</div>
                    <div className="text-[60px] text-left ">{item.address}</div>
            </div>
        ))
  );
}

export default FoodBox;
