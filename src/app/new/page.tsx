"use client";
// pages/new.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PostForm from "../components/PostForm";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface PostData {
  title: string;
  content: string;
}

export default function NewPost() {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  const handleFormSubmit = async (postData: PostData) => {
    try {
      const SERVER_ENDPOINT =
        process.env.SERVER_ENDPOINT || "http://localhost:3000";

      const response = await fetch(`${SERVER_ENDPOINT}/api/createPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      console.log("API Response:", response);

      if (response.ok) {
        // If the response status is in the range 200-299, consider it a success
        console.log("Post created successfully!");
        router.push("/");
      } else {
        console.error("Error creating a new post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating a new post:", error);
    }
  };
  return (
    <div>
      <h3 className="text-lg">Create a New Post</h3>
      <PostForm onSubmit={handleFormSubmit} />
    </div>
  );
}
