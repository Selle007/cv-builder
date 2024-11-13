import React, { useState } from 'react';

const Section = ({ title, items, onAdd, isText, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section ">
      <h3 onClick={toggleSection}>{title} {isOpen ? '▲' : '▼'}</h3>
      {isOpen && (
        <div className="section-content">
          {items.map((item, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Enter ${title}`}
              value={item.value || ''}
              onChange={(e) => onChange ? onChange(e.target.value) : item.value = e.target.value}
            />
          ))}
          {!isText && <button type="button" onClick={onAdd}>Add More</button>}
        </div>
      )}
    </div>
  );
};

export default Section;
