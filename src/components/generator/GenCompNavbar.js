import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function GenCompNavbar() {
  let {url } = useRouteMatch();

 

  return (
    <div className="bg-red-700 border-r-2 border-gray-400">
      <ul className="flex flex-col m-5 text-gray-200 font-extrabold">
        <li className="mx-2 my-3">
          <Link to={`${url}/template`}>Template</Link>{" "}
        </li>
        <li className="mx-2 my-3">
          <Link to={`${url}/personal`}>Personal</Link>{" "}
        </li>
        <li className="mx-2 my-3">
          <Link to={`${url}/education`}>Education</Link>{" "}
        </li>
        <li className="mx-2 my-3">
          <Link to={`${url}/work`}>Work</Link>{" "}
        </li>
        <li className="mx-2 my-3">
          <Link to={`${url}/skills`}>Skills</Link>{" "}
        </li>
        <li className="mx-2 my-3">
          <Link to={`${url}/projects`}>Projects</Link>{" "}
        </li>
        <li className="mx-2 my-3">
          <Link to={`${url}/awards`}>Awards</Link>{" "}
        </li>
        <li className="mx-2 my-3">
          <Link to={`${url}/preview`}>Preview</Link>{" "}
        </li>
      </ul>
    </div>
  );
}
export default GenCompNavbar;
