import { useState } from "react"
import Table from "./components/visualizations/Table"
import LineGraph from "./components/visualizations/LineGraph.jsx"
import Histogram from "./components/visualizations/Histogram.jsx"
import Sidebar from "./components/Sidebar"
import "./App.css"
import { usePassengersData } from "./hooks/usePassengersData.jsx"
import { ScrollToTopIcon } from "./assets/icons/ScrollToTop.jsx"

const TABLE = "table"
const LINE_GRAPH = "lineGraph"
const HISTOGRAM = "histogram"

function App() {
  const { formattedData, getFareByAge, getSurvivalsPerPClass } =
    usePassengersData()
  const [selectedVisualization, setSelectedVisualization] = useState("")

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Sidebar chooseVisualization={setSelectedVisualization} />
      <div className="details">
        {selectedVisualization === TABLE ? (
          <Table data={formattedData} />
        ) : selectedVisualization === LINE_GRAPH ? (
          <LineGraph
            data={getFareByAge()}
            xAxisColumn={"Age"}
            yAxisColumn={"Fare"}
            xAxisTitle={"Age"}
            yAxisTitle={"Fare"}
            chartTitle={"Passengers Fare by Age"}
          />
        ) : selectedVisualization === HISTOGRAM ? (
          <Histogram
            data={getSurvivalsPerPClass()}
            xAxisColumn={"Pclass"}
            yAxisColumn={"survivals"}
            xAxisTitle={"Passenger class"}
            yAxisTitle={"Number of Survivals"}
            chartTitle={"Survivals per passenger class"}
          />
        ) : (
          <span>Please, select a visualization in the sidebar.</span>
        )}
        <button className="scroll-to-top" onClick={scrollToTop}>
          <ScrollToTopIcon />
        </button>
      </div>
    </>
  )
}

export default App
