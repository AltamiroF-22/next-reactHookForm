import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, lastname, address, block, number, imageSrc, phoneNumber } =
    body;

  const form = await prisma.form.create({
    data: {
      name,
      lastname,
      address,
      block,
      number,
      imageSrc,
      phoneNumber,
    },
  });

  return NextResponse.json(form);
}

export async function GET(req: Request) {
  const users = await prisma.form.findMany();

  return Response.json(users);
}