// components/InteractiveTables.tsx
"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table2";
import { ContractEditDialog, FixedCostsEditDialog } from "./TableDialogs";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

function calculateTotal(contracts) {
  let baseImport = 0;
  let nonDiscountedImport = 0;
  let discountOffered = 0;

  // Trova gli importi necessari per il calcolo
  contracts.forEach((invoice) => {
    if (invoice.invoice === "Importo a base di gara") {
      baseImport = parseFloat(invoice.amount); // Assicurati che amount sia un numero
    }
    if (invoice.invoice === "Importo non soggetto a ribasso") {
      nonDiscountedImport = parseFloat(invoice.amount);
    }
    if (invoice.invoice === "Ribasso offerto") {
      discountOffered = parseFloat(invoice.amount) / 100; // Converti in percentuale
    }
  });

  // Calcolo finale
  return baseImport * (1 - discountOffered) + nonDiscountedImport;
}

export function ContractTable({ contracts, projectId }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const totalAmountInContract = calculateTotal(contracts);
  return (
    <>
      <Table
        className="bg-green-400/[0.08]"
        onDoubleClick={() => setDialogOpen(true)}
      >
        <TableBody>
          {contracts.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>{invoice.invoice}</TableCell>
              <TableCell className="text-right">
                {invoice.amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1} className="font-semibold">
              IMPORTO IN CONTRATTO
            </TableCell>
            <TableCell className="font-semibold text-right">
              {totalAmountInContract.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              €
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <ContractEditDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        data={contracts}
        projectId={projectId}
        onSave={async (newData, projectId) => {
          // Implementa qui la logica di salvataggio con supabase
          console.log(projectId);
          console.log(newData);
          const supabase = createClient();
          const { error } = await supabase
            .from("projectFinance")
            .update({ contract: newData })
            .eq("id", projectId);
          if (error) {
            toast.error("Errore durante il salvataggio del contratto");
            return [];
          } else {
            toast.success("Contratto aggiornato con successo");
          }
        }}
      />
    </>
  );
}

export function FixedCostsTable({ fixedCost, projectId  }) {
    const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
    <Table className="bg-red-400/[0.08]"
    onDoubleClick={() => setDialogOpen(true)}>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-red-600">
            COSTI FISSI
          </TableHead>
          <TableHead className="font-semibold text-right text-red-600">
            IMPORTO
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fixedCost.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell className="text-right">
              {invoice.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              €
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <FixedCostsEditDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        data={fixedCost}
        projectId={projectId}
        onSave={async (newData, projectId) => {
          // Implementa qui la logica di salvataggio con supabase
          console.log(projectId);
          console.log(newData);
          const supabase = createClient();
          const { error } = await supabase
            .from("projectFinance")
            .update({ costs: newData })
            .eq("id", projectId);
          if (error) {
            toast.error("Errore durante il salvataggio del contratto");
            return [];
          } else {
            toast.success("Contratto aggiornato con successo");
          }
        }}
      />
    </>
  );
}

export function ConsultantCostsTable({ fixedConsulentCost, projectId  }) {
    const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
    <Table className="bg-red-400/[0.08]"
    onDoubleClick={() => setDialogOpen(true)}>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-red-600">
            CONSULENTI COSTI FISSI
          </TableHead>
          <TableHead className="font-semibold text-right text-red-600">
            IMPORTO
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fixedConsulentCost.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell className="text-right">
              {invoice.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              €
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={1} className="font-semibold">
            TOTALE COSTI
          </TableCell>
          <TableCell className="font-semibold text-right">
            ?
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    <FixedCostsEditDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        data={fixedConsulentCost}
        projectId={projectId}
        onSave={async (newData, projectId) => {
          // Implementa qui la logica di salvataggio con supabase
          console.log(projectId);
          console.log(newData);
          const supabase = createClient();
          const { error } = await supabase
            .from("projectFinance")
            .update({ consultantCosts: newData })
            .eq("id", projectId);
          if (error) {
            toast.error("Errore durante il salvataggio del contratto");
            return [];
          } else {
            toast.success("Contratto aggiornato con successo");
          }
        }}
      />
    </>
  );
}

export function ContractConditionsTable({ contractCondition }) {
  return (
    <Table className="bg-green-400/[0.08]">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-green-600">
            CONDIZIONI CONTRATTUALI
          </TableHead>
          <TableHead className="font-semibold text-green-600">%</TableHead>
          <TableHead className="font-semibold text-right text-green-600">
            IMPORTO
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contractCondition.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>
              {invoice.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </TableCell>
            <TableCell className="text-right">0.00 €</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={1} className="font-semibold">
            TOTALE
          </TableCell>
          <TableCell className="font-semibold">100%</TableCell>
          <TableCell className="font-semibold text-right">0.00 €</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export function RtpTable({ rtp }) {
  return (
    <Table className="md:hidden">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">RTP</TableHead>
          <TableHead className="font-semibold">%</TableHead>
          <TableHead className="font-semibold text-right">
            LORDO DA RIPARTIRE
          </TableHead>
          <TableHead className="font-semibold text-right">
            NETTO DA RIPARTIRE
          </TableHead>
          <TableHead className="font-semibold text-right">STEP 1</TableHead>
          <TableHead className="font-semibold text-right">STEP 2</TableHead>
          <TableHead className="font-semibold text-right">STEP 3</TableHead>
          <TableHead className="font-semibold text-right">STEP 4</TableHead>
          <TableHead className="font-semibold text-right">STEP 5</TableHead>
          <TableHead className="font-semibold text-right">TOTALE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rtp.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.rtp}</TableCell>
            <TableCell className="text-right">{invoice.grossAmount}</TableCell>
            <TableCell className="text-right">{invoice.netAmount}</TableCell>
            <TableCell className="text-right">{invoice.step1}</TableCell>
            <TableCell className="text-right">{invoice.step2}</TableCell>
            <TableCell className="text-right">{invoice.step3}</TableCell>
            <TableCell className="text-right">{invoice.step4}</TableCell>
            <TableCell className="text-right">{invoice.step5}</TableCell>
            <TableCell className="text-right">CIFRA TOTALE</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
