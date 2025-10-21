import { useState } from 'react'
import './styles.css'
import { SidebarIcon } from '../../assets/icons/SidebarIcon.jsx'

const TABLE = 'table'
const LINE_GRAPH = 'lineGraph'
const HISTOGRAM = 'histogram'

function Sidebar({chooseVisualization}) {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)

    const handleSidebarOpen = () => {
        setIsSidebarOpen(!isSidebarOpen)
    } 

    const handleSidebarSelect = (e) => {
        chooseVisualization(e.target.value)
        setIsSidebarOpen(false)
    } 

    return (
        <div className='sidebar'>
        <button className={`sidebar-button ${isSidebarOpen ? 'open' : 'closed'}`} name="open-sidebar" onClick={handleSidebarOpen}>
            <SidebarIcon/>
            <span>Select visualization</span>
        </button>
        { isSidebarOpen && (
            <div className='sidebar-options-outter'>
                <div className='sidebar-options'>
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
