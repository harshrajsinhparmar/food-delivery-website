import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [file, setFile] = useState(null);
  const {id} = useParams();

  // console.log(userDetails);

  useEffect(() => {
    // const id = localStorage.getItem("id");
    const token = localStorage.getItem("userToken");

    // setId({ id: id, token: token });
    setToken(token);
  }, []);
  
  useEffect(() => {
    if (id && token) {
      axios
        .post(
          `http://localhost:5000/user/profile/${id}`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((success) => {
          if (success.data.status === 1) {
              console.log(id);
            setUserDetails(success.data);
          }
        })
        .catch((error) => {
          console.log(id);
          console.log(error);
        });
    } else if(token !== null) {
      axios
        .post(
          `http://localhost:5000/user/profile`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((success) => {
          if (success.data.status === 1) {
             console.log(success.data); 
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token, id]);

  /*const fileSubmit=(e)=>{
    e.preventDefault();
    
    setFile(e.target.img.files[0])
    if(file){
      const formData = new FormData();
      formData.append("image", file);
      axios.post(
          `http://localhost:3000/user/profile-edit/${id}`,
          formData
                )
        .then((success) => {
          console.log(success.data); 
          if (success.data.status === 1) {
            alert("successfull")
          }
            })
        .catch((error) => {
          console.log(error);
                          });
          }
    
                          }*/

  return (
    <div>
      <button>Profile Edit</button>
      {/*<form encType="multipart/form-data" onSubmit={fileSubmit}>
        <input type="file" name="img"/>
        <button>Save</button>
      </form>*/}
      <div>User Name: {userDetails?.user?.name}</div>
      <div>User email: {userDetails?.user?.email}</div>
    </div>
  );
};

export default Profile;