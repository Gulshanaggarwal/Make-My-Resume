import React, { useContext } from "react";
import GenCompHeader from "./GenCompHeader";
import GenCompNavbar from "./GenCompNavbar";
import NestedRoutesIndex from "../NestedRoutes/NestedRoutesIndex";
import { DataContext } from "../Store/Provide";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfIndex from "../PdfComp/PdfIndex";

function GeneratorPage() {
  const [state] = useContext(DataContext);
  const { fullName } = state.details.personal;

  return (
    <div className="grid grid-cols-less_Sm  sm:grid-cols-custom h-screen">
      <GenCompHeader />
      <GenCompNavbar />
      <div className="bg-yellow-200  overflow-y-scroll">
        <NestedRoutesIndex />
      </div>
      <div className="bg-green-500 col-span-2 flex flex-row justify-center">
        <PDFDownloadLink
          document={<PdfIndex data={state.details} />}
          fileName={`${fullName}'s Resume.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <button className="p-2 my-2 bg-black text-white font-extrabold">
                Loading...
              </button>
            ) : (
              <button className="p-2 my-2 bg-black text-white font-extrabold">
                Download Now!
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}
export default GeneratorPage;
