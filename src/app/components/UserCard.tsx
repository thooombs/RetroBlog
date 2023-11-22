'use client'
import { useRouter } from "next/navigation"; // Correct import
import { useEffect } from "react";

const Card = () => {
    const router = useRouter();

    // Assuming you want to trigger the navigation when the component mounts
    useEffect(() => {
        router.push('/new');
    }, [router]); // The empty dependency array ensures this effect runs once, like componentDidMount

    // If you want to console.log something, you can do it here
    // console.log(user);

    return <></>;
};

export default Card;
