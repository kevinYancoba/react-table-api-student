import {MaterialReactTable, MRT_ColumnDef, useMaterialReactTable  } from "material-react-table";
import {useMemo} from 'react'
import {useFetch} from '../useFetch';
import { IUser } from "../Types/IUser";

export function TableUsers(){
  
  const {data} = useFetch<IUser []>("https://jsonplaceholder.typicode.com/users")

  const filteredData = useMemo(
    () => {
    return data
      ?data.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        }))
      : [];
        console.log(data)
  }, [data]);




  const columns = useMemo<MRT_ColumnDef<IUser> []>(

    () => [
      {
        accessorKey : "name",
        header : "NAME",
        enableHiding : false,
      },
      {
        accessorKey : "username",
        header : "USERNAME",
        enableHiding : false,

      },
      {
        accessorKey : "email",
        header : "EMAIL",
        enableHiding : false,

      }


    ], []
  )

  
  const table = useMaterialReactTable({
    columns,
    data: filteredData,
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