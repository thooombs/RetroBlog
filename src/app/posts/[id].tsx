import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdowntohtml'
import Page from '../../../pages/api/page'
import PostComp from '../components/PostComponent'
import { getPost } from '../../../pages/api/getPost'

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


export async function getslug({params}: TesteProps){

  const staticData = await fetch(`https://api.github.com/users/tt`, { cache: 'force-cache' })
  console.log(staticData)
  //  es
 
  //poise, sera q ta certo esse sllug aqui, nos docs tava assim
    
console.log("staticData", staticData)
// ... acho q ta errada
  return (
   {staticData} 
  )
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