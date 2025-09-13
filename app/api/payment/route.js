// app/api/payment/route.js
import { NextResponse } from "next/server";

// In real apps, you’d use a database (MongoDB, Firebase, PostgreSQL, etc.)
let payments = []; 

export async function POST(req) {
  const body = await req.json();

  // save payment info (fake storage for now)
  const newPayment = {
    id: `REF-${Date.now()}`,
    ...body,
    createdAt: new Date().toISOString(),
  };

  payments.push(newPayment);

  return NextResponse.json({ success: true, payment: newPayment });
}

export async function GET() {
  // return all saved payments
  return NextResponse.json(payments);
}
