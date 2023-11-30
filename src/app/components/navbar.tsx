// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden   p-4 sm:flex flex-col border-r  border-orange-500">
      <li className="list-[square] font-medium">
        <Link href="/">Home</Link>
      </li>
      <ul className="text-blue-600  underline">
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
      </ul>
      <li className="list-[square] font-medium">
        {" "}
        <Link href="/about" >Blog</Link>
      </li>
      <ul className="text-blue-600 underline">
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
      </ul>
      <li className="list-[square] font-medium">
        <Link href="/contact">Developers</Link>
      </li>
      <ul className="text-blue-600 underline">
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
      </ul>
      <li className="list-[square] font-medium">
        <Link href="/contact">Actions</Link>
      </li>
      <ul className="text-blue-600 underline ">
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
      </ul>
      <li className="list-[square] font-medium">
        <Link href="/contact">Upgrades</Link>
      </li>

      <ul className="text-blue-600 underline">
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
        <li>
          <Link href="/about">test</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 
