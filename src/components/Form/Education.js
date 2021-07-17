import React, { useState, useContext } from "react";
import { DataContext } from "../Store/Provide";
function Education() {
  const [state, dispatch] = useContext(DataContext);
  const { education } = state.details;

  function reusableDispatchFunction(values) {
    dispatch({
      type: "handleEducation",
      payload: values,
    });
  }

  // function handle change

  function handleChange(event, index) {
    const values = [...education];
    const { name, value } = event.target;

    values[index][name] = value;

    reusableDispatchFunction(values);
  }

  // function handle Add

  function handleAdd() {
    const newData = {
      school_name: "",
      school_city: "",
      degree: "",
      major: "",
      session_start: "",
      session_end: "",
    };
    const values = [...education, newData];

    reusableDispatchFunction(values);
  }

  // function handleRemove

  function handleRemove() {
    if (education.length > 1) {
      const values = [...education];
      values.splice(education.length - 1, 1);
      reusableDispatchFunction(values);
    } else {
      alert("can't remove");
    }
  }

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Education History</h2>
      <form>
        {education.map((ele, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col w-2/3 my-2">
                <label className="my-2 font-medium">School / College</label>
                <input
                  type="text"
                  className="p-2"
                  placeholder="Stanford University"
                  name="school_name"
                  value={ele.school_name}
                  autoFocus
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div className="flex flex-col w-2/3 my-2">
                <label className="my-2 font-medium">City</label>
                <input
                  type="text"
                  className="p-2"
                  placeholder="Newyork"
                  name="school_city"
                  value={ele.school_city}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div className="flex flex-col w-2/3 my-2">
                <label className="my-2 font-medium">Degree</label>
                <input
                  type="text"
                  className="p-2"
                  placeholder="B.tech"
                  name="degree"
                  value={ele.degree}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div className="flex flex-col w-2/3 my-2">
                <label className="my-2 font-medium">Major</label>
                <input
                  type="text"
                  className="p-2"
                  placeholder="Computer Science"
                  name="major"
                  value={ele.major}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div className="flex flex-col w-2/3 my-2">
                <label className="my-2 font-medium">Session Start</label>
                <input
                  type="date"
                  className="p-2"
                  placeholder="Start Date"
                  name="session_start"
                  value={ele.session_start}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div className="flex flex-col w-2/3 my-2">
                <label className="my-2 font-medium">Session End</label>
                <input
                  type="date"
                  className="p-2"
                  placeholder="End Date"
                  name="session_end"
                  value={ele.session_end}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
            </div>
          );
        })}
        <div className="my-4">
          <button
            className="p-2 bg-green-500 font-semibold"
            onClick={handleAdd}
          >
            Add Job
          </button>
          <button
            className="p-2 bg-red-500 mx-4 font-semibold"
            onClick={handleRemove}
          >
            Remove Job
          </button>
        </div>
      </form>
    </div>
  );
}
export default Education;
