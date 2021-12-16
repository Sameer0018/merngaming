import React,{useEffect,useState } from 'react'
 //import instance from '../requests/instance';
 import instance from '../requests/instance';

import { useNavigate } from 'react-router-dom';

// import Cookies from 'js-cookie';

import './css/About.css'
// import Profile from '../images1/profile2.png'



const About = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {

            const res = await fetch('http://localhost:5000/About', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }
    useEffect(() => {
        callAboutPage();
     
    }, []);



     
    return (

        <div className="containers">
        <form method="POST" id ="register-form" className="form">         

               <h2 className="title">About Us {userData.name} </h2>
                
                <div className="input-container">
                    <h3>Email {userData.email}</h3>
                    <input type="email" id ="email"
                     name="email" className="box" 
                     placeholder="Email"/>
                    
                    {/* <label for=""></label>
                     */}
                </div>

                <div className="input-container">
                    <h3> Phone {userData.phone} </h3>
                    <input type="number" name="email"
                     className="box" 
                     id="password"
                    
                     placeholder="Your number"/>

                     
                    {/* <label for=""></label>
                 */}
                </div>
                







                <div className="input-container">
                    <h3>work {userData.work} </h3>
                    <input type="text" name="email"
                     className="box"
                     id="password"
                    
                     placeholder="Your work"/>

                     
                    {/* <label for=""></label>
                     */}
                </div>
                



                                            {/* <input type="submit" name="signin" id="signin"
                                            value="Login"
                                            className="btn" />

<Link to="#">Forgot Password</Link> */}

            </form>

            <div className="side">
            <img src="https://wallpapercave.com/w/wp6000674.jpg" alt="good"  />
   
   </div>
   

        </div>








      
    )

}

export default About

