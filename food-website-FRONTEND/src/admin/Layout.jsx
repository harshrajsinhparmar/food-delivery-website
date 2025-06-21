import React from 'react';
import Footer from './Component/Footer.jsx';
import Header from './Component/Header.jsx';
import FoodCategory from './Component/homepage/FoodCategory.jsx';
import TOPRestaurant from './Component/homepage/TOPRestaurents.jsx';
import JaipurRest from './Component/homepage/JaipurRest.jsx';
import FilterHeader from './Component/homepage/common/FilterHeder.jsx';
import {useState,useEffect } from "react";
function Layout() {
  const [user,setUser]=useState(false);
  useEffect(()=>{
    const existUser=localStorage.getItem("userToken");
    if(existUser){
      setUser(true);

    }

  },[]);


  return (
    <div className="flex flex-col min-h-screen ">
      <Header user={user} />
      <main className="flex-grow p-5 text-center  mx-40">
        <FoodCategory/>
        <hr/>
        <TOPRestaurant/>
        <hr/>
        <FilterHeader/>
        <JaipurRest/>
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;
