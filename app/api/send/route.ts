import { Resend } from 'resend';

import EmailTemplate from '../../../components/Email/EmailTemplate';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_Hw8Gf3Ve_EFpE8rrgWpy2KFTsSw3AY2zQ');

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: any) {
  try {
    const body = await request.json();
    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'Customer Inquiry <info@dendenclaw.com>',
      to: 'dendendori@gmail.com',
      subject,
      react: EmailTemplate({ email, message }),
      text: message,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
