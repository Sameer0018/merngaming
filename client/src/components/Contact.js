// import React,{useEffect,useState} from 'react'
// import './css/Contact.css';
// import { useNavigate } from 'react-router-dom';


// const Contact = () => {


  
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({});

//   const usercontact = async () => {
//       try {

//           const res = await fetch('/getdata', {
//               method: "GET",
//               headers: {
//                   Accept: "application/json",
//                   "Content-Type": "application/json",

//               },
//               credentials: "include"
//           });

//           const data = await res.json();
//           console.log(data);
//           setUserData(data);

//           if (!res.status === 200) {
//               const error = new Error(res.error);
//               throw error;
//           }

//       } catch (err) {
//           console.log(err);
//         }
//   }
//   useEffect(() => {
//       usercontact();
   
//   }, []);



//     return (
//     <>
    
// <h2>Responsive Form</h2>

// <div className="container">
//   <form action="/action_page.php">
//     <div className="row">
//       <div className="col-25">
//         <label for="fname">First Name</label>
//       </div>
//       <div className="col-75">
//         <input type="text" id="name" name="firstname" 
//         value={userData.name}
//         placeholder="Your name.."/>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-25">
//         <label for="lname">Your email</label>
//       </div>
//       <div className="col-75">
//         <input type="email" id="email" name="lastname" 
//         value={userData.email}
//         placeholder="Your  email."/>
//       </div>
//     </div>
    

//     <div className="row">
//       <div className="col-25">
//         <label for="lname">Address</label>
//       </div>
//       <div className="col-75">
//         <input type="text" id="work" name="lastname" 
//         value={userData.work}
//         placeholder="Your  work."/>
//       </div>
//     </div>
    

//     <div className="row">
//       <div className="col-25">
//         <label for="lname">Your Phone</label>
//       </div>
//       <div className="col-75">
//         <input type="number" id="lname" name="lastname" 
//         value={userData}
//         placeholder="Your  Phone."/>
//       </div>
//     </div>
    


//     <div className="row">
//       <div className="col-25">
//         <label for="subject">Message</label>
//       </div>
//       <div className="col-75">
//         <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
//       </div>
//     </div>
//     <div className="row">
//       <input type="submit" value="Submit"/>
//     </div>
//   </form>
// </div>

//     </>
//     )
// }

// export default Contact
