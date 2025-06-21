import { Link } from 'react-router-dom';
import { GiFoodTruck } from 'react-icons/gi';
import React from 'react';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center  text-center">
      <div className="flex items-center justify-center gap-6 mb-8">
        <GiFoodTruck className=" hover:text-yellow-500 size-100" />
        <p className=" font-bold text-[100px] text-yellow-500  ">
          FoodTruck
        </p>
        <GiFoodTruck className=" hover:text-yellow-500 size-100" />
      </div>

      

      <Link to="/layout">
        <button className="px-10 py-4   w-350  h-30 hover:text-yellow-500 rounded-full shadow-lg transition-all duration-300">
           <p className=" font-bold justify-center text-[60px] text-yellow-500">
          GO TO MENU
        </p>
        </button>
        
      </Link>
      <p className="text-[95px]   mb-8">
        Delicious food delivered with joy.
      </p>
    </div>
  );
}

export default App;
