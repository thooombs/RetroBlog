import Link from "next/link";

const NavbarTop = () => {
  return (
    <div>
      <nav className="">
     
        <ul className="bg-black flex      items-end   justify-end gap-5 px-8 py-1 text-[13px]">
          <li>
            <Link
              className="  text-white hover:text-blue-700 "
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              className="  text-white  hover:text-blue-700 border-l pl-3 border-white "
              href="/api/auth/signout"
            >
              Sign Out
            </Link>
          </li>
          <li>
            <Link
              className="  text-white hover:text-blue-700  border-l pl-3 h-1 border-white "
              href="/new"
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row mb-px ">
        <div className="h-20 basis-1/6  bg-[#6699cc]  justify-start items-center ">
          <h2 className="text-white  p-7  font-bold text-sm md:text-base">
            Thombs Blog
          </h2>
        </div>
        <div className="h-20 basis-5/6  flex justify-end items-center  bg-white     ">
          <h2 className="text-black  p-7  pt-10 font-light text-sm ">
            Web Development
          </h2>
        </div>
      </div>

      <nav className="navbar ">
        <ul className=" navbar-nav flex flex-wrap  px-4 gap-4 bg-[#6699cc] py-1 font-semibold text-white  border-top border-top-2 border-white">
          <li>
            <Link className="  text-white hover:text-blue-700   " href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="  text-white hover:text-blue-700   " href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarTop;
