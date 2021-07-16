import React from "react";

function Experience() {
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-extrabold text-2xl my-2">Work Experience</h2>
      <div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Company Name</label>
          <input type="text" placeholder="Microsoft" className="p-2" autoFocus/>
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Job Title</label>
          <input type="text" placeholder="Software Engineer" className="p-2" />
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Job Location</label>
          <input type="text" placeholder="Bangalore,India" className="p-2" />
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Job Location</label>
          <input type="text" placeholder="Bangalore,India" className="p-2" />
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Start Date</label>
          <input type="text" placeholder="May 2019" className="p-2"/>
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">End Date</label>
          <input type="text" placeholder="June 2020" className="p-2" />
        </div>
        <div className="flex flex-col w-2/3 my-2">
          <label className="my-2 font-medium">Responsibility</label>
          <input type="text" placeholder="Bangalore,India" className="p-2" />
        </div>
        <div className="my-4">
            <button className="p-2 bg-green-500 font-semibold">Add Job</button>
            <button className="p-2 bg-red-500 mx-4 font-semibold">Remove Job</button>
        </div>
      </div>
    </div>
  );
}

export default Experience;