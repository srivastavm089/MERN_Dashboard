import React from "react";
import { useTable, Column, TableOptions } from "react-table";
function TableHoc<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string
) {
  return function HOC() {
    const option:TableOptions<T>={
      columns,
      data
    }
    const {getTableProps,getTableBodyProps,headerGroups, rows,prepareRow} = useTable(option);

    return <div className={containerClassname}>
  <h2 className="heading">Top Transaction</h2>
  <table className="table" {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroups => (
            <tr {...headerGroups.getFooterGroupProps()}>
              {
                headerGroups.headers.map(column=>(
                  <th {...column.getHeaderProps()}>
                    {
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }

      </thead>
      <tbody {...getTableBodyProps()}>

   {
    rows.map(row=>{
      prepareRow(row);
      return <tr {...row.getRowProps()}>
        {
          row.cells.map(cell=>{
            return <td {...cell.getCellProps()}>
              {
                cell.render('Cell')
              }
            </td>
          })
        }
      </tr>
    })
   }
      </tbody>
  </table>
    </div>
  };
}

export default TableHoc;
