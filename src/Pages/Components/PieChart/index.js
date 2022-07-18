import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ["Số tín chỉ đã hoàn thành", "Số tín chỉ chưa hoàn thành"],
        datasets: [
            {
                label: "1",
                data: [19, 137],
                backgroundColor: ["#90ed7d", "#7cb5ec"],
                borderWidth: 0.5,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;