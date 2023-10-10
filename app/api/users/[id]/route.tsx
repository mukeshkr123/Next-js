import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

//Getting a collection
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

//Updating a collection
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  if (params.id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

// deleting a object
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );

  return NextResponse.json({});
}
