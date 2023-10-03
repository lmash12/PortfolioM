import React from "react";
import "../Pdf.css";
import { FaFileDownload } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="pdf-container">
      <h1>Resume.</h1>
      <span>
        <a href="https://drive.google.com/uc?export=download&id=1GNln_v0GGqzzmJJaJ1vWldzRPa8c3nL9">
          <FaFileDownload />
        </a>
      </span>

      <div className="myPdf">
        <iframe
          src="https://drive.google.com/file/d/1GNln_v0GGqzzmJJaJ1vWldzRPa8c3nL9/preview?usp=sharing"
          title="Resume For Lesley Mashaya"
          width="100%"
          height="600px"
        />
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
