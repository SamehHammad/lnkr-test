import SimpleTable from "@/components/reusable/SimpleTable";
import { TABLE_HEAD_APPROVED, TABLE_ROWS_APPROVED } from "@/lib/data";
import React from "react";

const Approved = () => {
  return (
    <div className="w-full">
      <SimpleTable
        TABLE_HEAD={TABLE_HEAD_APPROVED}
        TABLE_ROWS={TABLE_ROWS_APPROVED}
      />
    </div>
  );
};

export default Approved;
