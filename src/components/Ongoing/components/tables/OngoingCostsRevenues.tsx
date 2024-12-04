import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table2";
  
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
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
    },
    {
      invoice: "Notaio RTP",
      totalAmount: "1,000.00 €",
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
    },
    {
      invoice: "Altro",
      totalAmount: "0.00 €",
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
    },
  ];
  
  const fixedConsulentCost = [
    {
      invoice: "Archeologo",
      totalAmount: "1,500.00 €",
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
    },
    {
      invoice: "Geologo - Bonifica",
      totalAmount: "9,100.00 €",
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
    },
    {
      invoice: "Ingegnere Acustico",
      totalAmount: "1,500.00 €",
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
    },
    {
      invoice: "Agronomo",
      totalAmount: "4,000.00 €",
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
    },
    {
      invoice: "Consulente LEED/CAM",
      totalAmount: "8,000.00 €",
      invoiceDate: "01/01/2021",
      invoiceAmount: "3,300.00 €",
      invoicePaid: "No",
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
  
  
  export function OngoingCostsRevenues() {
    return (
    <>
      <div className="pb-5">
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
       </div>

        {/* TABELLA COSTI FISSI */}
        <div className="pb-5">
          <Table className="bg-red-400/[0.08] border-r">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4 font-semibold text-red-600">
                  COSTI FISSI
                </TableHead>
                <TableHead className="font-semibold text-right text-red-600">
                  IMPORTO
                </TableHead>
                <TableHead className="font-semibold text-center text-red-600">
                  DATA FATTURA
                </TableHead>
                <TableHead className="font-semibold text-right text-red-600">
                  IMPORTO FATTURA
                </TableHead>
                <TableHead className="font-semibold text-center text-red-600">
                  EFFETTUATO
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
                  <TableCell className="text-center">{invoice.invoiceDate}</TableCell>
                  <TableCell className="text-right">
                    {invoice.invoiceAmount}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.invoicePaid}
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* TABELLA COSTI CONSULENTI FISSI */}
          <Table className="bg-red-400/[0.08] border-r">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4 font-semibold text-red-600">
                  CONSULENTI COSTI FISSI
                </TableHead>
                <TableHead className="font-semibold text-right text-red-600">
                  IMPORTO
                </TableHead>
                <TableHead className="font-semibold text-center text-red-600">
                  DATA FATTURA
                </TableHead>
                <TableHead className="font-semibold text-right text-red-600">
                  IMPORTO FATTURA
                </TableHead>
                <TableHead className="font-semibold text-center text-red-600">
                  EFFETTUATO
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
                  <TableCell className="text-center">{invoice.invoiceDate}</TableCell>
                  <TableCell className="text-right">
                    {invoice.invoiceAmount}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.invoicePaid}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table className="bg-red-400/[0.08]">
          <TableFooter>
            <TableRow>
              <TableCell colSpan={1} className="font-semibold">
                TOTALE COSTI
              </TableCell>
              <TableCell className="font-semibold text-right">
                225,148.57 €
              </TableCell>
              <TableCell colSpan={1} className="font-semibold">
                SALDATO
              </TableCell>
              <TableCell className="font-semibold text-right">
                225,148.57 €
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
          </div>


        {/* TABELLA CONDIZIONI CONTRATTUALI */}
        <div className="pb-5">
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
        </div>


        {/* TABELLA RTP */}
        <div className="pb-5">
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
        </>
    );
  }
  