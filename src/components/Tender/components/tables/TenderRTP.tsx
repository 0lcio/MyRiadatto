import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table2";

export function TenderRTP() {
    const rtp = [
        {
          invoice: "Studio Riadatto",
          rtp: "75.00%",
          grossAmount: "168,861.43 €",
          netAmount: "147,561.43 €",
          step1: "168,861.43 €",
          step2: "168,861.43 €",
          step3: "168,861.43 €",
          step4: "168,861.43 €",
          step5: "168,861.43 €",
        },
        {
          invoice: "Ing. Rossi",
          rtp: "20.00%",
          grossAmount: "45,029.71 €",
          netAmount: "39,349.71 €",
          step1: "168,861.43 €",
          step2: "168,861.43 €",
          step3: "168,861.43 €",
          step4: "168,861.43 €",
          step5: "168,861.43 €",
        },
        {
          invoice: "Geol. Bianchi",
          rtp: "4.00%",
          grossAmount: "9,005.94 €",
          netAmount: "7,869.94 €",
          step1: "168,861.43 €",
          step2: "168,861.43 €",
          step3: "168,861.43 €",
          step4: "168,861.43 €",
          step5: "168,861.43 €",
        },
        {
          invoice: "Marco Rossi",
          rtp: "1.00%",
          grossAmount: "2,251.49 €",
          netAmount: "1,967.49 €",
          step1: "168,861.43 €",
          step2: "168,861.43 €",
          step3: "168,861.43 €",
          step4: "168,861.43 €",
          step5: "168,861.43 €",
        },
      ];
      
  return (
    <Table className='w-1/2 hidden md:block'>
    <TableHeader>
      <TableRow>
        <TableHead className="font-semibold">
          RTP
        </TableHead>
        <TableHead className="font-semibold">%</TableHead>
        <TableHead className="font-semibold text-right">
          LORDO DA RIPARTIRE
        </TableHead>
        <TableHead className="font-semibold text-right">
          NETTO DA RIPARTIRE
        </TableHead>
        <TableHead className="font-semibold text-right">
          STEP 1
        </TableHead>
        <TableHead className="font-semibold text-right">
          STEP 2
        </TableHead>
        <TableHead className="font-semibold text-right">
          STEP 3
        </TableHead>
        <TableHead className="font-semibold text-right">
          STEP 4
        </TableHead>
        <TableHead className="font-semibold text-right">
          STEP 5
        </TableHead>
        <TableHead className="font-semibold text-right">
          TOTALE
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rtp.map((invoice) => (
        <TableRow key={invoice.invoice}>
          <TableCell className="">{invoice.invoice}</TableCell>
          <TableCell className="">{invoice.rtp}</TableCell>
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
  )
}
