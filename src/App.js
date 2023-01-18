import "./App.css"
import BasicTable from "./component/BasicTable"
import FilteringTable from "./component/FilteringTable"
import PaginationTable from "./component/PaginationTable"
import SortingTable from "./component/SortingTable"

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  )
}

export default App
