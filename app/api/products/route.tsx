import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// Get products
export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching products" },
      { status: 500 }
    );
  }
}

// Create a product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while creating a product" },
      { status: 500 }
    );
  }
}
