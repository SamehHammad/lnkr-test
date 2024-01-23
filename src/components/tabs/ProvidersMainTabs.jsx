"use client";
import React from "react";
import ProfileTabs from "../reusable/ProfileTabs";
import { providersTabsData } from "@/lib/data";

const ProvidersMainTabs = ({ id }) => {
  return (
    <div className="w-full ">
      <ProfileTabs
        data={providersTabsData}
        id={id}
        className={
          "flex justify-center items-center m-auto w-fit bg-bg2Color rounded xs:text-sm md:text-lg px-8"
        }
      />
    </div>
  );
};

export default ProvidersMainTabs;
