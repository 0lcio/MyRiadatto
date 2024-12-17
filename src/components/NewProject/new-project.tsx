import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm, useFieldArray, useFormContext } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { defineStepper } from "@stepperize/react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const infoSchema = z.object({
  title: z.string().min(1, {
    message: "Inserire un titolo",
  }),
  deadline: z.date({
    message: "Inserire una data",
  }),
  projectLevel: z.string().min(1, "Inserire un livello di progetto"),
  client: z.string().min(1, "Inserire un cliente"),
  description: z.string(),
  gara: z.boolean(),
  rtp: z.boolean(),
  baseAmount: z.string(),
  nonDiscountableAmount: z.string(),
  discount: z.string(),
  costsRows: z.array(
    z.object({
      colonna1: z.string().min(1, { message: "Campo richiesto" }),
      colonna2: z.string().min(1, { message: "Campo richiesto" }),
    })
  ),
  consultantCostsRows: z.array(
    z.object({
      colonna1: z.string().min(1, { message: "Campo richiesto" }),
      colonna2: z.string().min(1, { message: "Campo richiesto" }),
    })
  ),
  contractRows: z.array(
    z.object({
      colonna1: z.string().min(1, { message: "Campo richiesto" }),
      colonna2: z.string().min(1, { message: "Campo richiesto" }),
    })
  ),
  rtpRows: z.array(
    z.object({
      colonna1: z.string().min(1, { message: "Campo richiesto" }),
      colonna2: z.string().min(1, { message: "Campo richiesto" }),
    })
  ),
});

export function NewProject() {
  const [date, setDate] = React.useState<Date>();
  
  const form = useForm<z.infer<typeof infoSchema>>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      title: "",
      deadline: new Date(),
      projectLevel: "",
      client: "",
      description: "",
      gara: false,
      rtp: false,
      baseAmount: "",
      nonDiscountableAmount: "",
      discount: "",
      costsRows: [{ colonna1: "", colonna2: "" }],
      contractRows: [{ colonna1: "", colonna2: "" }],
      rtpRows: [{ colonna1: "", colonna2: "" }],
    },
  });

  const { useStepper, steps } = defineStepper(
    { id: "info", label: "Info", schema: infoSchema },
    { id: "payment", label: "Importo", schema: infoSchema },
    { id: "fixedCost", label: "Costi", schema: infoSchema },
    { id: "contract", label: "Condizioni", schema: infoSchema },
    form.watch("rtp") && { id: "rtp", label: "RTP", schema: infoSchema }
  );
  const stepper = useStepper();

  const {
    fields: costsRows,
    append: appendCostsRow,
    remove: removeCostsRow,
  } = useFieldArray({
    control: form.control,
    name: "costsRows",
  });

  const {
    fields: consultantCostsRows,
    append: appendConsultantCostsRow,
    remove: removeConsultantCostsRow,
  } = useFieldArray({
    control: form.control,
    name: "consultantCostsRows",
  });

  const {
    fields: contractRows,
    append: appendContractRow,
    remove: removeContractRow,
  } = useFieldArray({
    control: form.control,
    name: "contractRows",
  });

  const {
    fields: rtpRows,
    append: appendRtpRow,
    remove: removeRtpRow,
  } = useFieldArray({
    control: form.control,
    name: "rtpRows",
  });

  const onSubmit = (data: z.infer<typeof infoSchema>) => {
    stepper.reset();
    console.log(data);
    // Qui puoi gestire l'invio dei dati
  };

  return (
    <>
    <Dialog onOpenChange={(isOpen) => {
      stepper.goTo("info");
      if (!isOpen) {
        form.reset();
        stepper.reset();
        stepper.goTo("info");
      }
    }}>
        <DialogTrigger>
          <Button className="h-8 mx-2">Nuova Commessa</Button>
        </DialogTrigger>
        <DialogContent>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium">Nuova Commessa</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Step {stepper.current.index + 1} of {steps.length}
              </span>
            </div>
          </div>
          <nav aria-label="Checkout Steps" className="group my-4">
            <ol
              className="flex items-center justify-between gap-2"
              aria-orientation="horizontal"
            >
              {stepper.all.map((step, index, array) => (
                <React.Fragment key={step.id}>
                  <li className="flex items-center gap-4 flex-shrink-0">
                    <Button
                      type="button"
                      role="tab"
                      variant={
                        index <= stepper.current.index ? "default" : "secondary"
                      }
                      aria-current={
                        stepper.current.id === step.id ? "step" : undefined
                      }
                      aria-posinset={index + 1}
                      aria-setsize={steps.length}
                      aria-selected={stepper.current.id === step.id}
                      className="flex size-10 items-center justify-center rounded-full"
                      onClick={() => stepper.goTo(step.id)}
                    >
                      {index + 1}
                    </Button>
                    <span className="text-sm font-medium">{step.label}</span>
                  </li>
                  {index < array.length - 1 && (
                    <Separator
                      className={`flex-1 ${
                        index < stepper.current.index
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>
          {/* STEPPER SWITCH */}
          <div className="space-y-4">
            {stepper.switch({
              /* DATI INIZIALI */
              info: () => (
                <>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Titolo</FormLabel>
                        <FormControl>
                          <Input placeholder="Inserisci titolo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Scadenza</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Seleziona una data</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                                initialFocus
                              />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Livello Progettuale</FormLabel>
                        <FormControl>
                          <Input placeholder="Inserisci livello" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="client"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Committenza</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Inserisci committente"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrizione</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Inserisci la descrizione"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gara"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="pr-3">Gara?</FormLabel>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {form.watch("gara") && (
                    <FormField
                      control={form.control}
                      name="rtp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="pr-3">RTP?</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}
                </>
              ),
              /* IMPORTO IN CONTRATTO */
              payment: () => (
                <>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Importo a base di gara
                        </TableCell>
                        <FormField
                          control={form.control}
                          name="baseAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <TableCell className="text-right">
                                  <div className="relative">
                                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                      €
                                    </span>
                                    <Input
                                      placeholder="Inserisci importo"
                                      className="pl-6 text-right"
                                      {...field}
                                    />
                                  </div>
                                </TableCell>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Importo non soggetto a ribasso
                        </TableCell>
                        <FormField
                          control={form.control}
                          name="nonDiscountableAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <TableCell className="text-right">
                                  <div className="relative">
                                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                      €
                                    </span>
                                    <Input
                                      placeholder="Inserisci importo"
                                      className="pl-6 text-right"
                                      {...field}
                                    />
                                  </div>
                                </TableCell>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Ribasso offerto
                        </TableCell>
                        <FormField
                          control={form.control}
                          name="discount"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <TableCell className="text-right">
                                  <div className="relative">
                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                      %
                                    </span>
                                    <Input
                                      placeholder="Inserisci percentuale"
                                      className="pr-6 text-right"
                                      {...field}
                                    />
                                  </div>
                                </TableCell>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell className="font-medium">
                          Importo in contratto
                        </TableCell>
                        <TableCell className="text-right">
                          {form.watch("baseAmount") &&
                          form.watch("nonDiscountableAmount") &&
                          form.watch("discount")
                            ? (
                                parseFloat(form.watch("baseAmount")) -
                                (parseFloat(form.watch("baseAmount")) *
                                  parseFloat(form.watch("discount"))) /
                                  100 +
                                parseFloat(form.watch("nonDiscountableAmount"))
                              ).toFixed(2)
                            : "0.00"}
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </>
              ),
              /* COSTI E CONSULENTI COSTI FISSI */
              fixedCost: () => (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Costi fissi</TableHead>
                        <TableHead>Importo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {costsRows.map((field, index) => (
                        <TableRow key={field.id}>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`costsRows.${index}.colonna1`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Inserisci costo fisso"
                                      {...field}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`costsRows.${index}.colonna2`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Inserisci importo"
                                      {...field}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            {costsRows.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeCostsRow(index)}
                                className="text-red-500"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={2} className="text-center">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                              appendCostsRow({ colonna1: "", colonna2: "" })
                            }
                          >
                            +
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  {/* CONSULENTI COSTI FISSI */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Consulenti Costi fissi</TableHead>
                        <TableHead>Importo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {consultantCostsRows.map((field, index) => (
                        <TableRow key={field.id}>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`consultantCostsRows.${index}.colonna1`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Inserisci costo fisso"
                                      {...field}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`consultantCostsRows.${index}.colonna2`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Inserisci importo"
                                      {...field}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            {consultantCostsRows.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeConsultantCostsRow(index)}
                                className="text-red-500"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={2} className="text-center">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                              appendConsultantCostsRow({
                                colonna1: "",
                                colonna2: "",
                              })
                            }
                          >
                            +
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ),
              /* CONDIZIONI CONTRATTUALI */
              contract: () => (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Condizioni contrattuali</TableHead>
                        <TableHead>Importo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contractRows.map((field, index) => (
                        <TableRow key={field.id}>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`contractRows.${index}.colonna1`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Inserisci costo fisso"
                                      {...field}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            <FormField
                              control={form.control}
                              name={`contractRows.${index}.colonna2`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Inserisci importo"
                                      {...field}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </TableCell>
                          <TableCell>
                            {contractRows.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeContractRow(index)}
                                className="text-red-500"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={2} className="text-center">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                              appendContractRow({ colonna1: "", colonna2: "" })
                            }
                          >
                            +
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </>
              ),
              /* RTP */
              rtp: () =>
                form.watch("rtp") && (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Costi fissi</TableHead>
                          <TableHead>Importo</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rtpRows.map((field, index) => (
                          <TableRow key={field.id}>
                            <TableCell>
                              <FormField
                                control={form.control}
                                name={`rtpRows.${index}.colonna1`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="Inserisci costo fisso"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </TableCell>
                            <TableCell>
                              <FormField
                                control={form.control}
                                name={`rtpRows.${index}.colonna2`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        placeholder="Inserisci importo"
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </TableCell>
                            <TableCell>
                              {rtpRows.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeRtpRow(index)}
                                  className="text-red-500"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell colSpan={2} className="text-center">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() =>
                                appendRtpRow({ colonna1: "", colonna2: "" })
                              }
                            >
                              +
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </>
                ),
            })}
            {!stepper.isLast ? (
              <div className="flex justify-end gap-4">
                <Button
                  variant="secondary"
                  onClick={stepper.prev}
                  disabled={stepper.isFirst}
                >
                  Indietro
                </Button>
                <Button type="submit">
                  {stepper.isLast ? "Crea" : "Avanti"}
                </Button>
              </div>
            ) : (
              <Button onClick={stepper.reset}>Reset</Button>
            )}
          </div>
        </form>
      </Form>
        </DialogContent>
      </Dialog>
      
    </>
  );
}
