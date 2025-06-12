const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, subject, message } = JSON.parse(event.body);
  const mailtrapApiToken = process.env.MAILTRAP_API_TOKEN; // Set in Netlify env vars

  try {
    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mailtrapApiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: 'contact@camerons-airandhvac.com', name: name },
        to: [{ email: 'bowdenshvac@gmail.com' }],
        subject: subject,
        text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};