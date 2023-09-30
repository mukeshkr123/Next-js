import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <Link href={"/"} className="m-5">
        Next js
      </Link>
      <Link href={"/users"} className="m-5">
        Users
      </Link>
    </div>
  );
};

export default Navbar;
