
import React from "react";
import { useContext } from "react/cjs/react.development";
import { DataContext } from "../Store/Provide";

function Award() {
  const [state, dispatch] = useContext(DataContext);
  const { award } = state.details;

  function reusableDispatchFunction(values) {
    dispatch({
      type: "handleAward",
      payload: values,
    });
  }

  function handleChange(event, index) {
    const { name, value } = event.target;

    const values = [...award];
    values[index][name] = value;

    reusableDispatchFunction(values);
  }

  function handleAdd() {
    const newData = {
      awardName: "",
      awardDescription: "",
      awardIssuer:"",
      awardIssueDate: "",
    };
    const values = [...award, newData];
    reusableDispatchFunction(values);
  }

  function handleRemove() {
    if (award.length > 1) {
      const values = [...award];
      values.splice(award.length - 1, 1);
      reusableDispatchFunction(values);
    } else {
      alert("Cannot Remove!!");
    }
  }

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Awards</h2>
      {award.map((ele, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Award Name</label>
              <input
                type="text"
                name="awardName"
                value={ele.awardName}
                placeholder="Employee of the Year"
                className="p-2"
                autoFocus
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Award Description</label>
              <input
                type="text"
                name="awardDescription"
                value={ele.awardDescription}
                placeholder="Description"
                className="p-2"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Award Issuer</label>
              <input
                type="text"
                name="awardIssuer"
                value={ele.awardIssuer}
                placeholder="Description"
                className="p-2"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Award Issue Date</label>
              <input
                type="text"
                name="awardIssueDate"
                value={ele.awardIssueDate}
                placeholder="July 2021"
                className="p-2"
                onChange={(event) => handleChange(event, index)}
              />
            </div>
          </div>
        );
      })}
      <div className="my-4">
        <button className="p-2 bg-green-500 font-semibold" type="button" onClick={handleAdd}>
          Add Award
        </button>
        <button
          className="p-2 bg-red-500 mx-4 font-semibold"
          type="button"
          onClick={handleRemove}
        >
          Remove Award
        </button>
      </div>
    </div>
  );
}

export default Award;
