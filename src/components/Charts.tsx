import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  plugins,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
const months = ["January", "February", "March", "April", "May", "June", "July"];
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export const BarChart = ({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  labels = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,

        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

interface DoughnutChartProps {
  labels: string[];
  data_1: number[];
  backgorundColor: string[];
  cutout?: number | string;
  legend?: boolean;
  offset?: number[];
}
export const DoughnutChart = ({
  labels,
  data,
  backgorundColor,
  cutout,
  legend = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: backgorundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };
  const doughnutOptions:ChartOptions<"doughnut"> = {
    responsive: true,
    plugins:{
      legend:{
        display:legend,
        position:"bottom",
        labels:{
          padding:40
        },  
      }
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};
