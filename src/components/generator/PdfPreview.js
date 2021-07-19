import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'
import { useContext } from 'react/cjs/react.development'
import PdfIndex from '../PdfComp/PdfIndex'
import { DataContext } from '../Store/Provide'


function GenCompPdfPreviewer(){

    const [state,dispatch]=useContext(DataContext);
    return(
        <PDFViewer className="w-1/2 h-full">
            <PdfIndex data={state.details}/>
        </PDFViewer>
    )
}

export default GenCompPdfPreviewer;