import React, { useState, useContext } from "react";
import { DataContext } from "../Store/Provide";
function Education() {
  const [state, dispatch] = useContext(DataContext);
  console.log("edu", state);

  const [education, setEducation] = useState([
    {
      school_name: "",
      school_city: "",
      degree: "",
      major: "",
      gpa: "",
      session_start: "",
      session_end: "",
    },
  ]);

  function handleEducation(event, index) {
    const values = [...education];
    values[index][event.target.name] = event.target.value;

    dispatch({
      type: "handlleEducation",
      payload: values,
    });
    setEducation(values);
  }
  function handleAdd() {
    dispatch({
      type: "handlleEducation",
      payload: [
        ...education,
        {
          school_name: "",
          school_city: "",
          degree: "",
          major: "",
          gpa: "",
          session_start: "",
          session_end: "",
        },
      ],
    });


    setEducation([
      ...education,
      {
        school_name: "",
        school_city: "",
        degree: "",
        major: "",
        gpa: "",
        session_start: "",
        session_end: "",
      },
    ]);
  }

  function handleRemove(event,index) {
    const values = [...education];
    if (values.length > 1) {
      values.splice(index, 1);
      dispatch({
        type: "handlleEducation",
        payload: values,
      });
      setEducation(values);
    } else {
      alert("cannot delete");
    }
  }
  return (
    <div className="h-full">
      <h2 className="mx-2 my-8">Education History</h2>
      <form>
        {state.details.education.map((ele, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col">
                <label>School / College</label>
                <input
                  type="text"
                  placeholder="Stanford University"
                  name="school_name"
                  value={ele.school_name}
                  onChange={(event) => handleEducation(event, index)}
                />
              </div>
              <div className="flex flex-col">
                <label>City</label>
                <input
                  type="text"
                  placeholder="Newyork"
                  name="school_city"
                  value={ele.school_city}
                  onChange={(event) => handleEducation(event, index)}
                />
              </div>
              <div className="flex flex-col">
                <label>Degree</label>
                <input
                  type="text"
                  placeholder="B.tech"
                  name="degree"
                  value={ele.degree}
                  onChange={(event) => handleEducation(event, index)}
                />
              </div>
              <div className="flex flex-col">
                <label>Major</label>
                <input
                  type="text"
                  placeholder="Computer Science"
                  name="major"
                  value={ele.major}
                  onChange={(event) => handleEducation(event, index)}
                />
              </div>
              <div className="flex flex-col">
                <label>GPA</label>
                <input
                  type="text"
                  placeholder="8.0"
                  name="gpa"
                  value={ele.gpa}
                  onChange={(event) => handleEducation(event, index)}
                />
              </div>
              <div className="flex flex-col">
                <label>Session Start</label>
                <input
                  type="date"
                  placeholder="Start Date"
                  name="session_start"
                  value={ele.session_start}
                  onChange={(event) => handleEducation(event, index)}
                />
              </div>
              <div className="flex flex-col">
                <label>Session End</label>
                <input
                  type="date"
                  placeholder="End Date"
                  name="session_end"
                  value={ele.session_end}
                  onChange={(event) => handleEducation(event, index)}
                />
              </div>
              <div className="flex flex-row justify-around my-2">
                <button
                  type="button"
                  className="bg-green-500 border-2 border-black px-4 py-2 text-white"
                  onClick={handleAdd}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="bg-red-700 border-2 border-black px-4 py-2 text-white"
                  onClick={(event)=>handleRemove(event,index)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
}
export default Education;
