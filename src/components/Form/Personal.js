import React, { useContext } from "react";
import { DataContext } from "../../Store/Provide";

function Personal() {
  const [state, dispatch] = useContext(DataContext);
  const {personal}=state.details;

  

  function handleChange(event) {
    const { name, value } = event.target;
    const values={...personal};
    values[name]=value;

    dispatch({
      type:"handlePersonal",
      payload:values
    })
    

  }
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Personal Info</h2>
      <form>
        <div>
          <div className="flex flex-col w-2/3 my-2">
            <label className="my-2 font-medium">Full Name</label>
            <input
              type="text"
              className="p-2"
              placeholder="Jane Doe"
              name="fullName"
              value={state.details.personal.fullName}
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 my-2">
            <label className="my-2 font-medium">Email</label>
            <input
              type="email"
              className="p-2"
              placeholder="xyz@gmail.com"
              name="email"
              value={state.details.personal.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 my-2">
            <label className="my-2 font-medium">Phone</label>
            <input
              type="tel"
              className="p-2"
              placeholder="123456789"
              name="phone"
              value={state.details.personal.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 my-2">
            <label className="my-2 font-medium">Address</label>
            <input
              type="text"
              className="p-2"
              placeholder="California US"
              name="address"
              value={state.details.personal.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 my-2">
            <label className="my-2 font-medium">Linkedin</label>
            <input
              type="url"
              className="p-2"
              placeholder="https://Linkedin.com"
              name="linkedinUrl"
              value={state.details.personal.linkedinUrl}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Personal;
