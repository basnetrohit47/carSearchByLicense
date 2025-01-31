import React from "react";
import { useForm } from "react-hook-form";
import { SearchCarParams, SearchCarSchema } from "../../../core/entities/params/car.params";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchForm = ({ onSearch }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SearchCarParams>({
    resolver: zodResolver(SearchCarSchema),
  });

  const onSubmit = (searchKey: SearchCarParams) => {
    onSearch(searchKey.license_plate);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input {...register("license_plate")} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Entrez votre plaque d'immatriculation" />
          {errors.license_plate && <p className="text-red-500 text-sm mt-1">{errors.license_plate.message}</p>}
        </div>

        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
