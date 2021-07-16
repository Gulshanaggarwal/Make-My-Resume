import React, { useState } from "react";

function Skill() {
  const [skill, setSkill] = useState([
    {
      skillName: "",
    },
  ]);

  function handleChange(event,index) {
    const values=[...skill];
    

    values[index][event.target.name]=event.target.value;
    setSkill(values);

    
  }

  function handleAdd() {
    setSkill([...skill,{
      skillName: "",
    }])
  }

  function handleRemove() {
    if(skill.length>1){
       const values=[...skill];
       values.splice(values.length-1,1);
      setSkill(values);
    }
    else{
      alert("can't remove");
    }

  }
  console.log(skill);

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
                onChange={(event)=>handleChange(event,index)}
              />
            </div>
          </div>
        );
      })}
      <div className="my-4">
        <button className="p-2 bg-green-500 font-semibold" onClick={handleAdd}>
          Add Skill
        </button>
        <button
          className="p-2 bg-red-500 mx-4 font-semibold"
          onClick={handleRemove}
        >
          Remove Skill
        </button>
      </div>
    </div>
  );
}

export default Skill;
