"use client";
import React from "react";
import Link from "next/link";
import { navs } from "@/lib/data";
import NavTabs from "../reusable/NavTabs";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex justify-between bg-white full px-8 py-4 shadow-lg ">
      <div className="flex w-[30%]">
        <Link href={"/"} className="flex items-center">
          <Image src={"/lnkr.jpg"} width={80} height={60} alt="logo" />
        </Link>
      </div>
      <NavTabs
        data={navs}
        className={"flex justify-between md:w-[700px] sm:w-[450px] xs-[150px]"}
      />
    </div>
  );
};

export default Nav;
