import React, { useRef, useState } from "react";
// import CVPreview from "../../components/CVPreview";
import CVForm from "../../components/CVForm";
import html2pdf from "html2pdf.js";
import { useParams } from "react-router-dom";
import Test1 from "../../templates/Test1";
import Test2 from "../../templates/Test2";

const Builder = () => {
  const { templateName } = useParams();

  const templates = {
    test1: Test1,
    test2: Test2,
  };
  const SelectedTemplate =
    templates[templateName] || (() => <div>Template Not Found</div>);
  const [formData, setFormData] = useState({
    profileImage: null,
    personalData: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      street: "",
      zipCode: "",
      location: "",
      country: "",
      nationality: "",
      placeOfOrigin: "",
      residencePermit: "",
      maritalStatus: "",
      children: "",
      birthday: "",
      placeOfBirth: "",
      driversLicense: "",
    },
    professionalExperience: [],
    training: [],
    skills: [],
    socialLinks: [],
    hobbies: "",
    references: [],
    courses: [],
    freeText: "",
    otherEntries: [],
  });

  const cvPreviewRef = useRef();

  const downloadPDF = () => {
    const element = cvPreviewRef.current;
    const options = {
      margin: [10, 10, 10, 10],
      filename: "cv_preview.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  const deleteSection = (section) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: [],
    }));
  };

  return (
    <div className="flex bg-[#003343] ">
      <div className="flex flex-col gap-[20px] px-[40px] py-[20px] w-full h-screen sticky top-0 overflow-auto">
        <a href="/" className="w-[30px] h-[30px]">
          <div className="w-[30px] h-[30px] bg-[#008cb0] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <circle
                cx="15"
                cy="15"
                r="15"
                transform="rotate(-90 15 15)"
                fill="#008CB0"
              />
              <path
                d="M15.2139 19.7143L10.7139 15.2143M10.7139 15.2143L15.2139 10.7143M10.7139 15.2143L19.7139 15.2143"
                stroke="#F3F5F7"
                strokeWidth="2"
              />
            </svg>
          </div>
        </a>
        <div
          className="w-[800px] max-w-[800px] mx-auto bg-white relative"
          ref={cvPreviewRef}
        >
          <div className="content-section">
            <SelectedTemplate data={formData} />
          </div>
        </div>
      </div>
      <div className="w-[500px] relative h-full bg-white">
        <CVForm
          formData={formData}
          onFormChange={handleFormChange}
          deleteSection={deleteSection}
          downloadPDF={downloadPDF}
        />
      </div>
    </div>
  );
};

export default Builder;
