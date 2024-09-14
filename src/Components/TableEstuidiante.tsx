import {useFetch} from "../useFetch.ts";
import {IEstudiante} from "../Types/IEstudiante.ts";
import {useMemo} from "react";
import {MaterialReactTable, MRT_ColumnDef, useMaterialReactTable} from "material-react-table";

export function TableEstudiante() {

    const {data} = useFetch<IEstudiante []>("http://localhost:8080/api/v1/estudiantes")

    const filteredData = useMemo(
        () => {
            return data
                ?data.map(estudiante => ({
                    id: estudiante.id,
                    nombre: estudiante.nombre,
                    apellido: estudiante.apellido,
                    email: estudiante.email,
                }))
                : [];
        }, [data]);


    const columns = useMemo<MRT_ColumnDef<IEstudiante> []>(

        () => [

            {
                accessorKey : "nombre",
                header : "Nombre",
                enableHiding : false,
            },
            {
                accessorKey : "apellido",
                header : "Apellido",
                enableHiding : false,

            },
            {
                accessorKey : "email",
                header : "Email",
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