import React from "react";
import TableProviders from "../../components/reusable/TableProviders";
import { TABS, TABLE_HEAD_PROVIDERS } from "@/lib/data";
import { fetchAllProviders } from "@/lib/fetchData";

const Providers = async () => {
  const providers = await fetchAllProviders();
  return (
    <div className="flex justify-center items-center">
      <TableProviders
        header={"Providers list"}
        add={"Add provider"}
        TABS={TABS}
        TABLE_HEAD={TABLE_HEAD_PROVIDERS}
        TABLE_ROWS={providers && providers}
        filter={false}
      />
    </div>
  );
};

export default Providers;
