import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const contract = [
  {
    invoice: "Importo a base di gara",
    totalAmount: "225,148.57 €",
  },
  {
    invoice: "Importo non soggetto a ribasso",
    totalAmount: "0.00 €",
  },
  {
    invoice: "Ribasso Offerto",
    totalAmount: "0,00%",
  },
];

const fixedCost = [
  {
    invoice: "Polizza RC",
    totalAmount: "3,300.00 €",
  },
  {
    invoice: "Notaio RTP",
    totalAmount: "1,000.00 €",
  },
  {
    invoice: "Altro",
    totalAmount: "0.00 €",
  },
];

const fixedConsulentCost = [
  {
    invoice: "Archeologo",
    totalAmount: "1,500.00 €",
  },
  {
    invoice: "Geologo - Bonifica",
    totalAmount: "9,100.00 €",
  },
  {
    invoice: "Ingegnere Acustico",
    totalAmount: "1,500.00 €",
  },
  {
    invoice: "Agronomo",
    totalAmount: "4,000.00 €",
  },
  {
    invoice: "Consulente LEED / CAM",
    totalAmount: "8,000.00 €",
  },
];

const contractCondition = [
  {
    invoice: "Step 1",
    totalAmount: "44.316%",
  },
  {
    invoice: "Step 2",
    totalAmount: "18.993%",
  },
  {
    invoice: "Step 3",
    totalAmount: "25.684%",
  },
  {
    invoice: "Step 4",
    totalAmount: "11.007%",
  },
  {
    invoice: "Step 5",
    totalAmount: "0.0%",
  },
];

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


export function TenderCostsRevenues() {
  return (
    <div className="grid gap-5">
      <Table className="bg-green-400/[0.08]">
        <TableBody>
          {contract.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="">{invoice.invoice}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
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
              225,148.57 €
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* TABELLA COSTI FISSI */}
      <div>
        <Table className="bg-red-400/[0.08]">
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
                <TableCell className="">{invoice.invoice}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* TABELLA COSTI CONSULENTI FISSI */}
        <Table className="bg-red-400/[0.08]">
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
                <TableCell className="">{invoice.invoice}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={1} className="font-semibold">
                TOTALE COSTI
              </TableCell>
              <TableCell className="font-semibold text-right">25,500.00 €</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      
      {/* TABELLA CONDIZIONI CONTRATTUALI */}
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
              <TableCell className="">{invoice.invoice}</TableCell>
              <TableCell className="">{invoice.totalAmount}</TableCell>
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

      {/* TABELLA RTP */}
      <Table>
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
    </div>
  );
}
