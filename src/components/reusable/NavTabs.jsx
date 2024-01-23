"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavTabs({ data, className, profile, user }) {
  const path = usePathname();
  return (
    <div className={className}>
      {data.map(({ link, label, value, icon }) => (
        <div
          key={value}
          className={`py-2 px-5 flex items-center  ${
            path === link &&
            " border-b border-l border-5  border-mainColor shadow-md  "
          } `}
        >
          <Link href={link}>
            <div className="flex items-center gap-2 transition-transform transform">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Link>
        </div>
      ))}
    
    {user && (
            <Link href={link}>
              <div className="flex items-center gap-2 transition-transform transform">
               {user?.mobile}
              </div>
            </Link>
          )}
    </div>
  );
}
