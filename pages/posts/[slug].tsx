import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import markdownToHtml from '../../lib/markdowntohtml'
import { getPosts } from '@/app/components/PostList'
import { getPostBySlug } from '../../lib/api'
import { GetStaticPropsContext } from 'next'

type Props = {
  post: BlogPost
  morePosts: BlogPost[]
  preview?: boolean
}

export default function Post({ post }: Props) {
  const router = useRouter()
  const title = `${post.title} | Next.js Blog Example with `
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    
          <>
            <article className="mb-32">
              
                <title>{title}</title>
             <p>
                title={post.title}
                date={post.date}
                content={post.content}
                </p>
              
            </article>
          </>
      
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    if (!params || !params.slug) {
      return {
        notFound: true,
      };
    }

    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}




export async function getStaticPaths() {
    const posts = await getPosts(); // Assuming getPosts returns an array of posts
  
    return {
      paths: posts.map((post: BlogPost) => ({
        params: {
          slug: post._id.toString(), // Assuming _id is an ObjectId
        },
      })),
      fallback: false,
    };
  }
  