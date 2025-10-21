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
        },
        responsive: [{
            breakpoint: 1024,
            options: {
                stroke: {
                    width: 3
                },
                chart: {
                    width: '100%',
                    height: 250
                }
            },
        }]
    }

    const series =  [{
        data,
        parsing: {
            x: xAxisColumn,
            y: yAxisColumn,
        }
    }]
    
    return (
        <Chart options={options} series={series} type="line" width={'80%'} height={520}/>
    )
}

export default LineGraph
