import { useEffect, useState } from "react";
import { Accommodation, getAccommodations } from "../api/accomodations";

const useAccommodation = (idCheck: string | undefined) => {
  const [data, setData] = useState<Accommodation | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(getAccommodations().find(({ id }) => idCheck === id.toString()));
    setLoading(false);
  }, [idCheck]);

  return [data, loading] as const;
};

export default useAccommodation;
