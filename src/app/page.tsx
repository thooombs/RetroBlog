import Image from "next/image";
import vercel from "../../public/vercel.svg";
import vercel2 from "../../public/thumbnail2.png";
import PostList from "./components/PostList";
import { connectToDatabase } from "../../config/mongodb";
import PostComp from "./components/PostComp";
import Link from "next/link";




export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row  pb-5  ">
        <Image
          src={vercel}
          width={100}
          height={100}
          alt="Picture of the author"
          className="mr-5"
        ></Image>
        <div className=" ">
          <Link href="https://sagareact.vercel.app/" className="text-blue-700 underline font-medium"> Saga Computers Website </Link>
          
          <p>
            Ecommerce - My own project, using NextJS, Nest, Tailwind, PostgreSQL.
          </p>
        </div>  
      </div>
      <div className="flex flex-row  pb-5  ">
        <Image
          src={vercel}
          width={100}
          height={100}
          alt="Picture of the author"
          className="mr-5"
        ></Image>
        <div className=" ">
          <Link href="https://www.goiterative.com/" className="text-blue-700 underline font-medium"> Saga Computers Website </Link>
          
          <p>
            AI Website - made UX/UI, Front End, using NextJS, Tailwind, Flowbite.
          </p>
        </div>  
      </div>
      <div className="flex flex-row border-b pb-5 ">
        <Image
          src={vercel}
          width={100}
          height={100}
          alt="Picture of the author"
          className="mr-5"
        ></Image>
        <div className="">
          <Link href="https://www.cantoncigarcompany.com/" className="text-blue-700 underline font-medium"> Canton Cigar Website </Link>
          
          <p>
          Landing Page - using PHP and Bootstrap.
          </p>
        </div>  
      </div>




      <PostList  />
     
      

    </main>
  );
}

