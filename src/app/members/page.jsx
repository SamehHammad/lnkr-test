import React from "react";
import TableMembers from "../../components/reusable/TableMembers";
import { TABS, TABLE_HEAD, TABLE_ROWS } from "@/lib/data";
import { fetchAllMembers } from "@/lib/fetchData";
const Members = async () => {
  const members = await fetchAllMembers();
  return (
    <div className="flex justify-center items-center">
      <TableMembers
        header={"Members list"}
        add={"Add member"}
        TABS={TABS}
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={members && members}
        filter={true}
      />
    </div>
  );
};

export default Members;
