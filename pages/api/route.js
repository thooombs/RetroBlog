import { NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb"

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Post.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Post updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const post = await Post.findOne({ _id: id });
  return NextResponse.json({ post }, { status: 200 });
}