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
import MultipleSelect from "./MultipleSelect";

export function NewProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      description: "",
    },
    accountDetails: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    preferences: {
      notifications: false,
      newsletter: false,
    },
  });

  const steps = [
    {
      title: "Titolo",
    },
    {
      title: "Info",
    },
    {
      title: "Conferma",
    },
  ];

  const handleInputChange = (
    section: string,
    field: string,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

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
    console.log("Registrazione completata", formData);
    setIsOpen(false);
  };

  const exampleTitle = "Seleziona ID Opera";

  const exampleOptions = [
    { label: "E.01", value: "electronics" },
    { label: "E.02", value: "clothing" },
    { label: "E.03", value: "books" },
    { label: "E.04", value: "toys" },
    { label: "E.05", value: "a" },
    { label: "E.06", value: "b" },
    { label: "E.07", value: "c" },
    { label: "E.08", value: "d" },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <Label>Titolo</Label>
              <Input
                value={formData.personalInfo.firstName}
                onChange={(e) =>
                  handleInputChange("personalInfo", "firstName", e.target.value)
                }
                placeholder="Inserisci titolo progetto"
              />
            </div>
            <div>
              <Label>Codice Progetto</Label>
              <Input
                value={formData.personalInfo.lastName}
                onChange={(e) =>
                  handleInputChange("personalInfo", "lastName", e.target.value)
                }
                placeholder="Inserisci codice progetto"
              />
            </div>
            <div>
              <Label>Descrizione</Label>
              <Textarea
                value={formData.personalInfo.description}
                onChange={(e) =>
                  handleInputChange(
                    "personalInfo",
                    "description",
                    e.target.value
                  )
                }
                placeholder="Inserisci descrizione"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label>Ente</Label>
              <Input
                value={formData.accountDetails.username}
                onChange={(e) =>
                  handleInputChange(
                    "accountDetails",
                    "username",
                    e.target.value
                  )
                }
                placeholder="Scegli ente"
              />
            </div>
            <div>
              <Label>Tecnico incaricato</Label>
              <Input
                type="password"
                value={formData.accountDetails.password}
                onChange={(e) =>
                  handleInputChange(
                    "accountDetails",
                    "password",
                    e.target.value
                  )
                }
                placeholder="Inserisci tecnico incaricato"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label>ID Opera</Label>
              <MultipleSelect title={exampleTitle} options={exampleOptions} />
            </div>
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="h-8 mx-3">Nuovo Progetto</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Nuovo progetto</DialogTitle>
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
