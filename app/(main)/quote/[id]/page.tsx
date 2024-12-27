import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { QuoteData } from "./QuoteData";

type Props = {
  params: { id: string };
};

export default async function QuoteProject({ params }: Props) {
  const { id } = params;
  const supabase = createClient();
  const { data, error } = await supabase
    .from("project")
    .select("*")
    .eq("id", id);
  if (error || !data || data.length === 0) {
    /* toast.error("Errore nel caricamento del progetto"); */
    redirect("/quote");
    return null; // Ensure the function returns null after redirect
  }
  const project = data[0];

  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-6">
              <h1 className="text-lg font-semibold md:text-4xl">
                {project.title}
              </h1>
              <Badge variant="outline">Non attivo</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="text-lg font-extralight pt-1">
              {project.description}
            </h1>
            <div className="flex items-center gap-10 pt-4">
              <div className="flex items-center gap-2">
                <MapPin />
                <p>{project.client}</p>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase />
                <p>{project.projectLevel}</p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar />
                <p>{project.deadline}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="md:grid grid-cols-1 md:grid-cols-3 gap-3 pt-5">
        <div className="md:col-span-1">
        <QuoteData projectId={project.id}/>
        </div>
        <div className="md:col-span-2">
        </div>
      </div>
    </div>
  );
}