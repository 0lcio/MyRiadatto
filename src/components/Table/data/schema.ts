import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  location: z.string(),
  title: z.string(),
  assigned: z.string(),
  status: z.string(),
  idOpera: z.array(z.string()),
  email: z.string(),
})

export type Task = z.infer<typeof taskSchema>