import Chart from 'react-apexcharts'

function Histogram({data, xAxisColumn, yAxisColumn, title}) {
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
            text: title,
            align: 'left',
            style: {
                color: '#fff'
            }
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
        <Chart options={options} series={series} type="bar" width={1280} height={420}/>
    )
}

export default Histogram
