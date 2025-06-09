const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  // Configure the email transport (using Gmail as an example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Set this in Netlify environment variables
      pass: process.env.EMAIL_PASS, // Set this in Netlify environment variables
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVING_EMAIL, // Set this in Netlify environment variables
    subject: subject,
    text: `
      From: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};