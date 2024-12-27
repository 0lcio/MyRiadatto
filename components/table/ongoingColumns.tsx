"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./components/data-table-column-header";
import { DataTableRowActions } from "./components/data-table-row-actions";

export type Project = {
  id: number;
  title: string;
  deadline: Date;
  projectLevel: string;
  client: string;
  description: string;
  gara: boolean;
  rtp: boolean;
};

export const columns: ColumnDef<Project>[] = [
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
      const id = info.getValue() as string; // Ottieni il valore dell'ID
      return (
        <Link href={`/quote/${id}`}>
          {id}
        </Link>
      );
    },
  },
  {
    id: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titolo" />
    ),
    accessorKey: "title",
    cell: (info) => {
      const id = info.row.original.id; // Ottieni l'ID dalla riga corrente
      const location = info.getValue() as string;
      return (
        <Link href={`/quote/${id}`}>
          {location}
        </Link>
      );
    },
  },
  {
    id: "deadline",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Scadenza" />
    ),
    accessorKey: "deadline",
    cell: (info) => {
      const id = info.row.original.id; // Ottieni l'ID dalla riga corrente
      const location = info.getValue() as string;
      return (
        <Link href={`/quote/${id}`}>
          {location}
        </Link>
      );
    },
  },
  {
    id: "projectLevel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Livello Progettuale" />
    ),
    accessorKey: "projectLevel",
    cell: (info) => {
      const id = info.row.original.id; // Ottieni l'ID dalla riga corrente
      const location = info.getValue() as string;
      return (
        <Link href={`/quote/${id}`}>
          {location}
        </Link>
      );
    },
  },
  {
    id: "client",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cliente" />
    ),
    accessorKey: "client",
    cell: (info) => {
      const id = info.row.original.id; // Ottieni l'ID dalla riga corrente
      const location = info.getValue() as string;
      return (
        <Link href={`/quote/${id}`}>
          {location}
        </Link>
      );
    },
  },
  {
    id: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrizione" />
    ),
    accessorKey: "description",
    cell: (info) => {
      const id = info.row.original.id; // Ottieni l'ID dalla riga corrente
      const location = info.getValue() as string;
      return (
        <Link href={`/quote/${id}`}>
          {location}
        </Link>
      );
    },
  },
  /* {
    id: "gara",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gara" />
    ),
    accessorKey: "gara",
    cell: (info) => info.getValue(),
  },
  {
    id: "rtp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="RTP" />
    ),
    accessorKey: "rtp",
    cell: (info) => info.getValue(),
  }, */
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];