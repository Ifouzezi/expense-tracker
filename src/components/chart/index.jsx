import ReactApexChart from "react-apexcharts"

const options = {
    labels: ["Income", "Expense"],
    colors: ["#4A90E2", "#E74C3C"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#4A90E2", "#E74C3C"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
    },
};


export default function TransactionChartSummary({expense = 100, income = 100}) {
    return <ReactApexChart
        options={options}
        series={[income, expense]}
        type="pie"
        width={"100%"}
        height={"100%"}
    />
}