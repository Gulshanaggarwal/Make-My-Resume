import React from "react";
import { useContext } from "react/cjs/react.development";
import { DataContext } from "../Store/Provide";

function Project() {

  const [state,dispatch]=useContext(DataContext);

  const { project } = state.details;

  function reusableDispatchFunction(values) {
    dispatch({
      type: "handleProject",
      payload: values,
    });
  }

  function handleChange(event, index) {
    const { name, value } = event.target;

    const values = [...project];
    values[index][name] = value;

    reusableDispatchFunction(values);
  }

  function handleAdd() {
    const newData = {
      awardName: "",
      awardDescription: "",
      awardIssueDate: "",
    };
    const values = [...project, newData];
    reusableDispatchFunction(values);
  }

  function handleRemove() {
    if (project.length > 1) {
      const values = [...project];
      values.splice(project.length - 1, 1);
      reusableDispatchFunction(values);
    } else {
      alert("Invalid Operation");
    }
  }
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Projects</h2>
      {project.map((ele,index)=>{
        return(
          <div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Project Name</label>
          <input type="text" name="projectName" value={ele.projectName} placeholder="Chat App" className="p-2" autoFocus onChange={(event)=>handleChange(event,index)} />
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Project Description</label>
          <input
            type="text"
            name="projectDescription"
            value={ele.projectDescription}
            placeholder="Description"
            className="p-2"
            onChange={(event)=>handleChange(event,index)}

          />
        </div>
      </div>
        )
      })}
      <div className="my-4">
        <button className="p-2 bg-green-500 font-semibold" onClick={handleAdd}>Add Project</button>
        <button className="p-2 bg-red-500 mx-4 font-semibold" onClick={handleRemove}>
          Remove Project
        </button>
      </div>
    </div>
  );
}
export default Project;
