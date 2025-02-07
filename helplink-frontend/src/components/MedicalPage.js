import React from "react";
import "./MedicalPage.css"; // Import custom CSS
import medicalImage from "../images/medical-image.png"; // Replace with your image file

const MedicalPage = () => {
  return (
    <div className="container-fluid bg-blue d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <img src={medicalImage} alt="Medical Emergency" className="center-image" />
        <h2 className="text-white mt-3">Bridging the Gap in Medical Emergencies</h2>
      </div>
    </div>
  );
};

export default MedicalPage;
