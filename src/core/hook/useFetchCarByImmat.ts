import { useQuery } from "@tanstack/react-query"
import { getCarByImmat } from "../services/car.service"

export const useFetchCarByImmat = (immat: string) => {
    return useQuery({
        queryFn: () => getCarByImmat(immat),
        queryKey: ['cars', immat],
        enabled: !!immat,
        retry: 3,
    })
}

