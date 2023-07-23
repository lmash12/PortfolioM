import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "./img/Resume.pdf";
import "../Pdf.css";
import { FaFileDownload } from "react-icons/fa";

const ResumePage = () => {
  console.log(resume);
  return (
    <div className="pdf-container">
      <h1>Resume.</h1>
      <span>
        <a href="https://drive.google.com/uc?export=download&id=1zvx1BXylttfObJDZ0JejOLaHUNVqMOQ4">
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
        Thank you for checking out my resume! Please keep in mind that resumes,
        like milk, have an expiration date. But don't worry, I'm always ready to
        update it and provide you with the latest scoop on my skills and
        experience. Feel free to reach out for any clarifications or just to
        chat over a cup of coffee! Cheers!
      </p>
    </div>
  );
};

export default ResumePage;
