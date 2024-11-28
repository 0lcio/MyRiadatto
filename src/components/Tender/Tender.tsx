/* import { toast } from "sonner"; */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TenderData } from "./components/TenderData";
import { TenderCharts } from "./components/TenderCharts";
export function BadgeSecondary() {
  return;
}
export function Tender() {
  return (
    <>
      {/* <button
        onClick={() =>
          toast.message("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
           toast.success (green) - toast.info (blue) - toast.warning (orange) - toast.error (red)
        }
      >
        Give me a toast
      </button> */}
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-6">
              <h1 className="text-lg font-semibold md:text-4xl">BRT_23_02</h1>
              <Badge variant="outline">Preventivo</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="text-lg font-extralight pt-1">
              RIPRISTINO DISSESTO IDROGEOLOGICO SUL RIO ORGOGLIA E MESSA IN
              SICUREZZA DEL PONTE DI VIA VALLE
            </h1>
            <div className="flex items-center gap-10 pt-4">
              <div className="flex items-center gap-2">
                <MapPin />
                <p>Borgo Ticino</p>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase />
                <p>Studio Riadatto</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="md:flex gap-3 pt-5">
        <TenderData />
        <TenderCharts />
      </div>
    </>
  );
}
