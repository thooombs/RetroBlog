import Post from "../../../../models/post";
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../config/mongodb";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectToDatabase();
  await Post.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Post updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectToDatabase();
  const post = await Post.findOne({ _id: id });
  return NextResponse.json({ post }, { status: 200 });
}


