import { fetchCarByImmat } from "../api/car.api"
import { CarModel, CarSchema } from "../entities/models/car.model";
import { normalizeCarResponse } from "../normalizer/car.normalizer";

export const getCarByImmat = async (immat: string): Promise<CarModel | undefined> => {

    const data = await fetchCarByImmat(immat);
    const normalizedData = normalizeCarResponse(data);
    const result = CarSchema.safeParse(normalizedData);
    if (!result.success) {
        console.error(`CarSchema search failed`, result.error.errors);
        throw Error(` search error`);
    }
    return result.data;




}