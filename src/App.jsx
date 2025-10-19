import LineGraph from './components/visualizations/LineGraph.jsx'
import './App.css'
import { usePassengersData } from './hooks/usePassengersData.jsx'

function App() {
  const { getFareByAge } = usePassengersData()

  return (
    <>
      <LineGraph data={getFareByAge()} xAxisColumn={'Age'} yAxisColumn={'Fare'}/>
    </>
  )
}

export default App
