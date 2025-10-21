import Chart from 'react-apexcharts'

function LineGraph({data, xAxisColumn, yAxisColumn, title}) {
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
            text: title,
            align: 'left',
            style: {
                color: '#fff'
            }
        },
        yaxis: {
            decimalsInFloat: false,
        }
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
