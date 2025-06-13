const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const { name, email, subject, message } = JSON.parse(event.body);
  const mailtrapApiToken = process.env.MAILTRAP_API_TOKEN;

  if (!mailtrapApiToken) {
    console.error('MAILTRAP_API_TOKEN is not set');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Mailtrap API token is missing' }),
    };
  }

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

    const responseBody = await response.json();
    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } else {
      console.error('Mailtrap API error:', responseBody);
      throw new Error(`Failed to send email: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};