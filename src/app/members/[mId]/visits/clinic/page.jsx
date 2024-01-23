import { fetchVisitsClinic } from "@/lib/fetchData";
import React from "react";
import VisitTable from "@/components/reusable/VisitTable";
import { TABLE_HEAD_VISIT_CLINIC} from "@/lib/data";

const Clinic = async ({ params }) => {
  const id = params?.mId;
  const member = await fetchVisitsClinic(id);
  if (!member) {
    return (
      <div className="flex mt-20 justify-center ">
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          Member id ( {id} ) clinic visits is not found
        </p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <VisitTable TABLE_HEAD={TABLE_HEAD_VISIT_CLINIC} data={member?.data} />
    </div>
  );
};

export default Clinic;
