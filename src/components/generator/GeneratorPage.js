import React from "react";
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

function GeneratorPage() {
  let { path, url } = useRouteMatch();
  return (
    <div className="grid grid-cols-3 grid-cols-custom">
      <GenCompHeader />
      <GenCompNavbar />
      <div className="bg-yellow-200 h-screen overflow-y-scroll">
        <NestedRoutesIndex />
      </div>
      <div className="bg-blue-500">Pdf Preview Scetion</div>
      <div className="col-span-3 bg-green-400">Bottom section</div>
    </div>
  );
}
export default GeneratorPage;
