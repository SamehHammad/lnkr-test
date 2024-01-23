import React from "react";

const HTemplate = ({ data }) => {
  const renderInfo = (label, value) => (
    <div className="flex mb-4">
      <div className="w-1/2">
        <h3 className="text-md font-bold text-lightText">{label}:</h3>
      </div>
      <div className="w-1/2">
        <p className="text-sm text-gray-400 font-medium">
          {value ? value : ""}
        </p>
      </div>
    </div>
  );

  const generalMedicalHistory = [
    { label: "Chronic Condition", value: data.chronic },
    { label: "Family History", value: data.family_history },
    { label: "Previous Surgeries", value: data.previous_surgeries },
    { label: "Blood Type", value: data.blood_type },
    { label: "Smoking Status", value: data.smoking },
    { label: "Alcohol Consumption", value: data.alcohol },
    { label: "Drug Allergy", value: data.drug_allergy },
    { label: "Food Allergy", value: data.food_allergy },
    { label: "Physical Activity", value: data.physical_activity },
  ];

  return (
    <div className="bg-white border rounded-lg shadow-xl px-8 md:w-[700px] w-[350px] sm:w-[450px] py-8 max-w-full mx-auto mt-8">
      <h1 className="font-bold text-2xl text-center text-blue-600">
        General Medical History
      </h1>
      <hr className="m-5" />
      <div className="flex flex-col justify-start mb-6">
        <div className="text-gray-800">
          {generalMedicalHistory.map(({ label, value }) =>
            renderInfo(label, value)
          )}
        </div>
      </div>
    </div>
  );
};

export default HTemplate;
