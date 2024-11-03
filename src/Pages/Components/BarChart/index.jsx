import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import NoData from '../../../assets/tkkqht.png';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const data = [
    {
        labels: [
            "Giáo dục quốc phòng và an ninh 1",
            "Giáo dục thể chất 1",
            "Kỹ năng làm việc nhóm",
            "Nhập môn lập trình",
            "Nhập môn tin học",
            "Toán cao cấp 1",
            "Triết học Mác - Lênin",
        ],
        datasets: [
            {
                label: "Điểm của bạn",
                data: [6.7, 7.5, 7.9, 9.2, 7, 8.2, 8],
                backgroundColor: ["#fa6c51"],
                borderWidth: 1,
                barPercentage: 0.7,
                hoverBackgroundColor: ["#ff2900"],
            },
        ],
    },

];

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
                borderWidth: 2,
                borderColor: "#999",
            },
            ticks: {
                display: false,
            },
        },
        y: {
            grid: {
                borderWidth: 0,
            },
            ticks: {
                stepSize: 2,
            },
        },
    },
};

const BarChart = ({ selectedModeCol }) => {
    return (
        <>
            {data[selectedModeCol] ? (
                <Bar
                    data={data[selectedModeCol]}
                    options={options}
                    width={400}
                    height={270}
                />
            ) : (
                <div className="nodata">
                    <img src={NoData} alt="no-data" />
                </div>
            )}
        </>
    );
};

export default BarChart;

