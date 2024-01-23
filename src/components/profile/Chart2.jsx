"use client";
import React from "react";
import { XAxis, AreaChart, Area, ResponsiveContainer } from "recharts";

const Chart2 = () => {
  const data = [
    {
      name: "Consumption",
      uv: 2000,
      consumption: 9800,
      amt: 2290,
    },
    {
      name: "Consumption",
      uv: 3000,
      consumption: 3398,
      amt: 2210,
    },
    {
      name: "Consumption",
      uv: 4000,
      consumption: 8400,
      amt: 2400,
    },
    {
      name: "Consumption",
      uv: 2780,
      consumption: 3908,
      amt: 2000,
    },
    {
      name: "Consumption",
      uv: 1890,
      consumption: 4800,
      amt: 2181,
    },
    {
      name: "Consumption",
      uv: 2390,
      consumption: 3800,
      amt: 2500,
    },
    {
      name: "Consumption",
      uv: 3490,
      consumption: 4300,
      amt: 2100,
    },
  ];


  return (
    <div className="">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          {/* <Tooltip /> */}
          <Area
            type="monotone"
            dataKey="consumption"
            stroke="#0D6EFD"
            fill="#2D2F31"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(Chart2);
