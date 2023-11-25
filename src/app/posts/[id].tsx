import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ObjectId } from 'mongodb';
import { getPost } from '@/api/posts/[id]';
import { Order, Post } from '@/api/posts/[id]';





type Props = {
    post?: Post;
};

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const result = await axios.get('http://127.0.0.1:8000/api/customers');

    // const paths = result.data.customers.map((customer: Customer) => {
    //     console.log(customer.id);
    //     return { params: { id: customer.id.toString() } };
    // });

    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
    context
) => {
    const params = context.params!;

    try {
        const data = await getPost(params.id);
        console.log('!!!', data);

        if (!data) {
            return {
                notFound: true,
                revalidate: 60,
            };
        }

        return {
            props: {
                post: JSON.parse(JSON.stringify(data)),
            },
            revalidate: 60,
        };
    } catch (err) {
        console.log(err);
        if (err) {
            return {
                notFound: true,
            };
        }
        throw err;
    }
};

const Post: NextPage<Props> = (props) => {
    const router = useRouter();
    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return <h1>{props.post ? 'Post ' + props.post.name : null}</h1>;
};

export default Post;