import React, { useContext } from "react";
import { DataContext } from "../Store/Provide";

function Experience() {
  const [state, dispatch] = useContext(DataContext);
  const {experience}=state.details;


  function reusableDispatchFunction(values) {
    dispatch({
      type: "handleExperience",
      payload: values,
    });
  }

  // function handle change

  function handleChange(event, index) {
    const values = [...experience];
    const { name, value } = event.target;

    values[index][name] = value;

    reusableDispatchFunction(values);

    
  }

  // function handle Add

  function handleAdd() {
    const newData={
      companyName: "",
      jobTitle: "",
      jobLocation: "",
      startDate: "",
      endDate: "",
      jobResponsibility: "",
    }
    const values=[...experience,newData];

    reusableDispatchFunction(values);
  }

  // function handleRemove

  function handleRemove() {
    if (experience.length > 1) {
      const values = [...experience];
      values.splice(experience.length - 1, 1);
      reusableDispatchFunction(values);
    } else {
      alert("Cannot Remove!!");
    }
  }

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Work Experience</h2>
      {experience.map((ele, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Company Name</label>
              <input
                type="text"
                placeholder="Microsoft"
                className="p-2"
                name="companyName"
                value={ele.companyName}
                autoFocus
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Job Title</label>
              <input
                type="text"
                placeholder="Software Engineer"
                name="jobTitle"
                value={ele.jobTitle}
                className="p-2"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Job Location</label>
              <input
                type="text"
                placeholder="Bangalore,India"
                name="jobLocation"
                value={ele.jobLocation}
                className="p-2"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Start Date</label>
              <input
                type="text"
                placeholder="May 2019"
                name="startDate"
                value={ele.startDate}
                className="p-2"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">End Date</label>
              <input
                type="text"
                placeholder="June 2020"
                name="endDate"
                value={ele.endDate}
                className="p-2"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Responsibility</label>
              <textarea
                rows="4"
                cols="5"
                name="jobResponsibility"
                value={ele.jobResponsibility}
                onChange={(event) => handleChange(event, index)}
              ></textarea>
            </div>
          </div>
        );
      })}
      <div className="my-4">
        <button className="p-2 bg-green-500 font-semibold" type="button" onClick={handleAdd}>
          Add Work
        </button>
        <button
          className="p-2 bg-red-500 mx-4 font-semibold"
          type="button"
          onClick={handleRemove}
        >
          Remove Work
        </button>
      </div>
    </div>
  );
}

export default Experience;
