import React, { useState } from 'react';
import '../SelectMenu.css';

function SelectMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultOption);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
    props.onOptionSelect(option);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`select-menu ${isOpen ? 'open' : ''}`}> 
      <div className="select-btn" onClick={toggleMenu}>
        <span className="sBtn-text">{selectedOption}</span>
      </div>

      {isOpen && (
        <ul className="options">
          {props.options.map((option) => (
            <li key={option} className="option" onClick={() => handleOptionClick(option)}>
              <span className="option-text">{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectMenu;