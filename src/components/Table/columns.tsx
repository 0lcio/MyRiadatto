"use client";
import { Link, useLocation } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components/data-table-row-actions";

export type Payment = {
  id: string;
  location: string;
  title: string;
  assigned: string;
  status: "pending" | "processing" | "success" | "failed";
  idOpera: string[];
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Codice" />
    ),
    accessorKey: "id",
    cell: (info) => {
      const location = useLocation();
      const currentPath = location.pathname;
      const newPath = `${currentPath}/${info.getValue()}`;
      return (
        <Link to={newPath}>
          {info.getValue()}
        </Link>
      );
    },
  },
  {
    id: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ente" />
    ),
    accessorKey: "location",
    cell: (info) => {
      const location = useLocation();
      const currentPath = location.pathname;
      const newPath = `${currentPath}/${info.row.original.id}`;
      return (
        <Link to={newPath}>
          {info.getValue()}
        </Link>
      );
    }
  },
  {
    id: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    accessorKey: "title",
    cell: (info) => {
      const location = useLocation();
      const currentPath = location.pathname;
      const newPath = `${currentPath}/${info.row.original.id}`;
      return (
        <Link to={newPath}>
          {info.getValue()}
        </Link>
      );
    },
  },
  {
    id: "assigned",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tecnico Incaricato" />
    ),
    accessorKey: "assigned",
    cell: (info) => {
      const location = useLocation();
      const currentPath = location.pathname;
      const newPath = `${currentPath}/${info.row.original.id}`;
      return (
        <Link to={newPath}>
          {info.getValue()}
        </Link>
      );
    },
  },
  {
    id: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    accessorKey: "status",
    cell: (info) => info.getValue(),
  },
  {
    id: "idOpera",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID Opera" />
    ),
    accessorKey: "idOpera",
    cell: (info) => {
      const value = info.getValue();
      return Array.isArray(value) ? value.join(" - ") : "";
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];