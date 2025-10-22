import Chart from "react-apexcharts"

function LineGraph({
  data,
  xAxisColumn,
  yAxisColumn,
  xAxisTitle,
  yAxisTitle,
  chartTitle,
}) {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: chartTitle,
      align: "center",
      style: {
        color: "#fff",
      },
    },
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      title: {
        text: xAxisTitle,
      },
    },
    yaxis: {
      decimalsInFloat: false,
      title: {
        text: yAxisTitle,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          stroke: {
            width: 3,
          },
          chart: {
            width: "100%",
            height: 250,
          },
        },
      },
    ],
  }

  const series = [
    {
      name: yAxisTitle,
      data,
      parsing: {
        x: xAxisColumn,
        y: yAxisColumn,
      },
    },
  ]

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={"80%"}
      height={520}
    />
  )
}

export default LineGraph
