'use server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactEmail from '@/emails/contact';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const sendContactEmail = async (formData, logo) => {
  const { name, email, message } = formData;

  try {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: process.env.NEXT_PUBLIC_INFO_EMAIL,
      subject: 'Kontakt',
      html: render(
        ContactEmail({
          name,
          email,
          message,
          baseUrl,
          logo
        })
      )
    });
    return {
      error: null,
      success: true
    };
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
      success: false
    };
  }
};
