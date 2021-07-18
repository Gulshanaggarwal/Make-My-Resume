import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import GenCompHeader from "./GenCompHeader";
import GenCompNavbar from "./GenCompNavbar";
import NestedRoutesIndex from "../NestedRoutes/NestedRoutesIndex";
import { DataContext } from "../Store/Provide";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PdfIndex from "../PdfComp/PdfIndex";

function GeneratorPage() {
  let { path, url } = useRouteMatch();
  const [state, dispatch] = useContext(DataContext);
 

  return (
    <div className="grid  grid-cols-custom">
      <GenCompHeader />
      <GenCompNavbar />
      <div className="bg-yellow-200 h-full">
        <NestedRoutesIndex />
      </div>
      
      <div className="col-span-3 bg-green-400">
        <div className="flex m-4">
          <button className="bg-blue-500 text-white p-2" type="submit">
            Submit
          </button>
          <button className="bg-yellow-500 text-white p-2 mx-2" type="submit">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
export default GeneratorPage;
