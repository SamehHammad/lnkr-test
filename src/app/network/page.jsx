import React from "react";
import NetworkInfo from "@/components/home/NetworkInfo";
import { fetchNetwork } from "@/lib/fetchData";
const Network = async () => {
  const network = await fetchNetwork();
  return (
    <div className="flex justify-center items-center">
      <NetworkInfo data={network?.data} />
    </div>
  );
};

export default Network;
