"use client";
// components/PostForm.js
import { useState, FormEvent } from "react";


interface PostFormProps {
    onSubmit: (postData: { title: string; date: string; content: string }) => void;
  }


  const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  // Get the current date in a string format
  const currentDate = new Date().toLocaleDateString();
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ title: `'${title}'`, date: `'${currentDate}'`, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
</label>
        <textarea
    
        id="message"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Choose a Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>


      <label
        className="block mt-3  mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        id="message"
        className="block p-2.5 w-full  h-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>

      <br />

      <br />

      
      <button  type="submit">Submit</button>
      
    </form>
  );
}


export default PostForm;
