import { getSortedPostsData } from "@/../lib/posts"
import ListItem from "../components/listItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="mt-6 max-w-2xl ml-5 ">
            {/* <h2 className=" font-bold dark:text-white/90">Blog</h2> */}
            <ul className="flex flex-col">
                {posts.map(post => (
                    <ListItem  key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}