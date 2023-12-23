import React from 'react';
import './ClipboardButton.css';

function ClipboardButton({ message }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    alert('Message copied to clipboard!');
  };

  return (
    <button className="clipboard-button" onClick={copyToClipboard}>
      Copy to Clipboard
    </button>
  );
}

export default ClipboardButton;
