"use client";
import React from "react";
import ProfileTabs from "../reusable/ProfileTabs";
import { profileTabsData } from "@/lib/data";

const MainTabs = ({id}) => {
  return (
    <div className="w-full ">
      <ProfileTabs
        data={profileTabsData}
        id={id}
        className={
          "flex justify-center items-center m-auto w-fit bg-bg2Color rounded xs:text-sm md:text-lg px-8"
        }
      />
    </div>
  );
};

export default MainTabs;
