import { useState } from "react";
const Registration=()=>{
    const{username, setusername}=useState("");
    const{email, setemail}=useState("");
    const{password, setpassword}=useState("");
    const{cpassword, setcpassword}=useState("");
    return(
        <>
        <h1> Registration form </h1><br></br>
        <form>
            <div class="form-container">
            <div>
                    <label>Username :</label><br></br>
                    <input onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder="Enter UserName" ></input>
                    <p2 className={username?"":"error"}>{username?"":"Username Is Required"}</p2><br></br>
                </div><br></br>
                <div>
                    <label>email :</label><br></br>
                    <input onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter email" ></input>
                    <p2 className={email?"":"error"}>{email?"":"email Is Required"}</p2><br></br>
                </div><br></br>
                <div>
                    <label>password :</label><br></br>
                    <input onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder="Enter password" ></input>
                    <p2 className={password?"":"error"}>{password?"":"password Is Required"}</p2><br></br>
                </div><br></br>
                <div>
                    <label>cpassword :</label><br></br>
                    <input onChange={(e)=>{setcpassword(e.target.value)}} type="text" placeholder="Enter cpassword" ></input>
                    <p2 className={cpassword?"":"error"}>{cpassword?"":"cpassword Is Required"}</p2><br></br>
                </div><br></br>
                <button> Submit now</button>
                </div>
                </form>
        </>
    );
}

export default Registration;