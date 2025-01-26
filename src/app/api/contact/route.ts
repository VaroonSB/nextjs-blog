import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const POST = async (req: NextRequest) => {
  const { email, name, message } = await req.json();

  if (!email || !name || !message) {
    return new NextResponse("Please fill in all fields", { status: 400 });
  }
  if (
    typeof email !== "string" ||
    typeof name !== "string" ||
    typeof message !== "string" ||
    name.trim() === "" ||
    message.trim() === "" ||
    email.trim() === ""
  ) {
    return new NextResponse("Invalid input", { status: 400 });
  }
  if (!email.includes("@") || !email.includes(".")) {
    return new NextResponse("Invalid email", { status: 400 });
  }

  let client;
  try {
    client = await MongoClient.connect(
      ""
    );
  } catch (error) {
    console.log(error);
    return new NextResponse("Could not connect to database", { status: 500 });
  }

  const db = client.db();

  try {
    await db.collection("messages").insertOne({ email, name, message });
  } catch (error) {
    console.log(error);
    client.close();
    return new NextResponse("Storing message failed", { status: 500 });
  }
  client.close();
  return new NextResponse("Successfully stored message!", { status: 201 });
};
