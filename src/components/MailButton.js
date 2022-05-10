import React from "react";
import { Link } from "react-router-dom";
import "./MailButton.css";

export const MailButton = ({ mailto, label }) => {
  return (
    <Link
      className="footer-link"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

// export default MailButton;
