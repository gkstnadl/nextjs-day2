"use client";

import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/report">Report</Link>
      <Link href="/todos-csr">Todos-CSR</Link>
      <Link href="/todos-ssr">Todos-SSR</Link>
    </nav>
  );
};

export default Nav;
