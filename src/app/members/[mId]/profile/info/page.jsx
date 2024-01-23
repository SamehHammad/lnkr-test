import React from "react";
import Profile from "../../../../../components/profile/Profile";
import { fetchMemberInfo } from "@/lib/fetchData";

const Info = async ({ params }) => {
  const id = params?.mId;
  const member = await fetchMemberInfo(id);
  if (!member) {
    return (
      <div className="flex mt-20 justify-center ">
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          Member id ( {id} ) is not found
        </p>
      </div>
    );
  }
  return (
    <div>
      <Profile
        id={id}
        name={member?.data?.full_name}
        job={member?.data?.profession}
        age={member?.data?.age}
        data={member?.data?.emergency_contact}
        adress={member?.data?.address}
        org={member?.data?.employer}
        nID={member?.data?.national_id}
        bd={member?.data?.bd}
      />
    </div>
  );
};

export default Info;
