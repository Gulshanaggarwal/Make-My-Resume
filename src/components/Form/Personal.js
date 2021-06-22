import React, { useContext, useState } from "react";
import { DataContext } from "../Store/Provide";

function Personal() {
  const [state,dispatch]=useContext(DataContext);

  const [personal,setPersonal]=useState([{
    fullname:"",
    email:"",
    phone:"",
    address:"",
    personal_website:"",
    linkedin_url:""
  }])

  function handlePersonalChange(event,index){
    const values=[...personal];
    values[index][event.target.name]=event.target.value;
    window.localStorage.setItem('personal',JSON.stringify(values));
    dispatch({
      type:'type_personal',
      payload:values
    })
    
    setPersonal(values);
  }
  return (
    <div>
      <h2>Personal Info</h2>
      <form>
        {personal.map((ele,index)=>{
          return(
            <div key={index}className="flex flex-col">
          <div className="flex flex-col">
            <label>Full Name</label>
            <input type="text" placeholder="Jane Doe" name="fullname" value={ele.fullname} onChange={(event)=>handlePersonalChange(event,index)} />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input type="email" placeholder="xyz@gmail.com" name="email" value={ele.email} onChange={(event)=>handlePersonalChange(event,index)} />
          </div>
          <div className="flex flex-col">
            <label>Phone</label>
            <input type="tel" placeholder="123456789" name="phone" value={ele.phone} onChange={(event)=>handlePersonalChange(event,index)}/>
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input type="text" placeholder="California US" name="address" value={ele.address} onChange={(event)=>handlePersonalChange(event,index)}/>
          </div>
          <div className="flex flex-col">
            <label>Website Link</label>
            <input type="url" placeholder="https://example.com" name="personal_website" value={ele.personal_website} onChange={(event)=>handlePersonalChange(event,index)} />
          </div>
          <div className="flex flex-col">
            <label>Linkedin</label>
            <input type="url" placeholder="https://Linkedin.com" name="linkedin_url" value={ele.linkedin_url} onChange={(event)=>handlePersonalChange(event,index)}/>
          </div>
        </div>
          )
        })}
      </form>
    </div>
  );
}
export default Personal;
