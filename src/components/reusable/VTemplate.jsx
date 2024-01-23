import React from "react";

const VTemplate = ({ data }) => {
  const renderInfo = (label, value) => (
    <div key={label} className="flex mb-4">
      <div className="w-1/2">
        <span className="text-md font-semibold text-gray-800">{label}:</span>
      </div>
      <div className="w-1/2">
        <span className="text-md text-gray-600">
          {value ? value : ""}
        </span>
      </div>
    </div>
  );

  const generalVitalSigns = [
    { label: "Created date", value: data[0]?.created_date },
    { label: "Weight", value: data[0]?.weight },
    { label: "Height", value: data[0]?.height },
    { label: "Blood pressure", value: data[0]?.blood_pressure },
    { label: "Sugar level", value: data[0]?.sugar_level },
    { label: "Temperature", value: data[0]?.temperature },
    { label: "Food allergy", value: data[0]?.food_allergy },
    { label: "Oxygen saturation", value: data[0]?.oxygen_saturation },
    { label: "Race", value: data[0]?.race },
    { label: "Pulse", value: data[0]?.pulse },
    { label: "BMI", value: data[0]?.bmi },
    { label: "Clinic visit", value: data[0]?.clinic_visit },
  ];

  return (
    <div className="bg-white border rounded-lg shadow-xl px-8 md:w-[700px] w-[350px] sm:w-[450px] py-8 max-w-full mx-auto mt-8">
      <h1 className="font-bold text-2xl text-center text-blue-600">
        General Vital Signs
      </h1>
      <hr className="m-5" />
      <div className="flex flex-col justify-start mb-6">
        <div className="text-gray-800">
          {generalVitalSigns.map(({ label, value }) =>
            renderInfo(label, value)
          )}
        </div>
      </div>
    </div>
  );
};

export default VTemplate;
