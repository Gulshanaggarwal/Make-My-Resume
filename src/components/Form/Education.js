import React, {useContext } from "react";
import { DataContext } from "../../Store/Provide";
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
      schoolName: "",
      schoolCity: "",
      degree: "",
      major: "",
      sessionStart: "",
      sessionEnd: "",
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
      alert("Cannot Remove!!");
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
                  name="schoolName"
                  value={ele.schoolName}
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
                  name="schoolCity"
                  value={ele.schoolCity}
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
                  type="text"
                  className="p-2"
                  placeholder="July 2019"
                  name="sessionStart"
                  value={ele.sessionStart}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>
              <div className="flex flex-col w-2/3 my-2">
                <label className="my-2 font-medium">Session End</label>
                <input
                  type="text"
                  className="p-2"
                  placeholder="April 2021"
                  name="sessionEnd"
                  value={ele.sessionEnd}
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
            type="button"
          >
            Add School
          </button>
          <button
            className="p-2 bg-red-500 mx-4 font-semibold"
            onClick={handleRemove}
            type="button"
          >
            Remove School
          </button>
        </div>
      </form>
    </div>
  );
}
export default Education;
