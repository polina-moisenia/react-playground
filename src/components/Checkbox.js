import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Checkbox.scss';

export const Checkbox = ({ id, label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
      <div className="checkbox__content">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
}