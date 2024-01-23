import React from "react";

const MedicalHistory = ({head,head1,head2,adressHead}) => {
  return (
    <div className="bg-white border rounded-lg shadow-xl  px-12 md:w-[700px] w-[350px] sm:w-[450px] py-8 max-w-ful mx-auto mt-8">
      <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
        {head}
      </h1>
      <hr className="mb-2" />
      <div className="flex justify-between mb-6">
        <h5 className="text-mainColor font-bold md:whitespace-nowrap">
          {head1}
        </h5>
        <div className="text-gray-700">
          <div>
            <span className="text-md font-bold text-lightText">name: </span>
            Ahmed Ibrahim
          </div>
          <div>
            <span className="text-md font-bold text-lightText">
              Date of Birth:{" "}
            </span>
            25 oct 1985
          </div>
          <div>
            <span className="text-md font-bold text-lightText">Weight: </span>78
            kg
          </div>
          <div>
            <span className="text-md font-bold text-lightText">Height: </span>175
            cm
          </div>
        </div>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-between mb-6">
        <h5 className="text-mainColor font-bold md:whitespace-nowrap">
        {adressHead}
          
        </h5>
        <div className="w-full text-center border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 tracking-wider">
          <h3 className="text-md font-bold text-lightText">Adress</h3>
          Cairo - Nasr City
          <span className="text-gray-500 text-xs block">
            No.3 , Mostafa Nahas ,Besides CTR
          </span>
          <span className="text-gray-500 text-xs block">
            Floor : 5 - Apart : 501
          </span>
        </div>
      </div>
      <div className="flex">
        <div className="w-full text-center text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 tracking-wider">
          <h3 className="text-md font-bold text-lightText">Work phone</h3>
          <span className="text-gray-500 text-xs block">(+2)0552 44526</span>
        </div>{" "}
        <div className="w-full text-center  text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 tracking-wider">
          <h3 className="text-md font-bold text-lightText">Home phone</h3>
          <span className="text-gray-500 text-xs block">(+2)0224 555 526</span>
        </div>
      </div>
      <hr className="mb-2" />
      <h5 className="text-mainColor font-bold md:whitespace-nowrap">
        {head2}
      </h5>
    </div>
  );
};

export default MedicalHistory;
