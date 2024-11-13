import React, { useState } from "react";
import InputField from "./InputField";
import AccordionSection from "./AccordionSection";
import StarRating from "./StarRating";

const CVForm = ({ formData, onFormChange, deleteSection, downloadPDF }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [imagePreview, setImagePreview] = useState(null);
  const handleChange = (section, key, value) => {
    const updatedData = {
      ...formData,
      [section]: {
        ...formData[section],
        [key]: value,
      },
    };
    onFormChange(updatedData);
  };
  const handleFormChange = (field, value) => {
    onFormChange({
      ...formData,
      [field]: value,
    });
  };

  const handleArrayEntryChange = (section, index, field, value) => {
    const updatedEntries = [...formData[section]];
    updatedEntries[index][field] = value;
    onFormChange({ ...formData, [section]: updatedEntries });
  };

  const addArrayEntry = (section, newEntry) => {
    onFormChange({
      ...formData,
      [section]: [...formData[section], newEntry],
    });
  };

  const deleteArrayEntry = (section, index) => {
    const updatedEntries = formData[section].filter((_, i) => i !== index);
    onFormChange({ ...formData, [section]: updatedEntries });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      onFormChange({ ...formData, profileImage: URL.createObjectURL(file) });
    }
  };
  const togglePreview = () => {
    setIsPreviewOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col relative w-[500px]">
      {!isPreviewOpen ? (
        <form
          className="w-[500px] h-full self-stretch flex flex-col gap-[40px] bg-white px-[30px] pt-[20px] pb-[90px]"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}
        >
          {/* Personal Data */}
          <AccordionSection
            title="Personal Data"
            className="flex flex-col gap-[10px]"
          >
            <div className="upload-profile">
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-4xl">+</span>
                  )}
                </div>
                <label
                  htmlFor="file-upload"
                  className="text-green-500 cursor-pointer flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                      stroke="#00CF68"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.1663 6.66667L9.99967 2.5L5.83301 6.66667"
                      stroke="#00CF68"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 2.5V12.5"
                      stroke="#00CF68"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="text-center text-[#00cf68] text-[15px] font-normal leading-normal">
                    Profilbild hochladen
                  </div>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <InputField
              type="text"
              placeholder="Name"
              value={formData.personalData.name}
              onChange={(value) => handleChange("personalData", "name", value)}
            />
            <InputField
              type="text"
              placeholder="Surname"
              value={formData.personalData.surname}
              onChange={(value) =>
                handleChange("personalData", "surname", value)
              }
            />
            <InputField
              type="email"
              placeholder="E-Mail"
              value={formData.personalData.email}
              onChange={(value) => handleChange("personalData", "email", value)}
            />
            <InputField
              type="tel"
              placeholder="Phone"
              value={formData.personalData.phone}
              onChange={(value) => handleChange("personalData", "phone", value)}
            />
            <AccordionSection
              titleSlim={`Show more details`}
              className=" flex flex-col gap-3 w-full"
            >
              <InputField
                type="text"
                placeholder="Street"
                value={formData.personalData.street}
                onChange={(value) =>
                  handleChange("personalData", "street", value)
                }
              />
              <InputField
                type="text"
                placeholder="Zip Code"
                value={formData.personalData.zipCode}
                onChange={(value) =>
                  handleChange("personalData", "zipCode", value)
                }
              />
              <InputField
                type="text"
                placeholder="Location"
                value={formData.personalData.location}
                onChange={(value) =>
                  handleChange("personalData", "location", value)
                }
              />
              <InputField
                type="text"
                placeholder="Country"
                value={formData.personalData.country}
                onChange={(value) =>
                  handleChange("personalData", "country", value)
                }
              />
              <div className="flex gap-[10px] w-full ">
                <InputField
                  type="text"
                  placeholder="Nationality"
                  value={formData.personalData.nationality}
                  onChange={(value) =>
                    handleChange("personalData", "nationality", value)
                  }
                />
                <InputField
                  type="text"
                  placeholder="Place of Origin"
                  value={formData.personalData.placeOfOrigin}
                  onChange={(value) =>
                    handleChange("personalData", "placeOfOrigin", value)
                  }
                />
              </div>
              <InputField
                type="text"
                placeholder="Residence Permit"
                value={formData.personalData.residencePermit}
                onChange={(value) =>
                  handleChange("personalData", "residencePermit", value)
                }
              />
              <div className="flex gap-[10px] w-full ">
                <InputField
                  type="text"
                  placeholder="Marital Status"
                  value={formData.personalData.maritalStatus}
                  onChange={(value) =>
                    handleChange("personalData", "maritalStatus", value)
                  }
                />
                <InputField
                  type="text"
                  placeholder="Children"
                  value={formData.personalData.children}
                  onChange={(value) =>
                    handleChange("personalData", "children", value)
                  }
                />
              </div>
              <div className="flex gap-[10px] w-full ">
                <InputField
                  type="date"
                  placeholder="Birthday"
                  value={formData.personalData.birthday}
                  onChange={(value) =>
                    handleChange("personalData", "birthday", value)
                  }
                />
                <InputField
                  type="text"
                  placeholder="Place of Birth"
                  value={formData.personalData.placeOfBirth}
                  onChange={(value) =>
                    handleChange("personalData", "placeOfBirth", value)
                  }
                />
              </div>

              <InputField
                type="text"
                placeholder="Driver’s License"
                value={formData.personalData.driversLicense}
                onChange={(value) =>
                  handleChange("personalData", "driversLicense", value)
                }
              />
            </AccordionSection>
          </AccordionSection>
          {/* Professional Experience */}
          <AccordionSection
            title="Professional Experience"
            description="Record your full professional entry."
            onDelete={() => deleteSection("professionalExperience")}
          >
            {formData.professionalExperience.map((experience, index) => (
              <AccordionSection
                key={index}
                title={`Job Experience #${index + 1}`}
                className="bg-[#F3F5F7] p-3 flex flex-col gap-[10px]  w-full "
                onDelete={() =>
                  deleteArrayEntry("professionalExperience", index)
                }
              >
                <InputField
                  type="text"
                  placeholder="Job Title"
                  value={experience.jobTitle}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "professionalExperience",
                      index,
                      "jobTitle",
                      value
                    )
                  }
                />
                <InputField
                  type="text"
                  placeholder="Employer"
                  value={experience.employer}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "professionalExperience",
                      index,
                      "employer",
                      value
                    )
                  }
                />
                <div className="flex gap-[10px] w-full ">
                  <InputField
                    type="date"
                    placeholder="Start Date"
                    value={experience.startDate}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "professionalExperience",
                        index,
                        "startDate",
                        value
                      )
                    }
                  />
                  <InputField
                    type="date"
                    placeholder="End Date"
                    value={experience.endDate}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "professionalExperience",
                        index,
                        "endDate",
                        value
                      )
                    }
                    disabled={experience.tillToday}
                  />
                </div>
                <InputField
                  placeholder={"Till Today"}
                  type="checkbox"
                  checked={experience.tillToday}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "professionalExperience",
                      index,
                      "tillToday",
                      value
                    )
                  }
                />
                <InputField
                  type="text"
                  placeholder="Location"
                  value={experience.location}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "professionalExperience",
                      index,
                      "location",
                      value
                    )
                  }
                />
                <InputField
                  type="textarea"
                  className="w-full px-4 py-[11px] border border-[#0c356a]/30 justify-start items-center gap-2.5 text-[#003343] text-[15px] font-normal leading-normal"
                  placeholder="Description"
                  value={experience.description}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "professionalExperience",
                      index,
                      "description",
                      value
                    )
                  }
                />
              </AccordionSection>
            ))}
            <button
              className="mt-3  text-[#003343] text-[15px] font-medium font-['General Sans'] leading-normal"
              type="button"
              onClick={() =>
                addArrayEntry("professionalExperience", {
                  jobTitle: "",
                  employer: "",
                  startDate: "",
                  endDate: "",
                  tillToday: false,
                  location: "",
                  description: "",
                })
              }
            >
              + Add Professional Experience
            </button>
          </AccordionSection>
          {/* Training */}
          <AccordionSection
            title="Training"
            description="Your training underlines your skills."
            onDelete={() => deleteSection("training")}
          >
            {formData.training.map((training, index) => (
              <AccordionSection
                key={index}
                title={`Training #${index + 1}`}
                className="!bg-[#F3F5F7] p-3 flex flex-col gap-3 mt-3 w-full"
                onDelete={() => deleteArrayEntry("training", index)}
              >
                <InputField
                  type="text"
                  placeholder="Institute"
                  value={training.institute}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "training",
                      index,
                      "institute",
                      value
                    )
                  }
                />
                <InputField
                  type="text"
                  placeholder="Diploma"
                  value={training.diploma}
                  onChange={(value) =>
                    handleArrayEntryChange("training", index, "diploma", value)
                  }
                />
                <InputField
                  type="text"
                  placeholder="Location"
                  value={training.location}
                  onChange={(value) =>
                    handleArrayEntryChange("training", index, "location", value)
                  }
                />
                <div className="flex gap-[10px] w-full ">
                  <InputField
                    type="date"
                    placeholder="Start Date"
                    value={training.startDate}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "training",
                        index,
                        "startDate",
                        value
                      )
                    }
                  />
                  <InputField
                    type="date"
                    placeholder="End Date"
                    value={training.endDate}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "training",
                        index,
                        "endDate",
                        value
                      )
                    }
                    disabled={training.tillToday}
                  />
                </div>
                <InputField
                  placeholder={"Till Today"}
                  type="checkbox"
                  checked={training.tillToday}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "training",
                      index,
                      "tillToday",
                      value
                    )
                  }
                />
                <InputField
                  type="textarea"
                  className="w-full px-4 py-[11px] border border-[#0c356a]/30 justify-start items-center gap-2.5 text-[#003343] text-[15px] font-normal leading-normal"
                  placeholder="Description"
                  value={training.description}
                  onChange={(value) =>
                    handleArrayEntryChange(
                      "training",
                      index,
                      "description",
                      value
                    )
                  }
                />
              </AccordionSection>
            ))}
            <button
              className="mt-3 text-[#003343] text-[15px] font-medium font-['General Sans'] leading-normal"
              type="button"
              onClick={() =>
                addArrayEntry("training", {
                  institute: "",
                  diploma: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  tillToday: false,
                  description: "",
                })
              }
            >
              + Add Training
            </button>
          </AccordionSection>
          {/* Skills */}
          {formData.skills.length ? (
            <AccordionSection
              title="Skills"
              onDelete={() => deleteSection("skills")}
            >
              {formData.skills.map((skill, index) => (
                <AccordionSection
                  key={index}
                  title={`Skill #${index + 1}`}
                  className="!bg-[#F3F5F7] p-3 flex flex-col gap-3 mt-3 w-full"
                  onDelete={() => deleteArrayEntry("skills", index)}
                >
                  <InputField
                    type="text"
                    placeholder="Skill"
                    value={skill.skill}
                    onChange={(value) =>
                      handleArrayEntryChange("skills", index, "skill", value)
                    }
                  />
                  <div className="mt-2 w-full flex flex-col gap-[7px]">
                    <label className="text-[#003343] text-[13px] font-semibold  leading-tight">
                      Level
                    </label>
                    <StarRating
                      value={skill.level}
                      onChange={(value) =>
                        handleArrayEntryChange("skills", index, "level", value)
                      }
                    />
                  </div>
                </AccordionSection>
              ))}
              <button
                className="mt-3 text-[#003343] text-[15px] font-medium font-['General Sans'] leading-normal"
                type="button"
                onClick={() =>
                  addArrayEntry("skills", {
                    skill: "",
                    level: 0,
                  })
                }
              >
                + Add Skills
              </button>
            </AccordionSection>
          ) : null}

          {/* Social Links */}
          {formData.socialLinks.length ? (
            <AccordionSection
              title="Social Links"
              onDelete={() => deleteSection("socialLinks")}
            >
              {formData.socialLinks.map((socialLinks, index) => (
                <AccordionSection
                  key={index}
                  title={`Bezeichnung #${index + 1}`}
                  className="!bg-[#F3F5F7] p-3 flex flex-col gap-3 mt-3 w-full"
                  onDelete={() => deleteArrayEntry("socialLinks", index)}
                >
                  <InputField
                    type="text"
                    placeholder="Bezeichnung"
                    value={socialLinks.description}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "socialLinks",
                        index,
                        "description",
                        value
                      )
                    }
                  />
                  <InputField
                    type="text"
                    placeholder="Link"
                    value={socialLinks.link}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "socialLinks",
                        index,
                        "link",
                        value
                      )
                    }
                  />
                </AccordionSection>
              ))}
              <button
                className="mt-3 text-[#003343] text-[15px] font-medium font-['General Sans'] leading-normal"
                type="button"
                onClick={() =>
                  addArrayEntry("socialLinks", {
                    description: "",
                    link: "",
                  })
                }
              >
                + Link hinzufügen
              </button>
            </AccordionSection>
          ) : null}

          {/* Hobbys */}
          {formData.hobbies.length ? (
            <AccordionSection
              title="Hobbies"
              onDelete={() => handleFormChange("hobbies", "")} // Clear the hobbies field
            >
              <div className="!bg-[#F3F5F7] p-3 flex flex-col gap-3 mt-3 w-full">
                <InputField
                  type="textarea"
                  placeholder="Write your hobbies here..."
                  value={formData.hobbies}
                  onChange={(value) => handleFormChange("hobbies", value)}
                />
              </div>
            </AccordionSection>
          ) : null}

          {/* References */}
          {formData.references.length ? (
            <AccordionSection
              title="Referenzen"
              description="Mit Referenzen kann man punkten. Informiere deine Referenz Person vorab, dass du sie im CV angegeben hast. Wenn du noch angestellt bist, kannst du eine Person aus deiner vorherigen Anstellung angeben."
              onDelete={() => deleteSection("references")}
            >
              {formData.references.map((references, index) => (
                <AccordionSection
                  key={index}
                  title={`Name / firma #${index + 1}`}
                  className="!bg-[#F3F5F7] p-3 flex flex-col gap-3 mt-3 w-full"
                  onDelete={() => deleteArrayEntry("references", index)}
                >
                  <InputField
                    type="text"
                    placeholder="Name"
                    value={references.name}
                    onChange={(value) =>
                      handleArrayEntryChange("references", index, "name", value)
                    }
                  />
                  <InputField
                    type="text"
                    placeholder="Firma"
                    value={references.company}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "references",
                        index,
                        "company",
                        value
                      )
                    }
                  />
                  <InputField
                    type="tel"
                    placeholder="Telefon"
                    value={references.phone}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "references",
                        index,
                        "phone",
                        value
                      )
                    }
                  />
                  <InputField
                    type="email"
                    placeholder="E-Mail"
                    value={references.email}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "references",
                        index,
                        "email",
                        value
                      )
                    }
                  />
                  <InputField
                    type="textarea"
                    placeholder="Beschreibung"
                    value={references.description}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "references",
                        index,
                        "description",
                        value
                      )
                    }
                  />
                </AccordionSection>
              ))}
              <button
                className="mt-3 text-[#003343] text-[15px] font-medium font-['General Sans'] leading-normal"
                type="button"
                onClick={() =>
                  addArrayEntry("references", {
                    name: "",
                    company: "",
                    phone: "",
                    email: "",
                    description: "",
                  })
                }
              >
                + Referenz hinzufügen
              </button>
            </AccordionSection>
          ) : null}

          {/* Courses */}
          {formData.courses.length ? (
            <AccordionSection
              title="Kurse"
              onDelete={() => deleteSection("courses")}
            >
              {formData.courses.map((courses, index) => (
                <AccordionSection
                  key={index}
                  title={`Kurs / institut #${index + 1}`}
                  className="!bg-[#F3F5F7] p-3 flex flex-col gap-3 mt-3 w-full"
                  onDelete={() => deleteArrayEntry("courses", index)}
                >
                  <InputField
                    type="text"
                    placeholder="Name"
                    value={courses.course}
                    onChange={(value) =>
                      handleArrayEntryChange("courses", index, "course", value)
                    }
                  />
                  <InputField
                    type="text"
                    placeholder="Firma"
                    value={courses.institute}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "courses",
                        index,
                        "institute",
                        value
                      )
                    }
                  />
                  <InputField
                    type="tel"
                    placeholder="Telefon"
                    value={courses.location}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "courses",
                        index,
                        "location",
                        value
                      )
                    }
                  />
                  <div className="flex w-full gap-[10px]">
                    <InputField
                      type="date"
                      placeholder="Start Date"
                      value={courses.startDate}
                      onChange={(value) =>
                        handleArrayEntryChange(
                          "courses",
                          index,
                          "startDate",
                          value
                        )
                      }
                    />
                    <InputField
                      type="date"
                      placeholder="End Date"
                      value={courses.endDate}
                      onChange={(value) =>
                        handleArrayEntryChange(
                          "courses",
                          index,
                          "endDate",
                          value
                        )
                      }
                      disabled={courses.tillToday}
                    />
                  </div>
                  <InputField
                    placeholder={"Till Today"}
                    type="checkbox"
                    checked={courses.tillToday}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "courses",
                        index,
                        "tillToday",
                        value
                      )
                    }
                  />
                  <InputField
                    type="textarea"
                    placeholder="Beschreibung"
                    value={courses.description}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "courses",
                        index,
                        "description",
                        value
                      )
                    }
                  />
                </AccordionSection>
              ))}
              <button
                className="mt-3 text-[#003343] text-[15px] font-medium font-['General Sans'] leading-normal"
                type="button"
                onClick={() =>
                  addArrayEntry("courses", {
                    course: "",
                    institute: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    tillToday: false,
                    description: "",
                  })
                }
              >
                + Kurs hinzufügen
              </button>
            </AccordionSection>
          ) : null}
          {/* Free Text */}
          {formData.freeText.length ? (
            <AccordionSection
              title="Frei Text"
              onDelete={() => handleFormChange("freeText", "")}
            >
              <div className="!bg-[#F3F5F7] p-3 flex flex-col gap-3 mt-3 w-full">
                <InputField
                  type="textarea"
                  placeholder="Type here..."
                  value={formData.freeText}
                  onChange={(value) => handleFormChange("freeText", value)}
                />
              </div>
            </AccordionSection>
          ) : null}

          {/* Other Entries */}
          {formData.otherEntries.length > 0 ? (
            <AccordionSection
              title="Andere Zeitliche Einträge"
              description="Eigene Zeiteinträge (z.B. Sprachaufenthalte, etc.)"
              onDelete={() => deleteSection("otherEntries")}
            >
              {formData.otherEntries.map((entry, index) => (
                <AccordionSection
                  key={index}
                  title={`Zeitlicher Eintrag #${index + 1}`}
                  className="bg-[#F3F5F7] p-3 flex flex-col gap-[10px]  w-full "
                  onDelete={() => deleteArrayEntry("otherEntries", index)}
                >
                  <InputField
                    type="text"
                    placeholder="Titel"
                    value={entry.title}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "otherEntries",
                        index,
                        "title",
                        value
                      )
                    }
                  />
                  <InputField
                    type="text"
                    placeholder="Untertitel"
                    value={entry.subtitle}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "otherEntries",
                        index,
                        "subtitle",
                        value
                      )
                    }
                  />
                  <div className="flex gap-[10px] w-full ">
                    <InputField
                      type="date"
                      placeholder="Start Date"
                      value={entry.startDate}
                      onChange={(value) =>
                        handleArrayEntryChange(
                          "otherEntries",
                          index,
                          "startDate",
                          value
                        )
                      }
                    />
                    <InputField
                      type="date"
                      placeholder="End Date"
                      value={entry.endDate}
                      onChange={(value) =>
                        handleArrayEntryChange(
                          "otherEntries",
                          index,
                          "endDate",
                          value
                        )
                      }
                      disabled={entry.tillToday}
                    />
                  </div>
                  <InputField
                    placeholder={"Till Today"}
                    type="checkbox"
                    checked={entry.tillToday}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "otherEntries",
                        index,
                        "tillToday",
                        value
                      )
                    }
                  />

                  <InputField
                    type="textarea"
                    className="w-full px-4 py-[11px] border border-[#0c356a]/30 justify-start items-center gap-2.5 text-[#003343] text-[15px] font-normal leading-normal"
                    placeholder="Description"
                    value={entry.description}
                    onChange={(value) =>
                      handleArrayEntryChange(
                        "otherEntries",
                        index,
                        "description",
                        value
                      )
                    }
                  />
                </AccordionSection>
              ))}
              <button
                className="mt-3  text-[#003343] text-[15px] font-medium font-['General Sans'] leading-normal"
                type="button"
                onClick={() =>
                  addArrayEntry("otherEntries", {
                    title: "",
                    subtitle: "",
                    startDate: "",
                    endDate: "",
                    tillToday: false,
                    description: "",
                  })
                }
              >
                + Zeitlichen Eintrag hinzufügen
              </button>
            </AccordionSection>
          ) : null}
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <h2>Further sections</h2>
            <button
              className="w-full text-start flex items-center justify-start gap-[6px] text-[#008cb0] hover:text-[#2a7a85] text-[13px] font-medium font-['General Sans'] leading-tight"
              type="button"
              onClick={() =>
                addArrayEntry("skills", {
                  skill: "",
                  level: 0,
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8667 1.95511C15.0099 1.0983 13.6208 1.0983 12.7639 1.95511L6.25444 8.46459L6.21266 8.50631L6.21265 8.50632C6.01849 8.70006 5.83985 8.87831 5.7079 9.09363C5.59213 9.28255 5.50682 9.48851 5.4551 9.70395C5.39615 9.94951 5.39642 10.2019 5.39672 10.4762L5.39676 10.5352V11.6751C5.39676 12.0893 5.73255 12.4251 6.14676 12.4251H7.28664L7.34568 12.4251C7.61998 12.4254 7.87234 12.4257 8.1179 12.3667C8.33334 12.315 8.5393 12.2297 8.72821 12.1139C8.94354 11.982 9.12179 11.8033 9.31553 11.6092L9.35725 11.5674L15.8667 5.05791C16.7236 4.2011 16.7236 2.81193 15.8667 1.95511ZM13.8246 3.01577C14.0956 2.74474 14.535 2.74474 14.8061 3.01577C15.0771 3.2868 15.0771 3.72622 14.8061 3.99725L8.29659 10.5067C8.03589 10.7674 7.98856 10.8079 7.94447 10.835C7.88976 10.8685 7.83012 10.8932 7.76773 10.9082C7.71744 10.9202 7.65533 10.9251 7.28664 10.9251H6.89676V10.5352C6.89676 10.1665 6.90158 10.1044 6.91366 10.0541C6.92863 9.99173 6.95334 9.93209 6.98686 9.87738C7.01388 9.83328 7.05439 9.78596 7.3151 9.52526L13.8246 3.01577ZM5.32992 2.75651L5.29939 2.75651C4.75352 2.7565 4.29883 2.75649 3.92758 2.78682C3.54066 2.81844 3.1788 2.8867 2.83704 3.06084C2.31166 3.32853 1.88452 3.75567 1.61683 4.28105C1.44269 4.62282 1.37443 4.98468 1.34281 5.37159C1.31248 5.74284 1.31249 6.19752 1.3125 6.7434V6.7434L1.3125 6.77393V12.4919L1.3125 12.5225C1.31249 13.0683 1.31248 13.523 1.34281 13.8943C1.37443 14.2812 1.44269 14.643 1.61683 14.9848C1.88452 15.5102 2.31166 15.9373 2.83703 16.205C3.1788 16.3792 3.54066 16.4474 3.92758 16.479C4.29883 16.5094 4.75351 16.5094 5.29937 16.5093H5.32992H11.0479H11.0785C11.6243 16.5094 12.079 16.5094 12.4503 16.479C12.8372 16.4474 13.199 16.3792 13.5408 16.205C14.0662 15.9373 14.4933 15.5102 14.761 14.9848C14.9352 14.643 15.0034 14.2812 15.035 13.8943C15.0654 13.523 15.0653 13.0684 15.0653 12.5225V12.5224V12.4919V9.63293C15.0653 9.21872 14.7296 8.88293 14.3153 8.88293C13.9011 8.88293 13.5653 9.21872 13.5653 9.63293V12.4919C13.5653 13.0762 13.5648 13.4692 13.54 13.7721C13.516 14.0663 13.4729 14.2088 13.4245 14.3038C13.3006 14.547 13.1029 14.7446 12.8598 14.8685C12.7647 14.917 12.6223 14.96 12.3281 14.984C12.0252 15.0088 11.6321 15.0093 11.0479 15.0093H5.32992C4.7457 15.0093 4.35263 15.0088 4.04972 14.984C3.75557 14.96 3.61309 14.917 3.51802 14.8685C3.27489 14.7446 3.07722 14.547 2.95334 14.3038C2.9049 14.2088 2.86187 14.0663 2.83783 13.7721C2.81308 13.4692 2.8125 13.0762 2.8125 12.4919V6.77393C2.8125 6.18971 2.81308 5.79664 2.83783 5.49374C2.86187 5.19958 2.9049 5.0571 2.95334 4.96203C3.07722 4.7189 3.27489 4.52123 3.51802 4.39735C3.61309 4.34891 3.75557 4.30588 4.04972 4.28184C4.35263 4.25709 4.7457 4.25651 5.32992 4.25651H8.18892C8.60313 4.25651 8.93892 3.92072 8.93892 3.50651C8.93892 3.0923 8.60313 2.75651 8.18892 2.75651H5.32992Z"
                  fill="#008CB0"
                />
              </svg>{" "}
              Kompetenzen / Skills
            </button>
            <button
              className="w-full text-start flex items-center justify-start gap-[6px] text-[#008cb0] hover:text-[#2a7a85] text-[13px] font-medium font-['General Sans'] leading-tight"
              type="button"
              onClick={() =>
                addArrayEntry("socialLinks", {
                  description: "",
                  link: "",
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_1543_1587)">
                  <path
                    d="M7.5 9.74997C7.82209 10.1806 8.23302 10.5369 8.70491 10.7947C9.17681 11.0525 9.69863 11.2058 10.235 11.2442C10.7713 11.2826 11.3097 11.2052 11.8135 11.0173C12.3173 10.8294 12.7748 10.5353 13.155 10.155L15.405 7.90497C16.0881 7.19772 16.4661 6.25046 16.4575 5.26722C16.449 4.28398 16.0546 3.34343 15.3593 2.64815C14.664 1.95287 13.7235 1.55849 12.7403 1.54995C11.757 1.5414 10.8098 1.91938 10.1025 2.60247L8.8125 3.88497"
                    stroke="#008CB0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.4997 8.24992C10.1776 7.81933 9.76664 7.46304 9.29475 7.20522C8.82285 6.9474 8.30103 6.79409 7.76467 6.75567C7.22832 6.71726 6.68997 6.79465 6.18615 6.98259C5.68233 7.17053 5.22483 7.46462 4.84466 7.84492L2.59466 10.0949C1.91157 10.8022 1.53359 11.7494 1.54213 12.7327C1.55068 13.7159 1.94506 14.6565 2.64034 15.3517C3.33562 16.047 4.27617 16.4414 5.25941 16.45C6.24264 16.4585 7.1899 16.0805 7.89716 15.3974L9.17966 14.1149"
                    stroke="#008CB0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1543_1587">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              Webseite & Social Links
            </button>
            <button
              className="w-full text-start flex items-center justify-start gap-[6px] text-[#008cb0] hover:text-[#2a7a85] text-[13px] font-medium font-['General Sans'] leading-tight"
              type="button"
              onClick={() => addArrayEntry("hobbies")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.5C4.85954 1.5 1.5 4.85955 1.5 9C1.5 13.1405 4.85954 16.5 9 16.5C13.1323 16.5 16.5 13.1405 16.5 9C16.5 4.85955 13.1323 1.5 9 1.5ZM13.9539 4.95716C14.8487 6.04718 15.3856 7.43817 15.4019 8.94305C15.1904 8.90241 13.0754 8.47125 10.9441 8.7397C10.8953 8.63395 10.8547 8.52005 10.8059 8.40619C10.6757 8.09709 10.5293 7.77984 10.3829 7.47886C12.7418 6.519 13.8156 5.13612 13.9539 4.95716ZM9 2.60629C10.6269 2.60629 12.1155 3.21638 13.2462 4.21692C13.1323 4.37961 12.1643 5.673 9.88664 6.52711C8.8373 4.59924 7.67409 3.02115 7.49512 2.77711C7.97503 2.66323 8.47941 2.60629 9 2.60629ZM6.27497 3.20824C6.44578 3.43601 7.58461 5.02223 8.65022 6.90942C5.65672 7.70662 3.01302 7.69036 2.72831 7.69036C3.14317 5.70553 4.48536 4.05423 6.27497 3.20824ZM2.59002 9.00816C2.59002 8.94305 2.59002 8.87798 2.59002 8.81292C2.86659 8.82103 5.97397 8.86172 9.17081 7.90186C9.35794 8.25975 9.52875 8.6258 9.69145 8.99184C9.61008 9.01627 9.52059 9.04069 9.43926 9.06506C6.13666 10.1307 4.37961 13.0428 4.23319 13.2869C3.21637 12.1562 2.59002 10.6513 2.59002 9.00816ZM9 15.41C7.5195 15.41 6.15293 14.9056 5.07104 14.0596C5.18492 13.8238 6.48642 11.3183 10.0981 10.0575C10.1144 10.0493 10.1226 10.0493 10.1388 10.0412C11.0417 12.3758 11.4078 14.3362 11.5054 14.8975C10.7326 15.231 9.88664 15.41 9 15.41ZM12.571 14.3118C12.506 13.9214 12.1643 12.0504 11.3265 9.74836C13.3357 9.43111 15.0927 9.95175 15.3124 10.025C15.0358 11.8064 14.0108 13.3438 12.571 14.3118Z"
                  fill="#008CB0"
                />
              </svg>
              Hobbys
            </button>
            <button
              className="w-full text-start flex items-center justify-start gap-[6px] text-[#008cb0] hover:text-[#2a7a85] text-[13px] font-medium font-['General Sans'] leading-tight"
              type="button"
              onClick={() =>
                addArrayEntry("references", {
                  name: "",
                  company: "",
                  phone: "",
                  email: "",
                  description: "",
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75"
                  stroke="#008CB0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
                  stroke="#008CB0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Referenzen
            </button>
            <button
              className="w-full text-start flex items-center justify-start gap-[6px] text-[#008cb0] hover:text-[#2a7a85] text-[13px] font-medium font-['General Sans'] leading-tight"
              type="button"
              onClick={() =>
                addArrayEntry("courses", {
                  course: "",
                  institute: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  tillToday: false,
                  description: "",
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.25 16.75C14.25 17.1642 14.5858 17.5 15 17.5C15.4142 17.5 15.75 17.1642 15.75 16.75H14.25ZM12 12.25V11.5V12.25ZM6 12.25V11.5V12.25ZM3 15.25H2.25H3ZM2.25 16.75C2.25 17.1642 2.58579 17.5 3 17.5C3.41421 17.5 3.75 17.1642 3.75 16.75H2.25ZM9 2L9.27854 1.30364L9 1.19223L8.72146 1.30364L9 2ZM14 4L14.2785 4.69636L16.0194 4L14.2785 3.30364L14 4ZM9 6L8.72146 6.69636L9 6.80777L9.27854 6.69636L9 6ZM4 4L3.72146 3.30364L1.98056 4L3.72146 4.69636L4 4ZM15.75 16.75V15.25H14.25V16.75H15.75ZM15.75 15.25C15.75 14.2554 15.3549 13.3016 14.6516 12.5984L13.591 13.659C14.0129 14.081 14.25 14.6533 14.25 15.25H15.75ZM14.6516 12.5984C13.9484 11.8951 12.9946 11.5 12 11.5V13C12.5967 13 13.169 13.2371 13.591 13.659L14.6516 12.5984ZM12 11.5H6V13H12V11.5ZM6 11.5C5.00544 11.5 4.05161 11.8951 3.34835 12.5984L4.40901 13.659C4.83097 13.2371 5.40326 13 6 13V11.5ZM3.34835 12.5984C2.64509 13.3016 2.25 14.2554 2.25 15.25H3.75C3.75 14.6533 3.98705 14.081 4.40901 13.659L3.34835 12.5984ZM2.25 15.25V16.75H3.75V15.25H2.25ZM11.25 6.25C11.25 7.49264 10.2426 8.5 9 8.5V10C11.0711 10 12.75 8.32107 12.75 6.25H11.25ZM9 8.5C7.75736 8.5 6.75 7.49264 6.75 6.25H5.25C5.25 8.32107 6.92893 10 9 10V8.5ZM8.72146 2.69636L13.7215 4.69636L14.2785 3.30364L9.27854 1.30364L8.72146 2.69636ZM4.27854 4.69636L9.27854 2.69636L8.72146 1.30364L3.72146 3.30364L4.27854 4.69636ZM13.7215 3.30364L11.2215 4.30364L11.7785 5.69636L14.2785 4.69636L13.7215 3.30364ZM11.2215 4.30364L8.72146 5.30364L9.27854 6.69636L11.7785 5.69636L11.2215 4.30364ZM10.8012 5.27232C10.8497 5.3969 10.9139 5.52419 10.9668 5.62706C11.0262 5.74237 11.0757 5.83496 11.1254 5.93666C11.1735 6.03519 11.2078 6.11472 11.2295 6.1792C11.2525 6.24749 11.25 6.26646 11.25 6.25H12.75C12.75 5.86519 12.5789 5.49476 12.4733 5.27843C12.4144 5.15784 12.3471 5.03104 12.3004 4.94034C12.2473 4.83722 12.216 4.77188 12.1988 4.72768L10.8012 5.27232ZM9.27854 5.30364L6.77854 4.30364L6.22146 5.69636L8.72146 6.69636L9.27854 5.30364ZM6.77854 4.30364L4.27854 3.30364L3.72146 4.69636L6.22146 5.69636L6.77854 4.30364ZM6.75 6.25C6.75 6.03781 6.78058 5.95933 6.80839 5.90208C6.82896 5.85971 6.8593 5.80873 6.91468 5.72586C6.95556 5.66468 7.05414 5.52253 7.12696 5.4116L5.87304 4.5884C5.76266 4.75652 5.5733 5.01163 5.4591 5.24677C5.31441 5.54469 5.25 5.85511 5.25 6.25H6.75Z"
                  fill="#008CB0"
                />
              </svg>
              Kurse
            </button>
            <button
              className="w-full text-start flex items-center justify-start gap-[6px] text-[#008cb0] hover:text-[#2a7a85] text-[13px] font-medium font-['General Sans'] leading-tight"
              type="button"
              onClick={() => addArrayEntry("freeText")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M4.5 7.5V3.375C4.5 2.75368 5.00368 2.25 5.625 2.25C6.24632 2.25 6.75 2.75368 6.75 3.375V7.5C6.75 8.74264 5.74264 9.75 4.5 9.75C3.25736 9.75 2.25 8.74264 2.25 7.5V4.5M9.375 1.5H11.4C12.6601 1.5 13.2902 1.5 13.7715 1.74524C14.1948 1.96095 14.539 2.30516 14.7548 2.72852C15 3.20982 15 3.83988 15 5.1V12.9C15 14.1601 15 14.7902 14.7548 15.2715C14.539 15.6948 14.1948 16.039 13.7715 16.2548C13.2902 16.5 12.6601 16.5 11.4 16.5H6.6C5.33988 16.5 4.70982 16.5 4.22852 16.2548C3.80516 16.039 3.46095 15.6948 3.24524 15.2715C3 14.7902 3 14.1601 3 12.9V12.375"
                  stroke="#008CB0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Freitext
            </button>
            <button
              className="w-full text-start flex items-center justify-start gap-[6px] text-[#008cb0] hover:text-[#2a7a85] text-[13px] font-medium font-['General Sans'] leading-tight"
              type="button"
              onClick={() =>
                addArrayEntry("otherEntries", {
                  title: "",
                  subtitle: "",
                  startDate: "",
                  endDate: "",
                  tillToday: false,
                  description: "",
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_1543_1607)">
                  <path
                    d="M5.25 3H3C2.17157 3 1.5 3.67157 1.5 4.5V6.75M5.25 3H12.75M5.25 3V1.5M12.75 3H15C15.8284 3 16.5 3.67157 16.5 4.5V6.75M12.75 3V1.5M1.5 6.75V15C1.5 15.8284 2.17157 16.5 3 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V6.75M1.5 6.75H16.5"
                    stroke="#008CB0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1543_1607">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Andere Zeitliche Einträge
            </button>
          </div>
        </form>
      ) : (
        <div className="w-full h-screen flex flex-col gap-[40px]  bg-white px-[30px] pt-[20px] pb-[90px]">
          <h5 className="w-full text-[#003343] text-2xl font-medium font-['General Sans'] leading-normal">
            Bereit für deine neue Traumstelle? Dein CV ist es!
          </h5>
          <div className="w-full h-[84px] flex-col justify-center items-start gap-2.5 inline-flex">
            <div className="self-stretch text-[#003343] text-lg font-medium font-['General Sans'] leading-relaxed">
              Teile deinen Lebenslauf
            </div>
            <div className="self-stretch text-[#003343] text-[15px] font-normal font-['General Sans'] leading-normal">
              Mit dem Link hat der Empfänger immer den aktuellen Stand.
            </div>
          </div>
          <div
            onClick={togglePreview}
            className="w-full h-[50px] px-[31px] py-4 bg-[#008cb0] justify-center items-center gap-2.5 inline-flex text-center text-[#f3f5f7] text-base font-medium font-['General Sans'] leading-[18px]"
          >
            Edit
          </div>
        </div>
      )}

      <div className="w-[500px] h-[70px] px-5 py-2.5 bg-white border border-[#003343]/20 flex-col justify-center items-center gap-2.5 inline-flex fixed bottom-0 ">
        {!isPreviewOpen ? (
          <div
            onClick={togglePreview}
            className=" relative hover:cursor-pointer self-stretch px-[31px] py-4 bg-[#00cf68] justify-center items-center gap-2.5 inline-flex text-center text-[#003343] text-base font-medium font-['General Sans'] leading-[18px]"
          >
            Preview
          </div>
        ) : (
          <div
            onClick={downloadPDF}
            className=" relative hover:cursor-pointer self-stretch px-[31px] py-4 bg-[#00cf68] justify-center items-center gap-2.5 inline-flex text-center text-[#003343] text-base font-medium font-['General Sans'] leading-[18px]"
          >
            Download
          </div>
        )}
      </div>
    </div>
  );
};

export default CVForm;
