import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table"
import { useMemo } from "react"
import { IPerson } from "../Types/IPerson"
import { data } from "../Data/Data"

function BasicTable() {

  const columns = useMemo<MRT_ColumnDef<IPerson> []>(
    () => [
      {
        accessorKey : "name",
        header : "NAME",
        enableHiding : false,

      },
      {
        accessorKey : "age",
        header : "AGE",
        enableHiding : false,

      },
      {
        accessorKey : "country",
        header : "COUNTRY",
        enableHiding : false,

      }

    ], []
  )

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection : true,
    enableColumnOrdering: true,
    enableGlobalFilter : true,
    initialState : {
      pagination : {
        pageSize : 5,
        pageIndex : 0
      }
    }

  })
  
  return (
    <MaterialReactTable table={table}/>
  )
}

export default BasicTable