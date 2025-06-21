import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { GiFoodTruck } from "react-icons/gi";
import { AiFillFacebook } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await axios.post("http://localhost:5000/user/login", formData);

      if (response.data.status === 1) {
        localStorage.setItem("userToken", response.data.token);
        localStorage.setItem("id", JSON.stringify(response.data.user));
        alert(response.data.msg);
        navigate("/layout");
      } else {
        setErrorMsg("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="size-100 text-[100px] absolute top-10 left-100">
      <form className="w-400 rounded-[2vw] border-10 h-330" onSubmit={handleSubmit}>
        <p className="font-semibold text-center flex justify-between justify-center items-center gap-10 p-10">
          <GiFoodTruck className="size-60" />
          Log In
          <GiFoodTruck className="size-60" />
        </p>

        {errorMsg && (
          <div className="text-red-600 text-[60px] text-center m-5">{errorMsg}</div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-[1vw] border-10 w-380 m-10"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="rounded-[1vw] border-10 w-380 m-10"
        />

        <p className="text-center text-[80px]">
          <Link>Forgot password?</Link>
        </p>

        <div className="">
          <input
            className="rounded-[1vw] bg-blue-500 border-10 w-380 cursor-pointer m-10"
            type="submit"
            value="Login"
          />
        </div>

        <p className="text-center text-[60px]">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>

        
    
        
      </form>
    </div>
  );
};

export default Login;
