import React, { useState } from 'react';
import './SelectMenu.css';

function SelectMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultOption);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
    props.handleOptionChange(option);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='select-menu-wrapper'>
      <input className="result" value={props.result} onChange={props.handleInputChange}/>
      <div className={`select-menu ${isOpen ? 'open' : ''}`}> 
        <div className="select-btn" onClick={toggleMenu}>{selectedOption}</div>

        <ul className="options">
          {props.options.map((option) => (
            <li key={option} className="option" onClick={() => handleOptionClick(option)}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectMenu;