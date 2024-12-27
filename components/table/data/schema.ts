import { z } from 'zod'

export const projectSchema = z.object({
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
    })

export type Project = z.infer<typeof projectSchema>