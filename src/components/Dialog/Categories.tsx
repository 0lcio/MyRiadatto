import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function Categories() {
  // Dati di esempio con struttura gerarchica
  const data = [
    {
      categories: "EDILIZIA",
      gruppi: [
        {
          destination:
            "Insediamenti Produttivi Agricoltura-Industria-Artigianato",
          items: [
            {
              id: "E.01",
              description:
                "Edifici rurali per l'attività agricola con corredi tecnici di tipo semplice (quali tettoie, depositi e ricoveri) - Edifici industriali o artigianali di importanza costruttiva corrente con corredi tecnici di base.",
              complexgrade: "0.65",
            },
            {
              id: "E.02",
              description:
                "Edifici rurali per l'attività agricola con corredi tecnici di tipo complesso - Edifici industriali o artigianali con organizzazione e corredi tecnici di tipo complesso.",
              complexgrade: "0.95",
            },
          ],
        },
        {
          destination:
            "Industria Alberghiera, Turismo e Commercio e Servizi per la Mobilità",
          items: [
            {
              id: "E.03",
              description:
                "Ostelli, Pensioni, Case albergo - Ristoranti - Motel e stazioni di servizio - negozi - mercati coperti di tipo semplice",
              complexgrade: "0.95",
            },
            {
              id: "E.04",
              description:
                "Alberghi, Villaggi turistici - Mercati e Centri commerciali complessi",
              complexgrade: "1.20",
            },
          ],
        },
        {
          destination:
            "Residenza",
          items: [
            {
              id: "E.05",
              description:
                "Edifici, pertinenze, autorimesse semplici, senza particolari esigenze tecniche. Edifici provvisori di modesta importanza",
              complexgrade: "0.65",
            },
            {
              id: "E.06",
              description:
                "Edilizia residenziale privata e pubblica di tipo corrente con costi di costruzione nella media di mercato e con tipologie standardizzate.",
              complexgrade: "0.95",
            },
            {
              id: "E.07",
              description:
                "Edifici residenziali di tipo pregiato con costi di costruzione eccedenti la media di mercato e con tipologie diversificate.",
              complexgrade: "0.95",
            },
          ],
        },
      ],
    },
    {
      categories: "STRUTTURE",
      gruppi: [
        {
          destination: "Strutture, Opere infrastrutturali puntuali, non soggette ad azioni sismiche, ai sensi delle Norme Tecniche per le Costruzioni",
          items: [
            {
              id: "S.01",
              description: "Strutture o parti di strutture in cemento armato, non soggette ad azioni sismiche - riparazione o intervento locale - Verifiche strutturali  relative - Ponteggi, centinature e strutture provvisionali di durata inferiore a due anni",
              complexgrade: "0.70",
            },
            {
              id: "S.02",
              description: "Strutture o parti di strutture in muratura, legno, metallo, non soggette ad azioni sismiche - riparazione o intervento locale - Verifiche strutturali relative.",
              complexgrade: "0.50",
            },
          ],
        },
        {
          destination: "Strutture, Opere infrastrutturali puntuali",
          items: [
            {
              id: "S.03",
              description: "Strutture o parti di strutture in cemento armato - Verifiche strutturali relative - Ponteggi, centinature e strutture provvisionali di durata superiore a due anni.",
              complexgrade: "0.95",
            },
            {
              id: "S.04",
              description: "Strutture o parti di strutture in muratura, legno, metallo - Verifiche strutturali relative - Consolidamento delle opere di fondazione di manufatti dissestati - Ponti,  Paratie e tiranti, Consolidamento di pendii e di fronti rocciosi ed opere connesse, di tipo corrente -  Verifiche strutturali relative.",
              complexgrade: "0.90",
            },
          ],
        },
        {
          destination: "Strutture speciali",
          items: [
            {
              id: "S.05",
              description: "Dighe, Conche, Elevatori, Opere di ritenuta e di difesa, rilevati, colmate. Gallerie, Opere sotterranee e subacquee, Fondazioni speciali.",
              complexgrade: "1.05",
            },
            {
              id: "S.06",
              description: "Opere strutturali di notevole importanza costruttiva e richiedenti calcolazioni particolari - Verifiche strutturali relative - Strutture con metodologie normative che richiedono modellazione particolare: edifici alti con necessità di valutazioni di secondo ordine.",
              complexgrade: "1.15",
            },
          ],
        },
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const normalizeString = (str: string) => str.toLowerCase().replace(/\./g, '');
  // Funzione di filtro aggiornata per la nuova struttura
  const filteredData = data
    .map((superGroup) => ({
      ...superGroup,
      gruppi: superGroup.gruppi
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              normalizeString(item.id).includes(normalizeString(searchTerm))||
              item.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              group.destination
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              superGroup.categories
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((group) => group.items.length > 0),
    }))
    .filter((superGroup) => superGroup.gruppi.length > 0);

  return (
    <Dialog>
      <DialogTrigger>
        <span className="underline">qui</span>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[90vw] mx-auto">
        <DialogHeader>
          <DialogTitle>
            <span className="text-3xl">TAVOLA Z-1</span>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {/* Barra di ricerca */}
          <div className="flex gap-2">
            <Input
              placeholder="Cerca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            {searchTerm && (
              <Button
              variant="ghost"
              onClick={() => setSearchTerm("")}
              className=""
            >
              Cancella
              <X className="ml-2 h-4 w-4" />
            </Button>
            )}
          </div>

          {/* Corpo scrollabile */}
          <div className="max-h-[600px] min-h-[600px] overflow-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Destinazione funzionale</TableHead>
                  <TableHead>ID Opera</TableHead>
                  <TableHead>Descrizione</TableHead>
                  <TableHead>Grado di complessità</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((superGruppo, superIndex) => (
                  <React.Fragment key={superIndex}>
                    {superGruppo.gruppi.map((gruppo, gruppoIndex) => (
                      <React.Fragment key={`${superIndex}-${gruppoIndex}`}>
                        {gruppo.items.map((item, itemIndex) => (
                          <TableRow
                            key={`${superIndex}-${gruppoIndex}-${itemIndex}`}
                            className={itemIndex === 0 ? "border-t" : ""}
                          >
                            {/* Super Macro - mostra solo per il primo item del primo gruppo */}
                            {gruppoIndex === 0 && itemIndex === 0 && (
                              <TableCell
                                className="font-bold"
                                rowSpan={superGruppo.gruppi.reduce(
                                  (acc, g) => acc + g.items.length,
                                  0
                                )}
                              >
                                {superGruppo.categories}
                              </TableCell>
                            )}

                            {/* Macro Argomento - mostra solo per il primo item del gruppo */}
                            {itemIndex === 0 && (
                              <TableCell
                                className="font-medium max-w-10"
                                rowSpan={gruppo.items.length}
                              >
                                {gruppo.destination}
                              </TableCell>
                            )}

                            <TableCell className="font-mono">
                              {item.id}
                            </TableCell>
                            <TableCell className="break-words max-w-xl">
                              {item.description}
                            </TableCell>
                            <TableCell className="max-w-10">
                              {item.complexgrade}
                            </TableCell>
                          </TableRow>
                        ))}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>

            {/* Messaggio se non ci sono risultati */}
            {filteredData.length === 0 && (
              <div className="text-center p-4">Nessun risultato trovato.</div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
