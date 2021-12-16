import React,{useState} from 'react'
import{useNavigate,Link} from"react-router-dom";

import './css/Login.css';
  import './css/style.css'
const Login = () => {
const navigate =    useNavigate();
    const[email,setEmail] = useState(' ');
    const[password,setPassword] = useState('');

    const loginUser =async(e)=>{
        e.preventDefault();

    const res = await fetch ('/signin', {
        method:"POST",
        headers:{
            "Content-Type" :"application/json"

        },
        body:JSON.stringify({
            email,
            password
        })
    });
const data =res.json();
if(res.status===400 || !data){
    window.alert("Invalid Credentials");

}else{
    window.alert("Login successfully");
    navigate("/");
}
    }
    
    return (
        <>

   {/* <div className="contactinfobox">
                        <h3 className="title">Let's get in touch</h3>
                         */}
{/*                 
                        <div className="info">
                            <div className="information">
                                <p> Dream Hatcher Incubation Center,
                                    Gwalior Smart City Office, Moti Mahal Gwalior - 474007, India</p>
                            </div>
                            <div className="information">
                                <p>dreamhatcher@gwaliorsmartcity.org</p>
                            </div>
                            <div className="information">
                                <p> +91 7512930224, +91 9993555559</p>
                            </div>
                        </div> */}

                        


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
                        
                    {/* </div>
                     */}


                    <div className="containers">
                    <form method="POST" id ="register-form" className="form">         

                           <h2 className="title">Login</h2>
                            
                            <div className="input-container">
                                <input type="email" id ="email"
                                 name="email" className="box" 
                                 value={email}
                                 
                                 onChange={ (e) =>setEmail(e.target.value)}
                                 placeholder="Email"/>
                                
                                {/* <label for=""></label>
                                 */}
                            </div>
                            <div className="input-container">
                                <input type="password" name="email"
                                 className="box"
                                 id="password"
                                 value={password}
                                 
                                onChange={ (e) =>setPassword(e.target.value)}
                                 placeholder="password"/>
                                {/* <label for=""></label>
                                 */}
                            </div>
                            



                                                        <input type="submit" name="signin" id="signin"
                                                        value="Login"
                                                        onClick={loginUser} className="btn" />

<Link to="#">Forgot Password</Link>
                        </form>

                        <div className="side">
                        <img src="https://wallpapercave.com/w/wp6000674.jpg" alt="not attach"  />
               
               </div>

                    </div>






    
    
    </>
    )
}

export default Login
