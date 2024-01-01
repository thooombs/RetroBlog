// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden   p-4 sm:flex flex-col border-r  border-orange-500">
      <li className="list-[square]  font-medium ">
        <Link href="/">Home</Link>
      </li>
      <ul className="text-blue-600   underline">
        <li>
          <Link href="/">Posts</Link>{" "}
        </li>
      
      
      </ul>
      <li className="list-[square] mt-4  font-medium">
        {" "}
        <Link href="/websites" >Websites</Link>
      </li>
      <ul className="text-blue-600 underline">
        <li>
          <Link href="https://sagareact.vercel.app/">Saga Computers</Link>{" "}
        </li>
        <li>
          <Link href="https://www.cantoncigarcompany.com/">Canton Cigar</Link>{" "}
        </li>
   </ul>
      <li className="list-[square] mt-4  font-medium">
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <ul className="text-blue-600 underline ">
        <li>
          <Link href="https://www.behance.net/thomazst">Behance</Link>{" "}
        </li>
        <li>
          <Link href=" https://github.com/thooombs">Git</Link>{" "}
        </li>
     


       

      </ul>
     

     
    </nav>
  );
};

export default Navbar; 
