"use client";
import React from "react";
import ProfileTabs from "../reusable/ProfileTabs";
import { visitsChildTabsData } from "@/lib/data";

const VisitsChildTabs = ({id}) => {
  return (
    <div>
      <ProfileTabs
        id={id}
        data={visitsChildTabsData}
        className={
          "flex justify-center items-center w-fit bg-bg2Color rounded-lg xs:text-xs md:text-lg m-auto mt-2"
        }
      />
    </div>
  );
};

export default VisitsChildTabs;
