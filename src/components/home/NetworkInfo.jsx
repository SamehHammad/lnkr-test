import React from "react";

const NetworkInfo = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const networkData = data[0];

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-8">
       Network Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold mb-4">
            {networkData.name} Network
          </h3>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-700">
              Patients: {networkData.count.patient}
            </p>
            <p className="text-gray-700">
              Dentists: {networkData.count.dentist}
            </p>
            <p className="text-gray-700">Clinics: {networkData.count.clinic}</p>
            <p className="text-gray-700">
              Pharmacies: {networkData.count.pharmacy}
            </p>
            <p className="text-gray-700">Labs: {networkData.count.lab}</p>
            <p className="text-gray-700">Scans: {networkData.count.scan}</p>
          </div>
        </div>

        <div className="bg-mainColor text-white rounded-lg p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">Benefits</h3>
          <p className="text-center font-bold text-2xl">
            Total Limit: {networkData.benefits.max_limit_total}
          </p>
          <div className="mt-4 flex flex-col space-y-2">
            <p>Clinic: {networkData.benefits.max_limit_clinic}</p>
            <p>Pharmacy: {networkData.benefits.max_limit_pharmacy}</p>
            <p>Lab: {networkData.benefits.max_limit_lab}</p>
            <p>Scan: {networkData.benefits.max_limit_scan}</p>
          </div>
        </div>

        {/* Add optional information sections here if needed */}
      </div>
    </div>
  );
};

export default NetworkInfo;
