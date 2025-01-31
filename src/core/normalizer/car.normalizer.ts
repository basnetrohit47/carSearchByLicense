import { CarModel } from "../entities/models/car.model"

export const normalizeCarResponse = (data: any): CarModel => {
    return {
        carrosserie: data.carrosserie ?? null,
        genre_v: data.genre_v ?? null,
        marque: data.marque ?? null,
        nb_pl_ass: data.nb_pl_ass ?? null,
        finitions: data.finitions && Array.isArray(data.finitions.version)
            ? data.finitions
            : { version: [] }, // Ensures it's always an object with an array
    }
}