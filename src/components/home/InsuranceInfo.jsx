import Image from "next/image";
import React from "react";

const InsuranceInfo = ({ data }) => {
  return (
    <div className="container mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Image
            src={data?.insurance_logo || "/insurance.png"}
            width={60}
            height={60}
            alt={`${data?.name} Logo`}
            className="rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold">{data?.name}</h1>
            <p className="text-gray-600">
              {data?.phone_num || "+14 844 731 547"}
            </p>
            <p className="text-gray-600">{data?.email || "example@ex.com"}</p>
          </div>
        </div>
        <a
          href={data?.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
        >
          Visit Website
        </a>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Address</h2>
        <address className="text-gray-600">
          {data?.address?.country}
          <br />
          {data?.address?.city_district}
          <br />
          {data?.address?.street}
          <br />
          {data?.floor && `Floor: ${data?.address?.floor}`}
        </address>
      </div>
    </div>
  );
};

export default InsuranceInfo;
