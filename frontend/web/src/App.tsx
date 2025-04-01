import axios from "axios";
import { useEffect, useRef, useState } from "react"


function App() {
 
  const emailRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const [data,setdata]=useState("");

  useEffect(()=>{
          
    axios.get("http://localhost:3000/data",{withCredentials:true}).then((resp)=>{
      let arr=resp.data.data;
      setdata(resp.data.data[arr.length-1].email);
      console.log("response ayaya thia",resp.data.data[arr.length-1].email)
    })
  },[])

  const handlesubmit=async()=>{
         
   const resp=await axios.post("http://localhost:3000/signup",{
      email:emailRef.current?.value,
      password:passwordRef.current?.value
    })
    // window.location.reload();

    console.log(resp);
  
  }
 
  return  <div className="h-screen w-full text-black">
          <input ref={emailRef} type="text"  placeholder="Enter email"/>
          <input ref={passwordRef} type="text" placeholder="Enter password" />
          <button onClick={handlesubmit}>Submit</button>
        
        <div className="h-48 w-32 text-black">
          {data}
        </div>
  </div>

}
export default App
