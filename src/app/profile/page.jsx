import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col items-center justify-center items center ">
      <h1 className="m-5 text-lightText text-xl tracking-wider font-bold">
        Insurer Profile
      </h1>
      <div className=" border rounded text-center text-gray-500 min-w-md p-20 pt-5">
        <Image
          className="w-32 h-32 rounded-full mx-auto"
          src="/user.png"
          alt=""
          width={128}
          height={128}
        />
        <div className=" mt-5">
          <p className="text-lg font-bold text-lightText">
            {session?.user.profile}
          </p>

          <p className="text-md font-bold text-gray-600">
            {session?.user.insurance}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Medical Network : ({session?.user.medical_network})
        </p>{" "}
        <p className="mt-2 text-sm text-gray-500">
          Mobile : {session?.user.mobile}
        </p>
      </div>
    </div>
  );
};

export default Profile;
