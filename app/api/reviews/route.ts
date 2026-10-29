import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, rating, feedback, permission } = body;

    if (!name || !email || !feedback || !rating) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (permission !== true) {
      return NextResponse.json({ error: "Permission required" }, { status: 400 });
    }

    // Initialize Resend inside the function to prevent build-time errors
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing from environment variables.");
      return NextResponse.json({ error: "Email service is not configured correctly." }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "The Social Lancer <onboarding@resend.dev>", 
      to: "thesociallancer@gmail.com", 
      subject: `New Review Pending Approval from ${name}`,
      html: `
        <h2>New Client Review</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rating:</strong> ${rating} / 5 Stars</p>
        <br/>
        <h3>Feedback:</h3>
        <p>${feedback}</p>
        <br/>
        <p><em>Permission to publish was granted.</em></p>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ message: "Review submitted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}