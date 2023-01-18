import React, { useMemo } from "react"
import { useTable } from "react-table"
import MOKE_DATA from "./MOCK_DATA.json"
import { COLUMNS } from "./columns"

import "./table.css"

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOKE_DATA, [])

  const tableInstance = useTable({
    columns: columns,
    data: data,
  })

  const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow } =
    tableInstance

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BasicTable
