






//2
// import React from "react";

// const App = () => {
//     let num = 12;
//     let str = "Hello";
//     let bool = true;
//     let n = null;
//     let u = undefined;
//     let arr = [1, 2, "Hello", null, true, 84];
//     let obj = {
//         name: "john",
//         age: 12,
//         city: "Bhopal",
//         isMarried: false,
//     };

//     let names = ["Akarsh", "Arin", "Ankur", "Hitesh", "Harsh", "Harshit"];
//     let namesrender = names.map((n, i) => <li key={i}>{n}</li>);

//     return (
//         <div>
//             <h1>Number: {num}</h1>
//             <h1>String: {str}</h1>
//             <h1>boolean: {bool ? "Yes" : "No"}</h1>
//             <h1>Null: {n == null && "Empty"}</h1>
//             <h1>Undefined: {u == undefined && "No Defined"}</h1>
//             <h1>Array: {arr}</h1>
//             <h1>
//                 Object: {obj.name} | {obj.age} | {obj.city} | {obj.isMarried}
//             </h1>

//             <hr />

//             <ul>{namesrender}</ul>
//         </div>
//     );
// };






//3
// import { useState } from "react";

// const App = () => {
//   const [scores, setScore] = useState([10, 20, 30]);

//   const scorerender = scores.map((score, index) => {
//     return <li key={index}>{score}</li>;
//   });

//   return (
//     <div>
//       <h1>Score</h1>
//       <ul>{scorerender}</ul>
//     </div>
//   );
// };







// 4
// export default App;
// import {useState} from 'react'

// const App = () => {
//   const[profiles, setprofiles]=useState([
//     {name: 'zoro',age:20},
//     {name: 'raju',age:18},
//     {name: 'koko',age:22}
//   ]);

//   let profilerender = profiles.map((profile, index) => ( 
//     < div key={index}>
//     <h1>Name: {profile.name}</h1>
//     <h3>Age: {profile.age}</h3>
//     </div>
//   ));
//   return (
//     <div>
//       {profilerender}
//     </div>
//   )
// }

// export default App





// 5
// import {useState} from 'react'

// function App() {
//   const [fullname, setfullname]= useState("");
//   const [email , setemail] = useState("");

//   const submitHendler = (e) =>{
//     e.preeventDefault();

//   };
//   return (
//     <div>
//         <form onSubmit = {submitHendler}>
//           <input 
//           onChange = {(e) =>setfullname(e.target.value)}
//           value ={fullname}
//           type = "text"
//           placeholder ="Full name"
//           />
//           <br /><br />
//           <input 
//           onChange = {(e) =>setemail(e.target.value)}
//           value = {email}
//           type ="email"
//           placeholder="EmailAddress"
//           />
//           <br /><br />
//           <button type="Submit">Submit</button>
//         </form>
//     </div>
//   );
// };

// export default App







//6
// import {useState} from 'react'
// const [fullname, setfullname]= useState("");
//    const [email , setemail] = useState("");
//    const[gender, setgender] = useState("");

//    const submitHendler = (e) => {
//     e.preeventDefault();
//    }
// function App() {
//   return (
//         <div>
//         <form onSubmit = {submitHendler}>
//           <input 
//           onChange = {(e) =>setfullname(e.target.value)}
//           value ={fullname}
//           type = "text"
//           placeholder ="Full name"
//           />
//           <br /><br />
//           <input 
//           onChange = {(e) =>setemail(e.target.value)}
//           value = {email}
//           type ="email"
//           placeholder="EmailAddress"
//           />
//           <br /><br />
//           <input type="radio"
//             name="gender"
//             checked = {gender === "male" && true}
//             onChange={(e) => e.currentTarget.checked && setgender("male")}
//           />
//           Male <br />

//           <input type="radio"
//          name="gender"
//          checked = {gender === "female" && true}
//          onChange={(e) => e.currentTarget.checked && setgender("female")}
// />
//          Femail <br />
//          <br /> <br />
//          <input type="checkbox"
//          onChange={(e) =>
//             e.target.checked
//             ?setvote("eligible")
//             :setvote("not eligible")
//           }
//          />
//           {/* <button type="Submit">Submit</button> */}
//         </form>
//     </div>
//   );
// };
    

// export default App






// 7
// import React from 'react'
// function App() {
//   return (
//     <div className='bg-red-500 '>
//     hellow world 
//     </div>
//   )
// }
// export default App
// import { useState } from 'react';

// const App = () => {
//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [vote, setVote] = useState("eligible");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log({ fullname, email, gender, vote });
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           onChange={(e) => setFullname(e.target.value)}
//           value={fullname}
//           type="text"
//           placeholder="Full Name"
//         />
//         <br /><br />
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           placeholder="Email Address"
//         />
//         <br /><br />
//         <input
//           type="radio"
//           name="gender"
//           checked={gender === "male"}
//           onChange={() => setGender("male")}
//         />
//         Male <br />
//         <br />
//         <input
//           type="radio"
//           name="gender"
//           checked={gender === "female"}
//           onChange={() => setGender("female")}
//         />
//          Female <br />
//         <br /><br />
//         <input
//           type="checkbox"
//           onChange={(e) => setVote(e.target.checked ? "eligible" : "not eligible")}
//           checked={vote === "eligible"}
//         />
//         Eligible or not Eligible to vote?
//         <br /><br />
//         <button className='block mt-5 px-4 py-2 rounded bg-gray-300'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;













// import { useForm } from "react-hook-form"
// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)

//   console.log(watch("example")) 

//   return (
  
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {}
//       <input defaultValue="test" {...register("example")} />

//       {}
//       <input {...register("exampleRequired", { required: true })} />
//       {}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   )
// }




// import {useForm} from "react-hook-form"

// const App = () => {

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App









// import { useState } from 'react'

// const App = () => {
//   const [marks, setMarks] = useState(80)
//   return (
//     <div>
//       <h1>my marks are {marks}</h1>
//       <button className='bg-gray-400 my-4 mx-5 px-2  rounded '  onClick={()=>
//       setMarks(88)

//       } > update</button>
      
//     </div>
//   )
// }

// export default App







// import {useState} from 'react'

// const App = () => {
//  const [toggler, settoggler]= useState(true)


//   return (
//     <div className='w-screen h-screen bg-gray-300 '>
//       {toggler ?(
//         <form className='w-[40%] mx-auto p-5'>
//           <input type="text"
//           placeholder='Full name'
//           className='border-2 border-gray-400 w-full p-2 rounded-md'
//            />
//         </form>
//       ): ( <form >

//       </form>

//       )

//       }
//       <form >

//       </form>

//     </div>
//   )
// }

// export default App

import { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';
import Users from './Users';

const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);

  return (
    <div className="min-h-screen flex bg-gray-700">
      <div className="w-1/3 p-4">
        <Users users={users} setusers={setusers} />
      </div>
      <div className="w-2/3 flex items-center justify-center">
        {toggler ? (
          <Signin 
            setusers={setusers}
            users={users}
            toggler={toggler} 
            settoggler={settoggler} 
          />
        ) : (
          <Signup  
            users={users}
            setusers={setusers}
            toggler={toggler}
            settoggler={settoggler} 
          />
        )}
      </div>
    </div>
  );
};

export default App; 