import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur email:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
