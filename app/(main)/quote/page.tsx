import { Project, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { NewProject } from "./new_project";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

async function getData(): Promise<Project[]> {
  const supabase = await createClient();
   const { data, error } = await supabase
    .from('project')
    .select('*')
    .eq('active', false)

  if (error) {
    console.error('Error:', error)
    return []
  }
  
  return data || []
}

const QuotePage = async () => {
  const data = await getData();

  return (
    <div className="mx-auto pb-15 scrollbar-hidden">
      <p className="text-3xl font-bold">PREVENTIVI / GARE</p>
      <p className="text-sm text-muted-foreground pb-5">
        Clicca su uno dei progetti per poter vedere il contenuto
      </p>
      <Dialog>
        <DialogTrigger>
          <Button>Nuovo</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">NUOVA COMMESSA</DialogTitle>
            <DialogDescription>
              Inserisci i dati della nuova commessa
            </DialogDescription>
          </DialogHeader>
          <NewProject />
        </DialogContent>
      </Dialog>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default QuotePage;
