// import { EmailTemplate } from "../../../components/EmailTemplate";

import { json } from "body-parser";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_ExdhQ5ao_3d5PWGQHrZgWLU4VQTGDYdXr");
const fromEmail = process.env.FROM_EMAIL;

export async function POST(data,res) {
  console.log("esto es DATAAA--->", await data.json());

  // let { body } = await req;
  // const message = form.get('message');
  // const {body} = req;
  // const {email,subject,message} = body;
  // console.log("esto es MESSAGE",message)
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["nadaro@outlook.com"],
      subject: "este es el subject",
      react: (
        <>
          {/* <h1>{subject}</h1>
          <p>de : { email }</p> */}
          <p>nuevo mensaje enviado:</p>
          {/* <p>{message}</p> */}
        </>
      ),
    });

    return NextResponse.json(data);

  } catch (error) {
    console.log("ESTE ES EL ERROR ->",error)
    return NextResponse.json({ error:error.message   });
  }
}
