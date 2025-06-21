import React,{useState} from "react";
import { useNavigate ,Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai"
import { FaGoogle } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";
import axios from 'axios';

function Sign_up(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const nav = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(name,email,password);                                                                              
    try{
      const response =await axios.post("http://localhost:5000/user/register",{name,email,password});

      const {token}=response.data;
      
      localStorage.setItem('autoToken',token);


      alert("Sign UP successful!");
      console.log(response.data);


      nav("/login");
    } catch (error){

      setMessage("Login failed .Please check your credentials.");
      console.log(error);

    }


  };










    return(
     <div className=" size-100  text-[100px] absolute top-10 left-100 ">
        <form className=" w-400 rounded-[2vw] border-10 h-530 " onSubmit={handleSubmit} >
        <p className=" font-semibold text-center flex  justify-between justify-center items-center gap-10 p-10"><GiFoodTruck className="size-60"/>Sign in<GiFoodTruck className="size-60"/></p> 
       

<input type="text"placeholder="Enter Name" value={name} className="rounded-[1vw] border-10 w-380 m-10" onChange={(e) => setName(e.target.value)} required/>
<input type="email" className="rounded-[1vw] border-10 w-380 m-10" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
<input type="password" className=" rounded-[1vw] border-10 w-380 m-10" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/> 
<p className="text-center text-[80px] "><Link>Forgot password?</Link></p>

<div className=""><input className="rounded-[1vw]  bg-blue-500 border-10 w-380 cursor-pointer m-10" type="submit" value="Sign up" ></input></div>
<p className="text-center text-[60px]">have an account?<Link >Login</Link></p>
<div className="flex items-center text-gray-400 ">
  <div className="flex-grow border-t border-gray-300"></div>
  <span className="text-[60px] mx-2">
    OR
  </span>
  <div className="flex-grow border-t border-gray-300"></div>
</div>
<div className="border-10 bg-blue-900 m-10 h-45 rounded-[1vw] " ><Link className="flex flex-row items-center gap-30"><AiFillFacebook className="size-40 " />Continue with Facebook</Link>
</div>
<div className="border-10  m-10 h-45 rounded-[1vw] " ><Link className="flex flex-row items-center gap-30" style={{color: 'black',decoration:'none'}}><FaGoogle  className="size-30 " />Continue with Google</Link>
</div>


</form>
        
  </div>

      
    )
}

export default Sign_up;