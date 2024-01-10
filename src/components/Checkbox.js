import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Checkbox.scss';

export const Checkbox = ({ id, checked, onCheck, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const onCheckUpdate = (id) => {
    console.log(id);
    
    setIsChecked((prev) => !prev)
    onCheck(id);
  }

  return (
    <input
      className="checkbox"
      id={id}
      type="checkbox"
      checked={isChecked}
      onChange={() => onCheckUpdate(id)}
      {...props}
    />
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
}