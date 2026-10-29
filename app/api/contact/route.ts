import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, description } = body;

    // 1. Server-side Validation
    if (!name || !email || !company || !service || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // 2. Simulate Email Sending (Development Fallback)
    // TO MAKE THIS LIVE: Install Resend (npm install resend) and add your API key to a .env.local file.
    // Then, uncomment the code below and replace the simulation.
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'thesociallancer@gmail.com', // Your actual email
      subject: `New Project Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nDescription:\n${description}`
    });
    */

    // Simulating a 1-second network delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("--- NEW PROJECT INQUIRY RECEIVED ---");
    console.log(body);
    console.log("------------------------------------");

    return NextResponse.json(
      { message: "Inquiry received successfully" },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}