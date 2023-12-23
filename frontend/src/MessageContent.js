import React from 'react';
import './MessageContent.css';

function MessageContent({ name, rooms }) {
  return (
    <div className="message-content">
      <p>
        
        Dear {name},

              Thank you for choosing Hotel Birmingham Palace for your upcoming stay. We are pleased to confirm your reservation for the date - and - January.
              <br></br>
              <br></br>
              <b>Booking Details:</b>
              <br></br>
              Room Number: {rooms}
              <br></br>
              Check-in Date: -
              <br></br>
              Check-out Date: -
              <br></br>
              <br></br>
              <b>Advance Payment:</b>
              <br></br>
              <br></br>
              A payment of Rs. 0 has been received in advance to secure your reservation.
              <br></br>
              <br></br>
              We look forward to providing you with a comfortable and enjoyable experience during your stay. Our team is dedicated to ensuring your time with us is memorable.
              <br></br>
              <br></br>
              Should you have any special requests or need further assistance, feel free to reach out.
              <br></br>
              <br></br>
              Thank you once again for choosing Hotel Birmingham Palace. We are eagerly anticipating your arrival.
              <br></br>
              <br></br>
              Warm regards,
              <br></br>
              HBP  </p>
    </div>
  );
}

export default MessageContent;
