import React from 'react';
import ClipboardButton from './ClipboardButton';
import MessageContent from './MessageContent';
import './Message.css';

function Message({ name, rooms }) {
  return (
    <div className="message">
      <MessageContent name={name} rooms={rooms} />
      <ClipboardButton message={`Hello Dear ${name}, your room number is ${rooms}`} />
    </div>
  );
}

export default Message;
