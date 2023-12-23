import React, { useState } from 'react';
import Form from './Form';
import Message from './Message';
import './Content.css';

function Content() {
  const [formData, setFormData] = useState({ name: '', rooms: '' });

  const handleFormInputChange = (data) => {
    setFormData(data);
  };

  return (
    <div className="content">
      <Form onInputChange={handleFormInputChange} />
      <Message name={formData.name} rooms={formData.rooms} />
    </div>
  );
}

export default Content;
