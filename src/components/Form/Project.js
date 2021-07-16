import React from "react";

function Project() {
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Projects</h2>
      <div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Project Name</label>
          <input
            type="text"
            placeholder="Chat App"
            className="p-2"
            autoFocus
          />
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Project Description</label>
          <input
            type="text"
            placeholder="Description"
            className="p-2"
            autoFocus
          />
        </div>
        <div className="my-4">
            <button className="p-2 bg-green-500 font-semibold">Add Project</button>
            <button className="p-2 bg-red-500 mx-4 font-semibold">Remove Project</button>
        </div>
      </div>
    </div>
  );
}
export default Project;
