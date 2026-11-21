import { NextResponse } from "next/server";

type OrderBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  address?: unknown;
  area?: unknown;
  landmark?: unknown;
  pincode?: unknown;
  state?: unknown;
  country?: unknown;
  quantity?: unknown;
};

export async function POST(request: Request) {
  let body: OrderBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const address = typeof body.address === "string" ? body.address.trim() : "";
  const area = typeof body.area === "string" ? body.area.trim() : "";
  const pincode = typeof body.pincode === "string" ? body.pincode.trim() : "";
  const state = typeof body.state === "string" ? body.state.trim() : "";
  const country = typeof body.country === "string" ? body.country.trim() : "";
  const quantity =
    typeof body.quantity === "number" ? body.quantity : Number(body.quantity);

  const errors: Record<string, string> = {};

  if (!name) {
    errors.name = "Name is required";
  }

  if (!address) {
    errors.address = "Address is required";
  }

  if (!area) {
    errors.area = "Area is required";
  }

  if (!/^\d{6}$/.test(pincode)) {
    errors.pincode = "Enter a valid 6-digit pincode";
  }

  if (!state) {
    errors.state = "State is required";
  }

  if (!country) {
    errors.country = "Country is required";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }

  if (!/^\+\d{1,3}[\s-]?\d{10}$/.test(phone)) {
    errors.phone = "Use a country code and exactly 10 digits";
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    errors.quantity = "Quantity must be between 1 and 10";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(errors, { status: 400 });
  }

  return NextResponse.json({ orderId: crypto.randomUUID() }, { status: 201 });
}
