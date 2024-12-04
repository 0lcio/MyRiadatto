import React from 'react';
import { Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Step {
  title: string;
  subtitle?: string;
  isValid?: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepChange: (step: number) => void;
  allowNavigationToCompletedSteps?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({ 
  steps, 
  currentStep, 
  onStepChange,
  allowNavigationToCompletedSteps = true
}) => {
  const canNavigateToStep = (stepIndex: number) => {
    return allowNavigationToCompletedSteps || 
           stepIndex <= currentStep;
  };

  return (
    <div className="w-full py-4 px-2">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger 
                disabled={!canNavigateToStep(index)}
                onClick={() => canNavigateToStep(index) && onStepChange(index)}
                className={`
                  flex flex-col items-center cursor-pointer 
                  ${canNavigateToStep(index) ? 'cursor-pointer' : 'cursor-not-allowed'}
                  ${index <= currentStep 
                    ? 'text-primary hover:opacity-80' 
                    : 'text-muted-foreground'
                  }
                  transition-all duration-200
                `}
              >
                <div 
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center 
                    border-2 mb-2
                    ${index < currentStep 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : index === currentStep 
                      ? 'border-primary' 
                      : 'border-muted-foreground'
                    }
                  `}
                >
                  {index < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
                
                <div className="text-center">
                  <div className="font-semibold text-sm">{step.title}</div>
                  {step.subtitle && (
                    <div className="text-xs text-muted-foreground">
                      {step.subtitle}
                    </div>
                  )}
                </div>
              </TooltipTrigger>
              
              {!canNavigateToStep(index) && (
                <TooltipContent>
                  <p>Completa gli step precedenti</p>
                </TooltipContent>
              )}
            </Tooltip>
            
            {index < steps.length - 1 && (
              <div 
                className={`
                  w-full h-0.5 mx-2
                  ${index < currentStep ? 'bg-primary' : 'bg-muted-foreground'}
                `}
              />
            )}
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Stepper;