import React,{useState} from "react";
import axios from  "axios";

const Products=()=> {
    const [image, setImage] = useState();
    const [formData,setFormData]=useState({
     title: "",
    timeFrame:"",
    subText: "",
    discount: "",
   
        });


const handleImageChange = (e) => {
  const file = e.target.files[0];
  
          setImage(file);
 
};
    const handleChange=(e)=>{
      e.preventDefault();
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));


    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data = new FormData();

     data.append("title", formData.title);
    data.append("timeFrame", formData.timeFrame);
    data.append("subText", formData.subText);
    data.append("discount", formData.discount);
    data.append("image", image); 
   console.log("Image File:",image); 
  console.log("DATA:",data,"Formdata",formData);
        try{
            const response =await axios.post("http://localhost:5000/product/add-product",data,{headers:{"Content-Type":"multipart/form-data"},});
            
            if(response.data.status === 1){
                alert("product added!");
                console.log("FORM DATA:",formData);
                console.log("Data saved:",response.data);

            }
        }catch(err){
            console.error("Error submitting data:",err);

        }
    }

return(

    <div className="max-w-xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product title"
          />
        </div>

<div>
          <label className="block mb-1 font-medium">Image</label>
          <input
            name="image"
            type="file"

            onChange={handleImageChange}
            required
          />
        </div>


        {/* Timeframe */}
        <div>
          <label className="block mb-1 font-medium">Timeframe</label>
          <input
            type="text"
            name="timeFrame"
            value={formData.timeFrame}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Delivery Time (eg. 3-5 Days)"
          />
        </div>

        {/* Sub Text */}
        <div>
          <label className="block mb-1 font-medium">Sub Text</label>
          <input
            type="text"
            name="subText"
            value={formData.subText}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Short description about product"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block mb-1 font-medium">Discount</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="eg. 20%"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-black font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
)



};

export default Products;