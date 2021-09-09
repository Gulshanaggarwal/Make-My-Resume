import React from "react";
import DefaultTemplate from "../../Images/Template.png";

function TemplateSelect() {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="font-extrabold text-2xl my-2">Choose A Template</h1>
      <div className="grid grid-cols-3">
        <div className="h-template">
          <div>
            <img className="w-full h-template rounded-sm border-black border-2" src={DefaultTemplate} alt="Default_template"/>
          </div>
          <button className="text-center text-white font-bold bg-green-500 w-full my-2 rounded-sm hover:bg-green-600 border-black border-2">Default</button>
        </div>
      </div>
    </div>
  );
}
export default TemplateSelect;
