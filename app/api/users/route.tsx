import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

//Getting a collection of objects
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
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
