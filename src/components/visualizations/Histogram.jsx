import Chart from "react-apexcharts"

function Histogram({ data, xAxisColumn, yAxisColumn, title }) {
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
      text: title,
      align: "left",
      style: {
        color: "#fff",
      },
    },
    tooltip: {
      enabled: false,
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
