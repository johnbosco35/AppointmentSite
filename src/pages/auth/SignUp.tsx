import React from "react";
import imgs from "../../assets/gooo.jpg"
import "../auth/SignUp.css"
import { Link } from "react-router-dom";

export const SignUp: React.FC = () => {
  return (
    <div className="MainDiv">
      <div className="FormDiv">
        <h1 style={{marginBottom:"30px"}}>Sign Up</h1>
        <form action="">
          <input type="text" placeholder="Full Name" required />
          <input type="email" name="" id="" placeholder="Email" required />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <button className="Btn">SignUp</button>
        </form>
        <div className="line">
          <div className="line1"></div>
          <p>Or</p>
          <div className="line1"></div>
        </div>
        <div className="Google" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src={imgs} alt="Loading..." style={{height:"20px"}}/>
          <p style={{
            color:"black", marginLeft:"10px",fontSize:"19px",fontWeight:"600"
          }}>Google</p>
        </div>


       <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       <p>
          Already have an account?
        </p>
        <Link to={"/log-in"} style={{textDecoration:"none"}}>
        <h2 style={{marginLeft:"8px", color:"blue"}}>Sign in</h2>
        </Link>
       </div>
      </div>
    </div>
  );
};