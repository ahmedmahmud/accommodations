import { useEffect, useState } from "react";
import { Accommodation, getAccommodations } from "../api/accomodations";

const useAccommodations = () => {
  const [data, setData] = useState<Accommodation[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(getAccommodations());
    setLoading(false);
  }, []);

  return [data, loading] as const;
};

export default useAccommodations;
