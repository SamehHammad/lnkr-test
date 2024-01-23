import React from "react";
import { fetchConsumption } from "@/lib/fetchData";
import {  TABLE_HEAD_CONS } from "@/lib/data";
import ConsTable from "../../../../../components/reusable/ConsTable";
const Consumption = async ({ params }) => {
  const id = params?.mId;
  const member = await fetchConsumption(id);
  if (!member) {
    return (
      <div className="flex mt-20 justify-center ">
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          Member id ( {id} ) consumption is not found
        </p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <ConsTable TABLE_HEAD={TABLE_HEAD_CONS} data={member.data} />
    </div>
  );
};

export default Consumption;
