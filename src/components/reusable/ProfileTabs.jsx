"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ProfileTabs({ data, className, id }) {
  const path = usePathname();
  return (
    <div className={className}>
      {data.map(({ parentPath, link, link2, label, value, icon }) => (
        <div key={value} className={`py-2 px-5 flex items-center`}>
          <Link href={`${link}${id}${link2}`}>
            <div
              className={`flex items-center gap-2 ${
                path.startsWith(`${link}${id}/${parentPath}`) &&
                "p-1 bg-white rounded border-[grey] shadow-md"
              }  ${
                path === `${link}${id}${link2}` &&
                "border-b border-l border-5  border-mainColor shadow-md"
              }`}
            >
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
