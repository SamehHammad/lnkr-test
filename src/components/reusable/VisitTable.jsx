"use client";
import React, { useState } from "react";
import { Button, Card, CardFooter, IconButton, Typography } from "@material-tailwind/react";

export default function VisitTable({ data, TABLE_HEAD }) {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalMembers = data.length;
  const totalPages = Math.ceil(totalMembers / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalMembers - 1);
  const displayedMembers = data.slice(startIndex, endIndex + 1);

  return (
    <Card className="h-full w-full overflow-scroll mt-8">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedMembers?.map((r) => (
            <tr key={r.uuid}>
              <td className="p-4">{r.created_date}</td>
              <td className="p-4">{r.dentist}</td>
              <td className="p-4">{r.clinic}</td>
              <td className="p-4">{r.service}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CardFooter  className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <IconButton
              key={page}
              variant={page === currentPage ? "outlined" : "text"}
              size="sm"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </IconButton>
          ))}
        </div>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
