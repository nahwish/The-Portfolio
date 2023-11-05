import { config } from "dotenv";
config({ path: ".env.local" });

import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey =  process.env.RESEND_API_KEY;

let resend = new Resend(apiKey);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(data) {
  
  let { email, subject, message } = await data.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["nadaro@outlook.com"],
      subject: "este es el subject",
      react: (
        <>
          <h1>{subject}</h1>
          <p>de : { email }</p>
          <p>nuevo mensaje enviado:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error:error.message   });
  }
}
