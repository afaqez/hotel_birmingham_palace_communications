import React, { useState, useEffect } from 'react';
import TextField from './TextField';
import './Form.css';

function Form({ onInputChange }) {
  const [name, setName] = useState('');
  const [rooms, setRooms] = useState('');

  const handleInputChange = (field, value) => {
    if (field === 'name') {
      setName(value);
    } else if (field === 'rooms') {
      setRooms(value);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onInputChange({ name, rooms });
    }, 300);

    return () => clearTimeout(timer);
  }, [name, rooms, onInputChange]);

  return (
    <div className="form">
      <TextField label="Customer Name" value={name} onChange={(e) => handleInputChange('name', e.target.value)} />
      <TextField label="Rooms" value={rooms} onChange={(e) => handleInputChange('rooms', e.target.value)} />
    </div>
  );
}

export default Form;
