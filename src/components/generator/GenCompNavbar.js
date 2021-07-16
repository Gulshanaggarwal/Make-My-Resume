import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfIndex from "../PdfComp/PdfIndex";
import { DataContext } from "../Store/Provide";
function GenCompNavbar() {
  let { path, url } = useRouteMatch();
  const [state,dispatch]=useContext(DataContext);

  return (
    <div className="bg-red-700 border-r-2 border-gray-400">
      <ul className="flex flex-col m-5">
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
      <PDFDownloadLink document={<PdfIndex data={state.details}/>} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}
export default GenCompNavbar;
