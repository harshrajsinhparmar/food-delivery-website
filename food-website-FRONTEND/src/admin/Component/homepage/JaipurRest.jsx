import React from 'react';
import FoodBox from './common/FoodBox';



const TOPRESTARRAY = [

  {
    img: "/src/admin/Component/homepage/OFFERS/Burger_King.avif",
    discount: "₹120 OFF ABOVE ₹499",
    name: "Burger King",
    ratings: "4.4",
    time: "20–30 mins",
    specials: "Burgers, Fast Food",
    address: "Vesu",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/KFC.avif",
    discount: "₹150 OFF ABOVE ₹599",
    name:"KFC",
    ratings: "4.2",
    time: "25–35 mins",
    specials: "Chicken, Fast Food",
    address: "LP Savani",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/Kwality_walls_ICE_CREAM.avif",
    discount: "₹200 OFF ABOVE ₹649",
    name: "Kwality Walls Ice Cream",
    ratings: "4.6",
    time: "10–15 mins",
    specials: "Indian",
    address: "Katargam",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/McDonald's.avif",
    discount: "₹100 OFF ABOVE ₹399",
    name: "McDonald's",
    ratings: "4.5",
    time: "20–25 mins",
    specials: "Burgers, Beverages",
    address: "Citylight",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/Nareshbhai_V_Bhelwala.avif",
    discount: "ITEMS AT ₹49",
    name: "Nareshbhai V Bhelwala",
    ratings: "4.5",
    time: "10–15 mins",
    specials: "Chinese, Burgers, Pizzas, Fast Food",
    address: "Daliya Street",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/NIC_ICE_CREAM.avif",
    discount: "₹50 OFF ABOVE ₹199",
    name: "NIC Ice Cream",
    ratings: "4.7",
    time: "15–20 mins",
    specials: "Ice Creams, Desserts",
    address: "Nanpura",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/Pizza_Hut.avif",
    discount: "₹100 OFF ABOVE ₹499",
    name: "Pizza Hut",
    ratings: "4.3",
    time: "20–30 mins",
    specials: "Pizzas, Italian",
    address: "Ghod Dod Road",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/shawarma.avif",
    discount: "₹60 OFF ABOVE ₹249",
    name: "Shawarma Point",
    ratings: "4.2",
    time: "15–20 mins",
    specials: "Shawarma, Rolls",
    address: "Adajan",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/Theobroma.avif",
    discount: "₹100 OFF ABOVE ₹399",
    name: "Theobroma",
    ratings: "4.6",
    time: "20–25 mins",
    specials: "Cakes, Desserts",
    address: "Vesu",
  },
  {
    img: "/src/admin/Component/homepage/OFFERS/Vaishali_Vadapav.avif",
    discount: "₹30 OFF ABOVE ₹149",
    name: "Vaishali Vadapav",
    ratings: "4.4",
    time: "10–15 mins",
    specials: "Vadapav, Indian Fast Food",
    address: "Katargam",
  },
];



function JaipurRest() {
  return ( <div className="flex place-content-evenly flex-wrap p-10 ">
          <FoodBox  items={TOPRESTARRAY} IW={1200} G={100}/>
    </div>
  );
}

export default JaipurRest;
