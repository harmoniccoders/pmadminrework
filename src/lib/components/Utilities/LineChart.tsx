import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { Transaction } from "Services";
import moment from "moment";
import Naira from "./Naira";

ChartJS.register(Filler);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ charts }: { charts: Transaction[] }) => {
  const data: any = {
    labels: charts?.map((chart: Transaction) =>
      moment(chart?.dateCreated).format("MMM")
    ),
    datasets: [
      {
        label: "",
        data: charts?.map((chart: Transaction) => chart.amount),
        borderWidth: [2, 1],
        fill: true,
        tension: 0.3,
        borderColor: "#2FDF84",
        backgroundColor: "rgba(47, 223, 132, 0.3)",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        grid: {
          borderDash: [5, 5],
          drawBorder: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} height={300} options={options} />;
};

export default LineChart;
