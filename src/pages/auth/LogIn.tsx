import React from "react";
import "../auth/LogIn.css"
import imgs from "../../assets/gooo.jpg"
import { Link } from "react-router-dom";

export const LogIn:React.FC = () => {
  return (
    <div className="MainDiv">
      <div className="FormDiv">
        <h1 style={{marginBottom:"30px"}}>Sign In</h1>
        <form action="">
          <input type="email" name="" id="" placeholder="Email" required />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <button className="Btn">Log In</button>
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

        <Link to={"/forgot-password"} style={{textDecoration:"none"}}>
        <span style={{color:"white",}}>Forgot password ?</span>
        </Link>
       <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       <p>
          Don't have an account?
        </p>
        <Link to={"/sign-up"}  style={{textDecoration:"none"}}>
        <h2 style={{marginLeft:"8px", color:"blue"}}>Sign up</h2>
        </Link>
       </div>
      </div>
    </div>
  );
};