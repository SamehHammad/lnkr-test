"use client";
import React from "react";
import ProfileTabs from "../reusable/ProfileTabs";
import { claimsChildTabsData } from "@/lib/data";

const ClaimsChildTabs = ({id}) => {
  return (
    <div>
      <ProfileTabs
        id={id}
        data={claimsChildTabsData}
        className={
          "flex justify-center items-center w-fit bg-bg2Color rounded-lg xs:text-xs md:text-lg m-auto mt-2"
        }
      />
    </div>
  );
};

export default ClaimsChildTabs;
