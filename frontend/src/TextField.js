import React from 'react';
import './TextField.css';

function TextField({ label, value, onChange }) {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default TextField;
