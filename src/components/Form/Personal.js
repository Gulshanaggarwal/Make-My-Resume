import React, { useContext, useState } from "react";
import { DataContext } from "../Store/Provide";

function Personal() {
  const [state, dispatch] = useContext(DataContext);
  console.log(state);

  const [personal, setPersonal] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    personal_website: "",
    linkedin_url: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPersonal({ ...personal, [name]: value });
    dispatch({
      type:'handleChange',
      payload:{ ...personal, [name]: value }
    })

  }
  return (
    <div>
      <h2>Personal Info</h2>
      <form>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              name="fullname"
              value={state.details.personal.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              name="email"
              value={state.details.personal.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="123456789"
              name="phone"
              value={state.details.personal.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input
              type="text"
              placeholder="California US"
              name="address"
              value={state.details.personal.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Website Link</label>
            <input
              type="url"
              placeholder="https://example.com"
              name="personal_website"
              value={state.details.personal.personal_website}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Linkedin</label>
            <input
              type="url"
              placeholder="https://Linkedin.com"
              name="linkedin_url"
              value={state.details.personal.linkedin_url}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Personal;
