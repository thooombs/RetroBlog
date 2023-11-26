"use client";
import { getPost, Post as BlogPost } from "../../../pages/api/getPost";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  post?: BlogPost;
};

interface PostProps {
  params: {
    slug: string;
  };
}

const Post: React.FC<PostProps> = ({ params }) => {
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
        
      try {
        const post = await getPost(params.slug);
        setSelectedPost(post);
        console.log(post)
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [params.slug]);

  return (
    <div>
      {selectedPost ? (
        <div>
          <p>Post: {router.query.slug}</p>
          <h1>{selectedPost.title}</h1>
          <p>{selectedPost.content}</p>
          <p>{selectedPost.date}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Post;
