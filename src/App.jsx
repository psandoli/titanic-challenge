import Table from './components/visualizations/Table.jsx'
import LineGraph from './components/visualizations/LineGraph.jsx'
import Histogram from './components/visualizations/Histogram.jsx'
import './App.css'
import { usePassengersData } from './hooks/usePassengersData.jsx'

function App() {
  const { data, getFareByAge, getSurvivalsPerPClass } = usePassengersData()

  return (
    <>
      <Table data={data} />
      <LineGraph data={getFareByAge()} xAxisColumn={'Age'} yAxisColumn={'Fare'}/>
      <Histogram data={getSurvivalsPerPClass()} xAxisColumn={'Pclass'} yAxisColumn={'survivals'}/>
    </>
  )
}

export default App
