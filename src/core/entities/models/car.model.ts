import { z } from "zod";

export const CarSchema = z.object({
    carrosserie: z.string().nullable(),
    genre_v: z.string().nullable(),
    marque: z.string().nullable(),
    nb_pl_ass: z.string().nullable(),
    finitions: z.object({
        version: z.array(z.string()).default([]),
    }).nullish() // This allows both null and undefined
})
export type CarModel = z.infer<typeof CarSchema>

