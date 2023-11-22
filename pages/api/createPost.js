// pages/api/createPost.js
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { title, date, content } = req.body;

    // Perform logic to save the new post data, e.g., create a new .md file in the posts directory.
    const postsDirectory = path.join(process.cwd(),'src', 'blogposts');
    const fileName = `${Date.now()}-${title.toLowerCase().replace(/\s+/g, '-')}.md`;
    const filePath = path.join(postsDirectory, fileName);

    const fileContent = `---
    title: ${title}
    date: ${date}
---
    ${content}`;

    // Write the file to disk
    await fs.writeFile(filePath, fileContent, 'utf8');

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error creating a new post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
