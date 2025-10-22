import { useState } from "react"
import "./styles.css"
import { SidebarIcon, CloseIcon } from "../../assets/icons/Sidebar.jsx"

const TABLE = "table"
const LINE_GRAPH = "lineGraph"
const HISTOGRAM = "histogram"

function Sidebar({ chooseVisualization }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleSidebarSelect = (e) => {
    chooseVisualization(e.target.value)
    setIsSidebarOpen(false)
  }

  return (
    <div className="sidebar">
      <div
        className="sidebar-button"
        name="open-sidebar"
        onClick={handleSidebarClick}
      >
        {!isSidebarOpen ? <SidebarIcon /> : <CloseIcon />}
        <span>Select visualization</span>
      </div>
      {isSidebarOpen && (
        <div className="sidebar-options-outter" onClick={handleSidebarClick}>
          <div className="sidebar-options">
            <button onClick={handleSidebarSelect} value={TABLE}>
              Raw Table
            </button>
            <button onClick={handleSidebarSelect} value={LINE_GRAPH}>
              Line Graph
            </button>
            <button onClick={handleSidebarSelect} value={HISTOGRAM}>
              Histogram
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
