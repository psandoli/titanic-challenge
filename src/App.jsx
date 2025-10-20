import LineGraph from './components/visualizations/LineGraph.jsx'
import Histogram from './components/visualizations/Histogram.jsx'
import './App.css'
import { usePassengersData } from './hooks/usePassengersData.jsx'

function App() {
  const { getFareByAge, getSurvivalsPerPClass } = usePassengersData()

  return (
    <>
      <LineGraph data={getFareByAge()} xAxisColumn={'Age'} yAxisColumn={'Fare'}/>
      <Histogram data={getSurvivalsPerPClass()} xAxisColumn={'Pclass'} yAxisColumn={'survivals'}/>
    </>
  )
}

export default App
