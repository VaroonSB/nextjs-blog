import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const POST = async (req: NextRequest) => {
  const { email, name, message } = await req.json();

  if (!email || !name || !message) {
    return NextResponse.json(
      { message: "Please fill in all fields" },
      { status: 400 }
    );
  }
  if (
    typeof email !== "string" ||
    typeof name !== "string" ||
    typeof message !== "string" ||
    name.trim() === "" ||
    message.trim() === "" ||
    email.trim() === ""
  ) {
    return NextResponse.json({ message: "Invalid input" }, { status: 400 });
  }
  if (!email.includes("@") || !email.includes(".")) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }

  let client;
  try {
    client = await MongoClient.connect(
      ""
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Could not connect to database" },
      { status: 500 }
    );
  }

  const db = client.db();

  try {
    await db.collection("messages").insertOne({ email, name, message });
  } catch (error) {
    console.log(error);
    client.close();
    return NextResponse.json(
      { message: "Storing message failed" },
      { status: 500 }
    );
  }
  client.close();
  return NextResponse.json(
    { message: "Successfully stored message!" },
    { status: 201 }
  );
};
