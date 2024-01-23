import { TABLE_ROWS } from "@/lib/data";
import React from "react";
import Card from "../../../../../components/profile/Card";
import { fetchCard } from "@/lib/fetchData";

const CardPage = async ({ params }) => {
  const id = params?.mId;
  const member = await fetchCard(id);
  if (!member) {
    return (
      <div className="flex mt-20 justify-center ">
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          Member id ( {id} ) card is not found
        </p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <Card

        data={member?.data}
      />
    </div>
  );
};

export default CardPage;
