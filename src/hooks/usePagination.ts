import { useMemo, useState } from "react";

const usePagination = <T>(data: T[], size: number) => {
  const total = Math.ceil(data.length / size);
  const [current, setCurrent] = useState(1);

  const pageData = useMemo(() => {
    const start = (current - 1) * size;
    const end = start + size;
    return data.slice(start, end);
  }, [current, data, size]);

  return [pageData, current, total, setCurrent] as const;
};

export default usePagination;
