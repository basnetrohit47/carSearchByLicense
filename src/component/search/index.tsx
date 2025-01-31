import React, { lazy, Suspense, useCallback, useState } from "react";
import SearchForm from "./form/SearchForm";
//Lazy loading for the chunk loading
const CarComponentList = lazy(() => import("./list/CarListComponent"));

const CarSearchComponent = () => {
  //We could you any store management library like zustand or zotai to handle the data
  const [searchKey, setSearchKey] = useState("");

  //useCallback is used to memoize this function to prevent the unnecessary rending
  const handleSearch = useCallback((term: string) => {
    setSearchKey(term);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-md">
            <span className="text-sm font-semibold text-blue-700">Plaque d'immatriculation</span>
          </div>
        </div>
        <SearchForm onSearch={handleSearch} />
        {searchKey && (
          <Suspense fallback={<div>...loading</div>}>
            <CarComponentList immat={searchKey} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default CarSearchComponent;
