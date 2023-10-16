import React from "react";

// ContactAvatar component that displays a contact's avatar image
function ContactAvatar({ image }) {
  return (
    <div>
      {/* Display the contact's avatar image with a specified source (URL) */}
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

export default ContactAvatar; // Export the ContactAvatar component
