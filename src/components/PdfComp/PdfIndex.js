
import React from 'react';
import { Document } from '@react-pdf/renderer';
import Template1 from '../Template/template1/Index';



  function PdfIndex(props){

      return(
          <Document>
              <Template1 size="A4" data={props.data} />
          </Document>
      )
  }

  export default PdfIndex;