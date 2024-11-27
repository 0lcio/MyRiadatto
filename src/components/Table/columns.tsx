"use client";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components/data-table-row-actions";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
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
    cell: (info) => (
      <Link to={`/${info.getValue()}`}>
        {info.getValue()}
      </Link>
    ),
  },
  {
    id: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ente" />
    ),
    accessorKey: "location",
    cell: (info) => (
      <Link to={`/${info.row.original.id}`}>
        {info.getValue()}
      </Link>
    )
  },
  {
    id: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    accessorKey: "title",
    cell: (info) => (
      <Link to={`/${info.row.original.id}`}>
        {info.getValue()}
      </Link>
    ),
  },
  {
    id: "assigned",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tecnico Incaricato" />
    ),
    accessorKey: "assigned",
    cell: (info) => (
      <Link to={`/${info.row.original.id}`}>
        {info.getValue()}
      </Link>
    ),
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
  /* {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  }, */
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
