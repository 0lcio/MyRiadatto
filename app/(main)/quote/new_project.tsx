"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner"

const projectSchema = z.object({
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
  active: z.boolean(),
});

export function NewProject() {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      deadline: new Date(),
      projectLevel: "",
      client: "",
      description: "",
      gara: false,
      rtp: false,
      active: false,
    },
  });

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'gara' && !value.gara) {
        form.setValue('rtp', false);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  async function onSubmit(data: z.infer<typeof projectSchema>) {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) throw new Error('Not authenticated')
      const { error } = await supabase
        .from('project')
        .insert([
          {
            title: data.title,
            deadline: data.deadline,
            projectLevel: data.projectLevel,
            client: data.client,
            description: data.description,
            gara: data.gara,
            rtp: data.rtp
          }
        ])
  
      if (error) throw error

      toast.success('La commessa è stata creata!', {
        description: 'Aggiorna la pagina per visualizzarla',
      })
      // Reset form on success
      form.reset()
      
      // Add your success notification here
      
    } catch (error) {
      console.log(error)
      // Add your error notification here
    }
    }
  const showRTP = form.watch('gara');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titolo</FormLabel>
              <FormControl>
                <Input placeholder="Inserisci titolo..." {...field} />
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
                    disabled={(date) =>
                      date <
                      new Date(new Date().setDate(new Date().getDate() - 1))
                    }
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
                <Input placeholder="Inserisci livello..." {...field} />
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
              <FormLabel>Cliente</FormLabel>
              <FormControl>
                <Input placeholder="Inserisci cliente..." {...field} />
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
                <Textarea placeholder="Inserisci descrizione..." {...field} />
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
              <div className="flex items-center gap-2">
                <FormLabel>Gara?</FormLabel>
                <FormControl>
                  <Checkbox 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {showRTP && (
          <FormField
            control={form.control}
            name="rtp"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <FormLabel>RTP?</FormLabel>
                  <FormControl>
                    <Checkbox 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <div className="flex justify-end">
          <Button type="submit">Crea</Button>
        </div>
      </form>
    </Form>
  );
}