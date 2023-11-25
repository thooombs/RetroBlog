
import connectMongoDB from '../../../lib/mongodb';
import { getPostById } from '../../../lib/posts';




interface PostProps {
    post: BlogPost; // Assuming PostType is the type of your post data
  }
  
  const Post: React.FC<PostProps> = ({ post }) => {
    if (!post) return <div>Loading...</div>;


    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>{post.date}</p>
      </div>
    );
  };


 export async function getServerSideProps(context: any) {
  const { id } = context.query; // Assuming the post ID is part of the URL query



  try {
    await connectMongoDB();
    const post = await getPostById(id);
console.log("post", post)
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error connecting to MongoDB or fetching post:', error);
    return {
      props: {
        post: null,
      },
    };
  }
}

export default Post;