"use client";
import React from "react";
import ProfileTabs from "../reusable/ProfileTabs";
import { profileChildTabsData } from "@/lib/data";

const ProfileChildTabs = ({ id }) => {
  return (
    <div>
      <ProfileTabs
        data={profileChildTabsData}
        id={id}
        className={
          "flex justify-center items-center w-fit bg-bg2Color rounded xs:text-xs md:text-lg m-auto mt-2"
        }
      />
    </div>
  );
};

export default ProfileChildTabs;
