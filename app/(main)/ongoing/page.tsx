import { Project, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { createClient } from "@/utils/supabase/client";

async function getData(): Promise<Project[]> {
  const supabase = await createClient();
   const { data, error } = await supabase
    .from('project')
    .select('*')
    .eq('active', true)
    
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
      <p className="text-3xl font-bold">GARE IN CORSO</p>
      <p className="text-sm text-muted-foreground pb-5">
        Clicca su uno dei progetti per poter vedere il contenuto
      </p>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default QuotePage;
