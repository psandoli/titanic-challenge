import Chart from 'react-apexcharts'

function LineGraph({data, xAxisColumn, yAxisColumn}) {
    const options = {
        chart: {
            toolbar: {
                show: false,
            },   
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
          text: 'Passengers Age x Fare',
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
        <Chart options={options} series={series} type="line" width={1280} height={420}/>
    )
}

export default LineGraph
