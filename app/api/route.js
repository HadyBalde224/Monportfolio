import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configurer le transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou autre (Outlook, SMTP personnalisé)
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Envoyer l'email
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
