import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './index.css'
export const Quantity = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const increaseValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseValue = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return (
    <div className="plus-minus-div d-inline-flex mb-0">
      <div className="value-button" onClick={decreaseValue}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <input type="number" value={value} readOnly />
      <div className="value-button value-button-2" onClick={increaseValue}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};