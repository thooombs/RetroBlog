import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdowntohtml'

type Props = {
  post: BlogPost
  morePosts: BlogPost[]
  preview?: boolean
}


type Params = {
  params: {
    slug: string
  }
}


export async function getslug(){

  const staticData = await fetch(`/api/posts/getpost`, { cache: 'force-cache' })

console.log("staticData", staticData)
// ...
  return (
   {staticData} 
  )
}


export default async function Post({ post }: Props, {params}: Params) {
  const router = useRouter()

  const response = await getslug()
  const selected = response.find(post( => post.slug === params.slug))
  console.log("aaaaaaa", response)
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