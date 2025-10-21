import { useState } from 'react'
import Table from './components/visualizations/Table'
import LineGraph from './components/visualizations/LineGraph.jsx'
import Histogram from './components/visualizations/Histogram.jsx'
import Sidebar from './components/Sidebar'
import './App.css'
import { usePassengersData } from './hooks/usePassengersData.jsx'

const TABLE = 'table'
const LINE_GRAPH = 'lineGraph'
const HISTOGRAM = 'histogram'

function App() {
  const { data, getFareByAge, getSurvivalsPerPClass } = usePassengersData()
  const [ selectedVisualization, setSelectedVisualization ] = useState('')

  return (
    <>
      <Sidebar chooseVisualization={setSelectedVisualization}/>
      <div className='details'>
        { selectedVisualization === TABLE ? (
          <Table data={data} />
        ) : selectedVisualization === LINE_GRAPH ? (
          <LineGraph data={getFareByAge()} xAxisColumn={'Age'} yAxisColumn={'Fare'} title={'Passengers Fare by Age'}/>
        ) : selectedVisualization === HISTOGRAM ? (
          <Histogram data={getSurvivalsPerPClass()} xAxisColumn={'Pclass'} yAxisColumn={'survivals'} title={'Survivals per passenger class'}/>
        ) : (
          <span>
            Please, select a visualization in the sidebar.
          </span>
        )}
      </div>
    </>
  )
}

export default App
