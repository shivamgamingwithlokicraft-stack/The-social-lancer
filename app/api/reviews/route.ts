import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, rating, feedback, permission } = body;

    // Validation
    if (!name || !email || !feedback || !rating) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (permission !== true) {
      return NextResponse.json({ error: "You must grant permission to publish" }, { status: 400 });
    }

    // Simulate database saving (pending approval)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("--- NEW REVIEW SUBMISSION (PENDING APPROVAL) ---");
    console.log(`Name: ${name}`);
    console.log(`Company: ${company}`);
    console.log(`Email: ${email}`);
    console.log(`Rating: ${rating}/5`);
    console.log(`Feedback: ${feedback}`);
    console.log(`Permission Granted: ${permission}`);
    console.log("------------------------------------------------");

    return NextResponse.json({ message: "Review submitted for approval" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}