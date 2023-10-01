import { NextRequest, NextResponse } from "next/server";

//Getting a collection of objects
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "mukesh",
    },
    {
      id: 2,
      name: "umesh",
    },
  ]);
}

//Create an object
export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  return NextResponse.json(
    {
      id: 1,
      name: body.name,
    },
    { status: 201 }
  );
}
