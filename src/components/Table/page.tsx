import React, { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Return test data
  return [
    {
      id: "BRT_10_24",
      location: "Comune di Borgo Ticino",
      title:
        "RIPRISTINO DISSESTO IDROGEOLOGICO SUL RIO ORGOGLIA E MESSA IN SICUREZZA DEL PONTE DI VIA VALLE",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_11_24",
      location: "Comune di Borgo Ticino",
      title: "Project",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_12_24",
      location: "Comune di Borgo Ticino",
      title: "Test",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_13_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_14_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_15_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_16_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_17_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_18_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_19_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    {
      id: "BRT_20_24",
      location: "Comune di Borgo Ticino",
      title: "Portfolio",
      assigned: "Studio Riadatto",
      status: "pending",
      idOpera: ["E.01", "E.02", "E.03"],
      email: "m@example.com",
    },
    // Add more test data if needed
  ];
}

const MainTable: React.FC = () => {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mx-auto pb-15 scrollbar-hidden">
      <p className="text-2xl font-bold">PROGETTI</p>
      <p className="text-sm text-muted-foreground pb-5">Clicca su uno dei progetti per poter vedere il contenuto</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default MainTable;
