"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Chart = () => {
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 50,
          },
          legend: {
            position: "bottom",
          },
          plotOptions: {
            pie: {
              size: 50,
            },
          },
        },
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default Chart;
