import SimpleTable from "@/components/reusable/SimpleTable";
import { TABLE_HEAD_PENDING, TABLE_ROWS_PENDING } from "@/lib/data";
import React from "react";

const Pending = () => {
  return (
    <div className="w-full">
      <SimpleTable
        TABLE_HEAD={TABLE_HEAD_PENDING}
        TABLE_ROWS={TABLE_ROWS_PENDING}
      />
    </div>
  );
};

export default Pending;
