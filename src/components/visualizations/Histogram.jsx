import Chart from 'react-apexcharts'

function Histogram({data, xAxisColumn, yAxisColumn}) {
    const options = {
        chart: {
            toolbar: {
                show: false,
            },   
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '100%'
          },
        },
        title: {
          text: 'Survivals per passenger class',
          align: 'left',
        },
    }

    const series =  [{
        data,
        parsing: {
            x: xAxisColumn,
            y: yAxisColumn,
        }
    }]
    
    return (
        <Chart options={options} series={series} type="bar" width={1280} height={420}/>
    )
}

export default Histogram
