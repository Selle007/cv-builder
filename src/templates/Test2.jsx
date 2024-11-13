import React from "react";
import formatDateTime from "../lib/formatDateTime";

const Test2 = ({ data }) => (
  <div className="flex flex-col bg-white w-full px-24 py-16 gap-16 aspect-[2480/3508] ">
    <div className="flex items-center gap-8">
      {data?.profileImage && (
        <img
          src={data.profileImage}
          alt="Profile"
          className="h-24 w-24 rounded-full object-cover"
        />
      )}
      <h1>Test2</h1>
    </div>
    <div className="flex items-start justify-center realtive ">
      <div className="flex flex-col w-1/6 realtive">
        <p>{data.personalData.name}</p>
        <p>{data.personalData.surname}</p>
        <p>{data.personalData.email}</p>
        <p>{data.personalData.phone}</p>
        <p>{data.personalData.street}</p>
        <p>{data.personalData.zipCode}</p>
        <p>{data.personalData.location}</p>
        <p>{data.personalData.country}</p>
      </div>

      <div className="flex flex-col gap-8 w-5/6 pl-8 realtive border-l border-l-gray-400 avoid-page-break">
        <div className="flex flex-col gap-4 avoid-page-break">
          <h2>Personal Details</h2>
          <div className="flex flex-col gap-1">
            {data.personalData.name && <p>{data.personalData.name}</p>}
            {data.personalData.surname && <p>{data.personalData.surname}</p>}
            {data.personalData.email && <p>{data.personalData.email}</p>}
            {data.personalData.phone && <p>{data.personalData.phone}</p>}
            {data.personalData.street && <p>{data.personalData.street}</p>}
            {data.personalData.zipCode && <p>{data.personalData.zipCode}</p>}
            {data.personalData.location && <p>{data.personalData.location}</p>}
            {data.personalData.country && <p>{data.personalData.country}</p>}
          </div>
        </div>
        {data?.professionalExperience.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <h5>Professional Experience</h5>
            <div className="flex flex-col ga-4">
              {data?.professionalExperience?.map((data, index) => (
                <div key={index}>
                  <p>
                    {data?.jobTitle && <strong>{data.jobTitle}</strong>}
                    {data.employer && ", " + data.employer}
                    {data.location && ", " + data.location}
                  </p>
                  <p>
                    {data?.startDate.length > 0 &&
                      formatDateTime(data.startDate)}

                    {data.tillToday
                      ? " - Till today"
                      : data?.endDate
                      ? " - " + formatDateTime(data.endDate)
                      : null}
                  </p>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.training.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <h5>Training</h5>
            <div className="flex flex-col gap-4">
              {" "}
              {data?.training?.map((data, index) => (
                <div key={index}>
                  <p>
                    {data?.institute && <strong>{data.institute}</strong>}
                    {data.diploma && ", " + data.diploma}
                    {data.location && ", " + data.location}
                  </p>
                  <p></p>
                  <p>
                    {data?.startDate.length > 0 &&
                      formatDateTime(data.startDate)}

                    {data.tillToday
                      ? " - Till today"
                      : data?.endDate
                      ? " - " + formatDateTime(data.endDate)
                      : null}
                  </p>
                  <p></p>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.skills?.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <h5>Skills</h5>
            <div className="flex flex-col ga-4">
              {data?.skills?.map((data, index) => (
                <div key={index}>
                
                  <p>
                    {data?.skill && <strong>{data.skill}</strong>}
                    {data.level && ", " + data.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.socialLinks?.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <h5>Socal Links</h5>
            <div className="flex flex-col ga-4">
              {data?.socialLinks?.map((data, index) => (
                <div key={index}>
                  <p>
                    {data?.description && <strong>{data.description}</strong>}
                    {data.link && ", " + data.link}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.hobbies?.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <h5>Hobbies</h5>
            <div className="flex flex-col ga-4">
              <p>{data.hobbies}</p>
            </div>
          </div>
        )}

        {data?.references.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <h5>References</h5>
            <div className="flex flex-col ga-4">
              {data?.references?.map((data, index) => (
                <div key={index}>
                  <p>
                    {data?.name && <strong>{data.name}</strong>}
                    {data.company && ", " + data.company}
                    {data.location && ", " + data.location}
                  </p>
                  <p>{data.phone}</p>
                  <p>{data.email}</p>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.courses.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <h5>Courses</h5>
            <div className="flex flex-col ga-4">
              {data?.courses?.map((data, index) => (
                <div key={index}>
                  <p>
                    {data?.course && <strong>{data.course}</strong>}
                    {data.institute && ", " + data.institute}
                    {data.location && ", " + data.location}
                  </p>
                  <p></p>
                  <p>
                    {data?.startDate.length > 0 &&
                      formatDateTime(data.startDate)}

                    {data.tillToday
                      ? " - Till today"
                      : data?.endDate
                      ? " - " + formatDateTime(data.endDate)
                      : null}
                  </p>
                  <p></p>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.freeText?.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <div className="flex flex-col ga-4">
              <p>{data.freeText}</p>
            </div>
          </div>
        )}

        {data?.otherEntries?.length > 0 && (
          <div className="flex flex-col gap-4 avoid-page-break">
            <div className="flex flex-col ga-4">
              {data?.otherEntries?.map((data, index) => (
                <div key={index}>
                  <p>
                    {data?.title && <strong>{data.title}</strong>}
                    {data.subtitle && ", " + data.subtitle}
                  </p>
                  <p>
                    {data?.startDate.length > 0 &&
                      formatDateTime(data.startDate)}

                    {data.tillToday
                      ? " - Till today"
                      : data?.endDate
                      ? " - " + formatDateTime(data.endDate)
                      : null}
                  </p>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Test2;
