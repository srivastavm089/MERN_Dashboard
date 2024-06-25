import React from "react";
import { useTable, Column } from "react-table";


type temp={
    status:string;
    id:string;
    amount:number
}
function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string
) {
  return function HOC() {};
}

export default TableHoc;
