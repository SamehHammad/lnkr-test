import React from "react";

const Card = ({ data }) => {
  const details = [
    { item: "Card number", value: data.card_number },
    { item: "Status", value: data.status },
    { item: "Activated date", value: data.activated_date },
    { item: "Expiry date", value: data.expiry_date },
    { item: "Insurance", value: data.insurance },
    { item: "Medical network", value: data.medical_network },
  ];

  const limitDetails = [
    { item: "Total max limit: ", value: data.max_limit_total },
    { item: "Clinic max limit: ", value: data.max_limit_clinic },
    { item: "Pharmacy max limit: ", value: data.max_limit_pharmacy },
    { item: "Lab max limit: ", value: data.max_limit_lab },
    { item: "Scan max limit: ", value: data.max_limit_scan },
  ];

  const renderDetails = (detailsArray) => (
    <div className="flex flex-col gap-5">
      {detailsArray.map((d) => (
        <div key={d.item} className="flex justify-between w-[50%]">
          <h3 className="text-md font-bold text-lightText whitespace-nowrap">
            {d.item}
          </h3>
          <p className="text-center text-sm text-gray-400 font-medium whitespace-nowrap">
            {d.value}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-evenly mt-12  gap-5">
      <div className="flex flex-col xs:w-full md:w-[40%] h-fit bg-bg2Color shadow-xl border-e border-2 relative py-5 px-5">
        {renderDetails(details)}
      </div>{" "}
      <div className="flex flex-col xs:w-full md:w-[40%] h-fit bg-bg2Color shadow-xl border-s border-2 relative py-5 px-5">
        {renderDetails(limitDetails)}
      </div>
    </div>
  );
};

export default Card;
