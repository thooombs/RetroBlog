
'use client'
// pages/new.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PostForm from '../components/PostForm';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface PostData {
  title: string;
  content: string;
}

export default function NewPost() {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
        redirect('/api/auth/signin?callbackUrl=/client')
    }
})








  const handleFormSubmit = async (postData: PostData) => {
    try {
      // Send a POST request to the API route to create a new post
      const response = await fetch('../api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        // Redirect the user to the home page after submitting the form.
        router.push('/');
      } else {
        console.error('Error creating a new post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating a new post:', error);
    }
  };

  return (
    <div>
      <h3 className="text-lg">Create a New Post</h3>
      <PostForm onSubmit={handleFormSubmit} />
    </div>
  );
}
