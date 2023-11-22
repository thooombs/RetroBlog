import Link from "next/link";

const NavbarTop = () => {
  return (
    <div>
      <nav >
        <ul className="bg-black flex  basis-1/2 justify-end gap-5 px-5 py-1 font-medium">
          <li>
            <Link
              className="  text-white hover:text-blue-700"
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              className="  text-white hover:text-blue-700"
              href="/api/auth/signout"
            >
              Sign Out
            </Link>
          </li>
          <li>
            <Link className="  text-white hover:text-blue-700" href="/new">
              Posts
            </Link>
          </li>
        </ul>
      </nav >
      <div className="h-20 bg-blue-300 flex justify-between items-start">
        <h2 className="text-white flex-item  p-10 font-bold">LOGO</h2>
        <h2 className="text-black flex-item  p-10 font-bold">LOGO</h2>
      </div>
      <div className=" flex px-5 gap-7 bg-blue-400 py-1 font-medium text-white">
        <a href="/" className="   hover:text-blue-700 ">
          Home
        </a>
        <a href="/about" className="  hover:text-blue-700">
          About
        </a>

        <a href="/" className="  hover:text-blue-700">
          Posts
        </a>
        <a href="/" className="   hover:text-blue-700">
          Test
        </a>
        <a href="/about" className="  hover:text-blue-700">
          Development
        </a>
        <a href="/" className="  hover:text-blue-700">
          Users
        </a>
        <a href="/" className="  hover:text-blue-700">
          Blog
        </a>
      </div>
    </div>
  );
};

export default NavbarTop;
