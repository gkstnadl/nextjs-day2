import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/report">report</Link>
      <Link href="/todos-csr">todos-csr</Link>
      <Link href="/todos-ssr">todos-ssr</Link>
    </nav>
  );
};

export default Nav;
