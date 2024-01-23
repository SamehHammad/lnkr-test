import React from "react";
import MedicalHistory from "@/components/records/MedicalHistory";
import { fetchMedicalSummary } from "@/lib/fetchData";

const History = async ({ params }) => {
  const id = params?.mId;
  const member = await fetchMedicalSummary(id);
  if (!member) {
    return (
      <div className="flex mt-20 justify-center ">
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          Member id ( {id} ) is not found
        </p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <MedicalHistory data={member.data}/>
    </div>
  );
};

export default History;
