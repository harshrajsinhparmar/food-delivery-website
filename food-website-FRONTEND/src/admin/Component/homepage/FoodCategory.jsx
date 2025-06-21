import React from "react";
import Slider from "./common/Slider"; 
const FoodCategory =()=>{

     const foodCartArray = [
  { name: 'Biryani', img: 'src/admin/Component/homepage/Food/Biryani.avif' },
  { name: 'Burger', img: 'src/admin/Component/homepage/Food/burger.avif' },
  { name: 'Cake', img: 'src/admin/Component/homepage/Food/cake.avif' },
  { name: 'Chinese', img: 'src/admin/Component/homepage/Food/Chinese.avif' },
  { name: 'Ice Cream', img: 'src/admin/Component/homepage/Food/chocolate_icecream.avif' },
  { name: 'Chole Bhature', img: 'src/admin/Component/homepage/Food/chole_bhature.avif' },
  { name: 'Dosa', img: 'src/admin/Component/homepage/Food/Dosa.avif' },
  { name: 'Momos', img: 'src/admin/Component/homepage/Food/Momos.avif' },
  { name: 'Noodles', img: 'src/admin/Component/homepage/Food/Noodles.avif' },
  { name: 'North Indian', img: 'src/admin/Component/homepage/Food/northindian.avif' },
  { name: 'Paratha', img: 'src/admin/Component/homepage/Food/Paratha.avif' },
  { name: 'Pasta', img: 'src/admin/Component/homepage/Food/pasta.avif' },
  { name: 'Pav Bhaji', img: 'src/admin/Component/homepage/Food/Pav Bhaji.avif' },
  { name: 'Pizza', img: 'src/admin/Component/homepage/Food/Pizzas.avif' },
  { name: 'Rolls', img: 'src/admin/Component/homepage/Food/Rolls.avif' },
  { name: 'Shawarma', img: 'src/admin/Component/homepage/Food/shawarma.avif' }
];


  return(
<div>
<Slider props={foodCartArray} />
</div>  )
}

export default FoodCategory;