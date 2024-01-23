"use client";
import { Card, Typography } from "@material-tailwind/react";

export default function SimpleTable({ TABLE_HEAD, TABLE_ROWS }) {
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
          {TABLE_ROWS.map((r, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={r.test}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {r.test}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {r.bt}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className={`font-normal ${
                      r.tt === "Pending..."
                        ? "bg-[#dbb46f] text-white py-1 rounded-lg"
                        : r.tt === "Approved"
                        ? "bg-[green] text-white py-1 rounded-lg"
                        : "bg-[darkred] text-white py-1 rounded-lg"
                    }`}
                  >
                    {r.tt}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50 `}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
