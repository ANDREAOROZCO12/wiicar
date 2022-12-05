import { useMemo } from "react";

const useOrder = (data: any, order: string) => {
  const sortedData = useMemo(() => {
    return [...data].sort((a: any, b: any) => {
      if (order === "asc") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }, [data, order]);
  return sortedData;
};

export default useOrder;
