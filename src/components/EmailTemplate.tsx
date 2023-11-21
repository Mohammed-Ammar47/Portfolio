import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    <h1>Contact form submission </h1>
    <p>
      From <strong>{fullName}</strong> at {email}
    </p>
    <h2>message:</h2>
    <p>{message}</p>
  </div>
);
