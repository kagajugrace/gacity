import React,{useState,useEffect} from 'react';
import '../../css/tailwindcss.css';
// import Navbar from './Navbar';
import axios from 'axios';
import undraw from '../../images/undraw.png'
import Nav from './Navbar';


function Signup(){
    const[choosecategory,setChoosecategory]=useState("");
    const[schoolname,setSchoolname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword,setConfirmPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[message,setMessage]=useState("");
    

    const handleForm =(e)=>{
        setLoading(true);
         
        
        e.preventDefault();
        const data={
            "choosecategory":choosecategory,
            "schoolname":schoolname,
            "email":email,
            "password":password,
            "confirmpassword":confirmpassword,
        }
        axios.post("http://127.0.0.1:8000/reg/endpoint/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false)
            setMessage("Account created successful!")
            
        })
        .catch((err)=>{
         console.log(err)
         setLoading(false)
         setMessage("Account created failed!")
        })   
    }
    return(
        <>
        {/* <Navbar/> */}
        <Nav/>

        <div className=" flex flex-wrap bg-gray-200">
        <div  className="w-full md:w-1/6 "></div>
            <div className="w-full md:w-2/6 App-signup ">
           
                <p className="mt-12 text-center text-3xl font-bold text-gray-700"><u>Welcome To Create Account</u></p>
                <div className="p-12  flex justify-center items-center">
                  <img  src={undraw} alt="" />
                  </div>
               
                </div>


            <div className="w-full md:w-3/6">
            <div className="flex flex-wrap mt-4">
               
                <div className="w-full  rounded-lg py-4">
                <div className="bg-green-500">{message}</div>
                <center><hr className="w-64 text green-600"/></center>

                <form onSubmit={handleForm} className="p-12 w-full md:w-5/6">
                
                <div class="w-full mb-0 md:mb-0">
      <label class="block Lowercase tracking-wide text-gray-900 text-xm mb-0" for="grid-state">
        Choose Category
      </label>
      <div class="relative">
        <select name="choosecategory"value={choosecategory} onChange={event=>setChoosecategory(event.target.value)} class="block appearance-none w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option value=""></option>
          <option>Primary</option>
          <option>Secondary</option>
          <option>Nursary</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
                   
                    <label>School Name</label>
                    <input type="text"name="schoolname"value={schoolname} onChange={event=>setSchoolname(event.target.value)} placeholder="Enter your School name" className="w-full rounded-lg border py-2 px-3 "/>
                    <label>Email</label>
                    <input type="text"name="email"value={email} onChange={event=>setEmail(event.target.value)} placeholder="Enter your Email" className="w-full rounded-lg border py-2 px-3"/>
                    <label>Password</label>
                    <input type="password"name="password"value={password} onChange={event=>setPassword(event.target.value)} placeholder="Enter your Password" className="w-full rounded-lg border py-2 px-3"/>
                    <label>Confirm Password</label>
                    <input type="confirmpassword"name="confirmpassword"value={confirmpassword} onChange={event=>setConfirmPassword(event.target.value)} placeholder="Confirm Password" className="w-full rounded-lg border py-2 px-3"/>
                    <button name="" type="submit" className="w-full bg-blue-500 rounded-lg py-3 px-4 mt-4 text-white font-bold">
                    {loading?<span>Please wait...</span>:<span>Create Account</span>}</button>
                    <p class="inline-block align-baseline font-bold text-sm text-black-500 hover:text-blue-800 mt-4">
        You have an Account?</p><a href="#" class="whitespace-no-wrap text-blue leading-6 font-bold text-blue-500 hover:text-blue-900 focus:outline-none focus:text-blue-900 ml-6">
          Sign in</a>
      
                    </form>
                
                </div>

               
                </div>
                </div>

                <div  className="w-full md:w-1/6 "></div>
                </div>
            
               
        </>
    )
}
export default Signup;