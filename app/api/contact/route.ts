import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from the environment variables
// Note: Make sure you add RESEND_API_KEY to your .env.local file and Vercel!
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, description, budget, website } = body;

    // Server-side Validation
    if (!name || !email || !company || !service || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      // IMPORTANT: If you haven't verified a custom domain in Resend yet, 
      // you MUST use "onboarding@resend.dev" as the "from" address.
      from: "The Social Lancer <onboarding@resend.dev>", 
      to: "thesociallancer@gmail.com", // Your actual email address
      subject: `New Project Inquiry from ${name} (${company})`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service Required:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Website:</strong> ${website || "Not specified"}</p>
        <br/>
        <h3>Project Description:</h3>
        <p>${description}</p>
      `,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Inquiry sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}