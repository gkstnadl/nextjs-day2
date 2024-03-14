import { AboutType } from "@/types";
import Image from "next/image";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:4000/about");
  const about: AboutType = await res.json();

  return (
    <div>
      <h1>About</h1>
      <Image src={about.image} alt="profile" width={200} height={200} />
      <h2>{about.name}</h2>
      <p>{about.desctiption}</p>
    </div>
  );
};

export default page;
