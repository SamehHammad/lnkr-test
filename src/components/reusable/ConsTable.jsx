"use client"
import React from "react";
import { Card, Typography } from "@material-tailwind/react";

export default function ConsTable({ data, TABLE_HEAD }) {
  const renderTableCell = (key, value) => (
    <td key={key} className="p-4 border-b border-blue-gray-50">
      <Typography variant="small" color="blue-gray" className="font-normal">
        {value}
      </Typography>
    </td>
  );

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
          {Object.entries(data).map(([service, rowData]) => (
            <tr key={service}>
              {renderTableCell('service', service)}
              {Object.values(rowData).map((value, index) =>
                renderTableCell(TABLE_HEAD[index + 1], value)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
