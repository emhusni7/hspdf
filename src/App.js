import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
import { sampleBase64pdf } from "./sampleBase64pdf";
//import ExamplePDFViewer from "./components/pdf/";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample.pdf";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h4>All Pages</h4>
      <div className="all-page-container">
        <SinglePagePDFViewer pdf={sampleBase64pdf} />
      </div>
    </div>
  );
}
