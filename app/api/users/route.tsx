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

  const userExist = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (userExist)
    return NextResponse.json(
      { error: " Username already exists" },
      { status: 400 }
    );

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
