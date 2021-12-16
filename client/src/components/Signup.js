 import React, {useState} from 'react';
 import './css/Signu.css';
 import{useNavigate}from "react-router-dom";
import './css/style.css';
 const Signup = () => {
const navigate = useNavigate();
const [user,setUser] = useState({
name:"", email:"", phone:"", work: "", password:"", cpassword:""

});

let name,value;

const handleInputs = (d) => {
    console.log(d);
    name = d.target.name;
    value = d.target.value;
    
    setUser({...user, [name]:value});
    
}

const PostData = async (e) => {
    e.preventDefault();

    const{name, email, phone, work, password, cpassword} =user; 


const res =  await fetch("/register",{
    method:"POST",
    headers:{
        "Content-Type" :"application/json"
    },
    body:JSON.stringify({
        
        name, email, phone, work, password, cpassword

    
    })
});
const data = await res.json();
if(data.status === 422 || !data){
    window.alert("Invalid registration");
    console.log("Invalid registration");
}else{
    window.alert(" Registration Successful ");
    console.log("Registration Successful");
    navigate("/login");
}
}


     return (
         <>

          










                        {/* <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons">
                                <a href="#">
                                
                                    <FacebookOutlinedIcon  />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"><TwitterIcon/></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"><InstagramIcon/></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"><LinkedInIcon/></i>
                                </a>
                            </div>
                        </div> */}


                    <div className="containers">
                        <form method="POST" id ="register-form" className="form">
    
                            <h2 >Register</h2>
                            <div className="input-container">
                                <input type="text" 
                                name="name" className="box"
                                id="name"
                                value={user.name}
                                onChange={handleInputs}
                                 
                                placeholder="Your name"
                                  />
                                {/* <label for=""></label>
                                 */}

                            
                            </div>


                            <div className="input-container">
                                <input type="email" name="email" className="box"
                                id="email"
                                value={user.email}
                                onChange={handleInputs} placeholder="Your email "/>
                                {/* <label for=""></label>
                                 */}

                            </div>
                            
                            <div className="input-container">
                                <input type="number" name="phone" className="box"
                                id="phone"
                                value={user.phone}
                                onChange={handleInputs} placeholder="phone" />
                                {/* <label for=""></label>
                                 */}
                            </div>
                            

                            <div className="input-container">
                                <input type="text" name="work" className="box"
                                id="work"
                                value={user.work}
                                onChange={handleInputs} placeholder="Your work" />
                                {/* <label for=""></label>
                                 */}
                            </div>








                            <div className="input-container">
                                <input type="password" name="password" className="box"
                                id="password"
                                value={user.password}
                                onChange={handleInputs} placeholder="password" />
                                {/* <label for=""></label>
                                 */}
                            </div>
                            




                            
                            
                            <div className="input-container">
                                <input type="password" name="cpassword" className="box"
                                id="cpassword"
                                value={user.cpassword}
                                onChange={handleInputs} placeholder="cpassword" />
                                {/* <label for=""></label>
                                 */}
                            </div>
                            <input type="submit"  name="signup" id ="signup" value="register"  style={{padding: "12px 30px" 
   ,width: "40%",marginTop: "40px"
   ,backgroundColor: "black"
   ,color: "white"
   ,fontWeight: "bold"
   ,border:'none'
   ,outline: "none"
   ,borderRadius: "20px"

   ,cursor:'pointer'
                            }}   
                                 onClick={PostData} className="btn" />
                        
                        </form>
                                 <div className="side">
                        <img src="https://wallpapercave.com/w/wp6000674.jpg" alt="delte"  />
               
               </div>
               
                    </div>


            
         </>
     )
 }
 
 export default Signup
 



 