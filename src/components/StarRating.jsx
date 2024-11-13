import React from "react";

const StarRating = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className=" px-4 py-[11px] border border-[#0c356a]/30 justify-between items-center inline-flex">
      {stars.map((star) => (
        <svg
          key={star}
          onClick={() => onChange(star)}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 cursor-pointer ${
            star <= value ? "text-[#003343]" : "text-transparent"
          }`}
          width="24"
          s
          height="23"
          viewBox="0 0 24 23"
          fill="currentColor"
        >
          <path
            d="M11.7503 1.91663L14.7116 7.91579L21.3337 8.88371L16.542 13.5508L17.6728 20.1441L11.7503 17.0295L5.82783 20.1441L6.95866 13.5508L2.16699 8.88371L8.78908 7.91579L11.7503 1.91663Z"
            stroke="#003343"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
