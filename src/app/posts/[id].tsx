import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

type Props = {
  post: BlogPost
  morePosts: BlogPost[]
  preview?: boolean
}


interface TesteProps {
  params: {
    id: string
  }
}






export default async function Post({ post }: Props, {params}: any) {
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
             
             {params.slug}
                title={post.title}
                date={post.date}
                content={post.content}
                </p>
              
            </article>
          </>
      
  )
}




// export async function getStaticProps({ params }: Params) {
//   const post = getPostBySlug(params.slug, [
//     'title',
//     'date',
//     'slug',
//     'content',
//   ])
//   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   }
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts(['slug'])

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }