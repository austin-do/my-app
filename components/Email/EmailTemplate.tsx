import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email, message,
}) => (
  <div>
    <h3>
      {message}
    </h3>
    <h3>
      reply:
      {' '}
      {email}
    </h3>
  </div>
);

export default EmailTemplate;
