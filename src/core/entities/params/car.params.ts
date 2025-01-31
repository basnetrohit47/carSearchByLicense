import { z } from "zod";
const frenchLicensePlateRegex = /^(?:[A-Z]{2}-?\d{3}-?[A-Z]{2})$/;

export const SearchCarSchema = z.object({
    license_plate: z.string().min(2, "La plaque d'immatriculation est trop courte") // Ensure at least 2 characters
        .max(15, "La plaque d'immatriculation est trop longue") // Prevent too long inputs
        .regex(frenchLicensePlateRegex, "Le numéro de la plaque d'immatriculation n'est pas valide"),
})

export type SearchCarParams = z.infer<typeof SearchCarSchema>
