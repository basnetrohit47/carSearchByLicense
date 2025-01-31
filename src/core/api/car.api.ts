import { apiClient } from "./apiClient"

export const fetchCarByImmat = async (immat: string): Promise<object | undefined> => {
    try {
        const response = await apiClient({ url: `v1/underwriting/car/finitions_theoriques_by_license_plate?license_plate=${immat}` });
        if (!response) {
            throw new Error('No data received from the server.');
        }
        return response

    }
    catch (error) {
        console.error('Error while searching car query:', error)
        throw new Error('Failed to search car. Please try again later.');
    }

}