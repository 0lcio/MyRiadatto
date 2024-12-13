import React, { useState } from "react";
import { Stepper } from "@/components/ui/stepper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
//import MultipleSelect from "./MultipleSelect";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox";

export function NewProject() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Info",
    },
    {
      title: "Importo",
    },
    {
      title: "Costi",
    },
    {
      title: "Steps",
    },
    {
      title: "RTP",
    },
  ];

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((current) => current + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((current) => current - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Registrazione completata");
    setIsOpen(false);
    setCurrentStep(0);
  };

  const handleDialogClose = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (!isOpen) {
      setCurrentStep(0);
    }
  };

  /* const exampleTitle = "Seleziona ID Opera";

  const exampleOptions = [
    { label: "E.01", value: "electronics" },
    { label: "E.02", value: "clothing" },
    { label: "E.03", value: "books" },
    { label: "E.04", value: "toys" },
    { label: "E.05", value: "a" },
    { label: "E.06", value: "b" },
    { label: "E.07", value: "c" },
    { label: "E.08", value: "d" },
  ]; */

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <Label>Titolo</Label>
              <Input
                placeholder="Inserisci titolo progetto"
              />
            </div>
            <div className="flex items-center gap-5">
              <Label>Scadenza</Label>
              <Popover>
                <PopoverTrigger asChild>
                <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className=""
                />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>Committenza</Label>
              <Input
                placeholder="Inserisci codice progetto"
              />
            </div>
            <div>
              <Label>Livello Progettuale</Label>
              <Input
                placeholder="Inserisci codice progetto"
              />
            </div>
            <div>
              <Label>Descrizione</Label>
              <Textarea
                placeholder="Inserisci descrizione"
              />
            </div>
            <div className="flex items-center gap-3">
              <Label>Preventivo o Gara?</Label>
              <Checkbox />
            </div>
            <div className="flex items-center gap-3">
              <Label>RTP?</Label>
              <Checkbox />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label>Ente</Label>
              <Input
                placeholder="Scegli ente"
              />
            </div>
            <div>
              <Label>Tecnico incaricato</Label>
              <Input
                placeholder="Inserisci tecnico incaricato"
              />
            </div>
            {/* <div className="flex items-center gap-4">
              <Label>ID Opera</Label>
              <MultipleSelect title={exampleTitle} options={exampleOptions} />
            </div> */}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Label>Conferma dati</Label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogTrigger asChild>
        <Button className="h-8 mx-3">Nuova commessa</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Nuova commessa</DialogTitle>
          <DialogDescription>Crea una nuova commessa</DialogDescription>
        </DialogHeader>

        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepChange={handleStepChange}
        />

        <div className="mt-6 mb-4 min-h-[400px] ">{renderStepContent()}</div>

        <div className="flex justify-between">
          {currentStep > 0 && (
            <Button variant="outline" onClick={handlePreviousStep}>
              Indietro
            </Button>
          )}

          {currentStep < steps.length - 1 ? (
            <Button
              onClick={handleNextStep}
              variant="outline"
              className="ml-auto border border-yellow-500"
            >
              Avanti
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="ml-auto">
              Crea
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
