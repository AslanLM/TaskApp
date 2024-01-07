import { z } from "zod";

export const taskValidation = z.object({
  title: z.string({
    required_error: "title is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
  date: z.string().datetime().optional(),
});


