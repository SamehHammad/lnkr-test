import Image from "next/image";
import React from "react";

const Profile = ({ id, name, job, age, data, adress, org, nID, bd }) => {
  return (
    <div>
      <div className="container mx-auto my-20 ">
        <div>
          <div className="bg-white relative shadow-2xl rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto p-5">
            <div className="flex justify-center">
              <Image
                src={"/user.png"}
                alt=""
                width={128}
                height={128}
                className="rounded-full shadow-2xl mx-auto absolute -top-20 w-32 h-32 border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16 mb-8">
              <h1 className="font-bold text-center text-3xl text-gray-900">
                {name}
              </h1>
              <hr className="m-8" />
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-3 justify-center">
                    <div className="flex gap-3 ">
                      <h3 className="text-md font-bold text-lightText">
                        Profession:
                      </h3>
                      <p className="text-center text-sm text-gray-400 font-medium mt-1">
                        {job ? job : ""}
                      </p>
                    </div>

                    <div className="flex gap-3 ">
                      <h3 className="text-md font-bold text-lightText">
                        Employer:
                      </h3>
                      <p className="text-center text-sm text-gray-400 font-medium mt-1">
                        {org ? org : " 5"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-md font-bold text-lightText">
                        Gender
                      </h3>
                      <p className="text-center text-sm text-gray-400 font-medium"></p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-md font-bold text-lightText">Age</h3>
                      <p className="text-center text-sm text-gray-400 font-medium">
                        {age ? age : " "}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="m-8" />
                <div className="flex justify-between">
                  <div className="flex flex-col gap-3 justify-center">
                    <div className="flex gap-3 ">
                      <h3 className="text-md font-bold text-lightText">
                        Mobile No.:
                      </h3>
                      <p className="text-center text-sm text-gray-400 font-medium mt-1">
                        {data?.mobile}
                      </p>
                    </div>

                    <div className="flex gap-3 ">
                      <h3 className="text-md font-bold text-lightText">
                        National ID.:
                      </h3>
                      <p className="text-center text-sm text-gray-400 font-medium mt-1">
                        {nID ? nID : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <div className="flex gap-3 ">
                      <h3 className="text-md font-bold text-lightText">
                        Email:
                      </h3>
                      <p className="text-center text-sm text-gray-400 font-medium mt-1"></p>
                    </div>

                    <div className="flex gap-3 ">
                      <h3 className="text-md font-bold text-lightText">
                        Birth Date.:
                      </h3>
                      <p className="text-center text-sm text-gray-400 font-medium mt-1">
                        {bd ? bd : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="m-8" />
                  <h3 className="text-md font-bold text-lightText">Adress</h3>
                  <div className="ms-8">
                    {" "}
                    {adress?.country ? adress?.country : "Country: "}-
                    {adress?.city_district ? adress?.city_district : "City: "}
                    <span className="text-gray-500 text-sm block">
                      {adress?.street ? adress?.street : "Street: "}
                    </span>
                    <span className="text-gray-500 text-sm block">
                      {adress?.floor ? adress?.floor : "Floor: "}
                    </span>
                  </div>
                  <hr className="m-8 mt-2" />
                  <div className="w-full text-center border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 tracking-wider">
                    <h3 className="text-md font-bold text-lightText">
                      Emergency Contact
                    </h3>
                  </div>
                  {data && (
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-3 justify-center">
                        <div className="flex gap-3 ">
                          <h3 className="text-md font-bold text-lightText">
                            Full Name :
                          </h3>
                          <p className="text-center text-sm text-gray-400 font-medium">
                            {data?.full_name}
                          </p>
                        </div>

                        <div className="flex gap-3 ">
                          <h3 className="text-md font-bold text-lightText">
                            Profession:
                          </h3>
                          <p className="text-center text-sm text-gray-400 font-medium">
                            {data?.profession}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex gap-3">
                          <h3 className="text-md font-bold text-lightText">
                            Mobile no :
                          </h3>
                          <p className="text-center text-sm text-gray-400 font-medium">
                            {data?.mobile}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
