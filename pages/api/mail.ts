// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

mail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { name, email, subject, message } = req.body;

  const content = `
        Name: ${name}\r\n
        Email: ${email}\r\n
        Subject: ${subject}\r\n
        Message: ${message}

    `;

  const data = {
    to: 'bigguy@bigguyautobody.com',
    from: 'bigguy@bigguyautobody.com',
    subject: `${subject}`,
    text: content,
    html: content.replace(/\r\n/g, '<br />'),
  };

  try {
    await mail.send(data);
    res.status(200).json({ status: 'success' });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ status: 'error' });
  }
}
