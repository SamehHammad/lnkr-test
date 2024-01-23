import React from "react";
import Vsigns from "@/components/records/Vsigns";
import { fetchVitalSigns } from "../../../../../lib/fetchData";
const VitalSignsPage = async({params}) => {
  const id = params?.mId;
  const member = await fetchVitalSigns(id);
  if (!member) {
    return (
      <div className="flex mt-20 justify-center ">
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          Member id ( {id} ) vital signs is not found
        </p>
      </div>
    );
  }
  return (
    <div className="w-[70%]">
     < Vsigns data={member?.data}/>
    </div>
  );
};

export default VitalSignsPage;
