import React, { useState } from "react";

const AccordionSection = ({
  className,
  title,
  children,
  onDelete,
  description,
  titleSlim,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${className ? className : "accordion-section   "} `}>
      <div className="flex flex-col justify-start items-start cursor-pointer">
        <div className="flex justify-between items-center w-full">
          {title ? (
            <h2 onClick={toggleAccordion} className="pr-[8px]">
              {title}
            </h2>
          ) : null}
          {titleSlim ? (
            <h2
              onClick={toggleAccordion}
              className="pr-[8px] font-medium flex items-start justify-start "
            >
              {titleSlim}
            </h2>
          ) : null}
          <div className={`controls flex items-center gap-3  `}>
            {onDelete && (
              <svg
                onClick={onDelete}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#003343"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8337 5.00008V16.6667C15.8337 17.1088 15.6581 17.5327 15.3455 17.8453C15.0329 18.1578 14.609 18.3334 14.167 18.3334H5.83366C5.39163 18.3334 4.96771 18.1578 4.65515 17.8453C4.34259 17.5327 4.16699 17.1088 4.16699 16.6667V5.00008M6.66699 5.00008V3.33341C6.66699 2.89139 6.84259 2.46746 7.15515 2.1549C7.46771 1.84234 7.89163 1.66675 8.33366 1.66675H11.667C12.109 1.66675 12.5329 1.84234 12.8455 2.1549C13.1581 2.46746 13.3337 2.89139 13.3337 3.33341V5.00008"
                  stroke="#003343"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.33301 9.16675V14.1667"
                  stroke="#003343"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.667 9.16675V14.1667"
                  stroke="#003343"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}

            {isExpanded ? (
              <svg
                className="rotate-180"
                onClick={toggleAccordion}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <path d="M17 1L9 9L1 1" stroke="#003343" stroke-width="1.5" />
              </svg>
            ) : (
              <svg
                onClick={toggleAccordion}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <path d="M17 1L9 9L1 1" stroke="#003343" stroke-width="1.5" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-3">
          {description && <p>{description}</p>}
          <div className="flex flex-col gap-3 items-start justify-start">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
