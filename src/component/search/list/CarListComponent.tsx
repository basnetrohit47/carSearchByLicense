import React, { useEffect, useState } from "react";
import { useFetchCarByImmat } from "../../../core/hook/useFetchCarByImmat";

interface FinitionType {
  value: string;
  label: string;
}
interface Props {
  immat: string;
}
const CarComponentList = React.memo(({ immat }: Props) => {
  const { data: getCars, isLoading, isError, error } = useFetchCarByImmat(immat);
  const [finitions, setFinitions] = useState<FinitionType[]>([]);

  useEffect(() => {
    const finOptions =
      getCars?.finitions?.version?.map((version: string) => ({
        value: version,
        label: version.toUpperCase(),
      })) || [];

    setFinitions(finOptions);
  }, [getCars]);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (isError) {
    return (
      <div>
        {" "}
        <p className="text-red-500 text-sm">{error.message}</p>
      </div>
    );
  }
  if (!getCars || finitions.length === 0) {
    return <p className="text-red-500 text-sm">Nous n'avons pas trouvé votre véhicule</p>;
  }
  return (
    <div className="mt-6 space-y-2">
      <h3 className="text-lg font-semibold text-gray-700">Finitions:</h3>
      {finitions.map((option) => (
        <div key={option.value} className="p-2 bg-gray-50 rounded-md text-gray-700">
          {option.label}
        </div>
      ))}
    </div>
  );
});

export default CarComponentList;
