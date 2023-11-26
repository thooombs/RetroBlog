import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdowntohtml'
import { ObjectId } from 'mongodb'
import { getPostById } from '../../../lib/posts'
import { GetStaticPropsContext } from 'next';

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
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const id = params.id as string;
  const objectId = new ObjectId(id);

  const post = await getPostById(objectId);

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


  