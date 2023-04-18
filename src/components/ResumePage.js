import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "./img/Resume.pdf";
import "../Pdf.css";
import { FaFileDownload } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="pdf-container">
      <h1>Resume</h1>
      <span>
        <a
          href="https://docs.google.com/document/d/1EqEk8tDa23OssEb_LXN1SbHnUkL13GBfF9bAOrbCkho/export?format=pdf"
          download
        >
          <FaFileDownload />
        </a>
      </span>

      <div className="myPdf">
        <Document file={resume} className="pdf-viewer">
          <Page pageNumber={1} />
          <Page pageNumber={2} />
        </Document>
      </div>
      <p>
        Thanks for taking the time to review my resume! Please note that it may
        not be up to date because I'm constantly learning and growing. So if you
        have any questions or just want to chat about the latest cat memes, feel
        free to get in touch!
      </p>
    </div>
  );
};

export default ResumePage;
