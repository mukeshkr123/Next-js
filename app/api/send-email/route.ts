import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTempalte";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "mkmehta2041@gmail.com",
    to: "mukeshmehta2041@gmail.com",
    subject: "Welcome to Your Website",
    react: <WelcomeTemplate name="Mukesh" />,
  });

  return NextResponse.json({});
}
