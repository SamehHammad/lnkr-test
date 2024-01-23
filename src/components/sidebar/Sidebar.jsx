import React from "react";
import SidebarItems from "./SidebarItems";
import { fetchAllMembers, fetchAllProviders } from "@/lib/fetchData";
import { auth } from "../../auth";

const Sidebar = async () => {
  const user = await auth();
  const members = await fetchAllMembers();
  const providers = await fetchAllProviders();
  return (
    <SidebarItems
      members={members && members.length}
      providers={providers && providers.length}
      user={user && user}
    />
  );
};

export default Sidebar;
