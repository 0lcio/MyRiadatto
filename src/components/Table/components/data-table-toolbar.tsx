"use client"

import { X } from "lucide-react"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options";
import { idOpera, statuses } from "../data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { NewProject } from "../../NewProject/new-project"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="md:flex md:flex-1 md:items-center md:space-x-2">
        <Input
          placeholder="Cerca..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("idOpera") && (
          <DataTableFacetedFilter
            column={table.getColumn("idOpera")}
            title="ID Opera"
            options={idOpera}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <NewProject />
      <DataTableViewOptions table={table} />
    </div>
  )
}
