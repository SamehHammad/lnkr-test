import React from "react";
import InsuranceInfo from "@/components/home/InsuranceInfo";
import { fetchInsurance } from "@/lib/fetchData";
const Insurance = async () => {
  const insurance = await fetchInsurance();
  return (
    <div className="flex justify-center items-center">
      <InsuranceInfo data={insurance?.data} />
    </div>
  );
};

export default Insurance;
