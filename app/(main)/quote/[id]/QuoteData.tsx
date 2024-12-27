

import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { ContractTable, FixedCostsTable, ConsultantCostsTable, ContractConditionsTable, RtpTable } from "./InteractiveTables";
  type QuoteDataProps = {
    projectId: string;
  };

  export async function QuoteData({ projectId }: QuoteDataProps) {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projectFinance")
      .select("*")
      .eq("id", projectId);
  
    if (error) {
      console.error('Error:', error)
      return []
    }
  
    const projectFinance = data[0];
    const contracts = projectFinance.contract;
    const fixedCost = projectFinance.costs;
    const fixedConsulentCost = projectFinance.consultantCosts;
    const contractCondition = projectFinance.contractCondition;
  
    return (
      <div className="grid gap-5">
        <ContractTable contracts={contracts} projectId={projectId}/>
        
        <div>
          <FixedCostsTable fixedCost={fixedCost} />
          <ConsultantCostsTable fixedConsulentCost={fixedConsulentCost} />
        </div>
  
        <ContractConditionsTable contractCondition={contractCondition} />
        {/* <RtpTable rtp={rtp} /> */}
      </div>
    );
  }
  