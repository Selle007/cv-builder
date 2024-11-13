import React from "react";
import image from "../../assets/CTA.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
const SelectCV = () => {
  const navigate = useNavigate();

  const templates = [
    { name: "test1", image },
    { name: "test2", image },

    // Add more templates as needed
  ];

  const handleTemplateSelect = (templateName) => {
    navigate(`/builder/${templateName}`);
  };

  return (
    <div className=" reative flex flex-col justify-center items-center w-full bg-[#003343] h-fit gap-[50px] pt-[60px] pb-[80px]">
      <h6 className="w-[616px] text-center text-[#f3f5f7] text-lg font-medium font-['General Sans'] leading-relaxed">
        Choose Template
      </h6>
      <Swiper
        className="w-full h-full flex flex-row gap-[26px]"
        slidesPerView={4.5}
        spaceBetween={26}
        loop={true}
        centeredSlides={true}
      >
        {templates.map((template, index) => (
          <SwiperSlide
            key={index}
            className="!h-[428px] flex items-center justify-center relative group border border-red-500"
          >
            <img
              src={template.image}
              alt={`Template ${index + 1}`}
              className="relative z-10 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => handleTemplateSelect(template.name)}
                className="z-20 px-[31px] py-4 bg-[#00cf68] justify-start items-center gap-2.5 text-center text-[#003343] text-base font-medium font-['General Sans'] leading-[18px] hidden group-hover:flex transition-all duration-300"
              >
                Select Template / {template.name}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SelectCV;
