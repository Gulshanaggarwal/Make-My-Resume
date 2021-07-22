import React, { useContext } from "react";
import { DataContext } from "../Store/Provide";

function Skill() {
  const [state, dispatch] = useContext(DataContext);
  const {skill}=state.details;

  function reusableDispatchFunction(values) {
    dispatch({
      type: "handleSkill",
      payload: values,
    });
  }

  function handleChange(event,index) {
    const { name, value } = event.target;

    const values=[...skill];
    values[index][name] = value;
    reusableDispatchFunction(values);
  }

  function handleAdd() {
    const newData = {
      skillName: "",
    };

    const values = [...skill, newData];

    reusableDispatchFunction(values);
  }

  function handleRemove() {

    if (skill.length > 1) {
      const values = [...skill];
      values.splice(skill.length - 1, 1);

      reusableDispatchFunction(values);
    } else {
      alert("Cannot Remove!!");
    }
  }

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Skills</h2>
      {skill.map((ele, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col w-2/3 my-2">
              <label className="my-2 font-medium">Your Skill</label>
              <input
                type="text"
                placeholder="Javascript"
                name="skillName"
                value={ele.skillName}
                className="p-2"
                autoFocus
                onChange={(event) => handleChange(event,index)}
              />
            </div>
          </div>
        );
      })}
      <div className="my-4">
        <button className="p-2 bg-green-500 font-semibold" type="button" onClick={handleAdd}>
          Add Skill
        </button>
        <button
          className="p-2 bg-red-500 mx-4 font-semibold"
          type="button"
          onClick={handleRemove}
        >
          Remove Skill
        </button>
      </div>
    </div>
  );
}

export default Skill;
