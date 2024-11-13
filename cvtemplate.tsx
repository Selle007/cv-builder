import React from "react";

const CVPreview = ({ data }) => (
  <div className="cv-preview bg-white w-full">
    {data?.profileImage && (
      <img
        src={data.profileImage}
        alt="Profile"
        className="h-24 w-24 rounded-full"
      />
    )}
    <p>
      <strong>Name:</strong> {data.personalData.name}{" "}
      {data.personalData.surname}
    </p>
    <p>
      <strong>Email:</strong> {data.personalData.email}
    </p>
    <p>
      <strong>Phone:</strong> {data.personalData.phone}
    </p>
    <p>
      <strong>Street:</strong> {data.personalData.street}
    </p>
    <p>
      <strong>Zip Code:</strong> {data.personalData.zipCode}
    </p>
    <p>
      <strong>Location:</strong> {data.personalData.location}
    </p>
    <p>
      <strong>Country:</strong> {data.personalData.country}
    </p>
    <p>
      <strong>Nationality:</strong> {data.personalData.nationality}
    </p>
    <p>
      <strong>Place of Origin:</strong> {data.personalData.placeOfOrigin}
    </p>
    <p>
      <strong>Residence Permit:</strong> {data.personalData.residencePermit}
    </p>
    <p>
      <strong>Marital Status:</strong> {data.personalData.maritalStatus}
    </p>
    <p>
      <strong>Children:</strong> {data.personalData.children}
    </p>
    <p>
      <strong>Birthday:</strong> {data.personalData.birthday}
    </p>
    <p>
      <strong>Place of Birth:</strong> {data.personalData.placeOfBirth}
    </p>
    <p>
      <strong>Driver’s License:</strong> {data.personalData.driversLicense}
    </p>

    {/* Map through each professional experience item */}

    <ul>
      {data?.skills?.map((skill, index) => (
        <li key={index}>
          {skill.skill} <br />
          {skill.level}
        </li>
      ))}
    </ul>
    {data?.professionalExperience?.map((experience, index) => (
      <div key={index}>
        <p>
          <strong>Job Title:</strong> {experience.jobTitle}
        </p>
        <p>
          <strong>Employer:</strong> {experience.employer}
        </p>
        <p>
          <strong>Location:</strong> {experience.location}
        </p>
        <p>
          <strong>Start Date:</strong> {experience.startDate}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {experience.tillToday ? "Till today" : experience.endDate}
        </p>
        <p>
          <strong>Description:</strong> {experience.description}
        </p>
      </div>
    ))}

    {data.training.map((training, index) => (
      <div key={index}>
        <p>
          <strong>Institute:</strong> {training.institute}
        </p>
        <p>
          <strong>Diploma:</strong> {training.diploma}
        </p>
        <p>
          <strong>Location:</strong> {training.location}
        </p>
        <p>
          <strong>Start Date:</strong> {training.startDate}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {training.tillToday ? "Till today" : training.endDate}
        </p>
        <p>
          <strong>Description:</strong> {training.description}
        </p>
      </div>
    ))}
  </div>
);

export default CVPreview;
