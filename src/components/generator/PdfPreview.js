import { PDFViewer } from "@react-pdf/renderer";
import React,{useContext} from "react";
import PdfIndex from "../PdfComp/PdfIndex";
import { DataContext } from "../Store/Provide";

function GenCompPdfPreviewer() {

  const [state]=useContext(DataContext);
  return(
    <PDFViewer className="w-full h-full">
      <PdfIndex data={state.details}/>
    </PDFViewer>
  )
}

export default GenCompPdfPreviewer;
