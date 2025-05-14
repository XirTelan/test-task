import { fetcher } from "@/shared/libs/swr";
import { CatData } from "@/types";
import useSWR from "swr";

export const useGetCat = () => {
  const { data, error, isLoading, mutate } = useSWR<CatData[]>(
    "/api/cats",
    fetcher,
    {
      suspense: true,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
