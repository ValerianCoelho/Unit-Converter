import React, { useState } from 'react';
import './SelectMenu.css';

function SelectMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultOption);
  const [result, setResult] = useState(props.result);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='select-menu-wrapper'>
      <input className="result" defaultValue={result} />
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
    </div>
  );
}

export default SelectMenu;

{/* <SelectMenu
  options={['India', 'USA', 'Canada', 'Australia', 'UK']}
  defaultOption="Select your option"
  onOptionSelect={handleCountrySelect}
/> */}