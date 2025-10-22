import Chart from "react-apexcharts"

function Histogram({
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "100%",
      },
    },
    title: {
      text: chartTitle,
      align: "center",
      style: {
        color: "#fff",
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      title: {
        text: xAxisTitle,
      },
    },
    yaxis: {
      title: {
        text: yAxisTitle,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            width: "100%",
            height: 400,
          },
        },
      },
    ],
  }

  const series = [
    {
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
      type="bar"
      width={"80%"}
      height={520}
    />
  )
}

export default Histogram
