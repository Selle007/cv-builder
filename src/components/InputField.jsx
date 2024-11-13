import React from "react";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  if (type === "textarea") {
    return (
      <div className="flex flex-col items-start justify-start gap-[7px] w-full">
        <label
          htmlFor={placeholder}
          className="text-[#003343] text-[13px] font-semibold  leading-tight"
        >
          {placeholder}
        </label>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full h-[162px] px-4 py-[11px] border border-[#0c356a]/30 justify-start items-center gap-2.5  text-[#003343] text-[15px] font-normal  leading-normal"
        />
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className="flex flex-row items-center justify-start gap-[7px] w-full">
        <input
          type={type}
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className=" px-4 py-[11px] border border-[#0c356a]/30 justify-start items-center gap-2.5  text-[#003343] text-[15px] font-normal  leading-normal"
        />
        <label
          htmlFor={placeholder}
          className="text-[#003343] text-[13px] font-semibold  leading-tight"
        >
          {placeholder}
        </label>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start justify-start gap-[7px] w-full">
      <label
        htmlFor={placeholder}
        className="text-[#003343] text-[13px] font-semibold  leading-tight"
      >
        {placeholder}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full px-4 py-[11px] border border-[#0c356a]/30 justify-start items-center gap-2.5  text-[#003343] text-[15px] font-normal  leading-normal"
      />
    </div>
  );
};

export default InputField;
