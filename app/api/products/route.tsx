import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { error } from "console";

//get products
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "milk ",
      price: 34,
    },
    {
      id: 2,
      name: "rice",
      price: 34,
    },
  ]);
}

//create a product
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  return NextResponse.json(
    {
      id: 10,
      name: body.name,
      price: body.price,
    },
    { status: 201 }
  );
}
