// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend("re_ExdhQ5ao_3d5PWGQHrZgWLU4VQTGDYdXr");
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req,res) {
  const {body} = req;
  const {email,subject,message} = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["nadaro@outlook.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>gracias por contactar</p>
          <p>nuevo mensaje enviado:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
