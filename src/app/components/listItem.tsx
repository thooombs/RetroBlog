import Link from "next/link"
import getFormattedDate from "@/../lib/getFormattedDate"



type Props = {
    post: BlogPost
}


export default function ListItem({ post }: Props) {
    const { title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 list-[square] font-medium dark:text-white/90">
            <Link className="underline text-blue-500 hover:text-black/90 dark:hover:text-white" key={post._id}   href={`/posts/${post._id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}