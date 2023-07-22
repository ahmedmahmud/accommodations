import usePageRage from "../hooks/usePageRange";

type PaginationProps = {
  current: number;
  total: number;
  setPage: (page: number) => void;
};

export const Pagination = ({
  current,
  total,
  setPage,
}:
PaginationProps) => {
  const [range, left, right] = usePageRage(current, total);

  return (
      <div className="join">
        <button
          className={`join-item btn ${current === 1 && "btn-active"}`}
          onClick={() => setPage(1)}
        >
          1
        </button>

        {left && <button className="join-item btn btn-disabled">...</button>}

        {range.map((i) => (
          <button
            className={`join-item btn ${current === i && "btn-active"}`}
            onClick={() => setPage(i)}
          >
            {i}
          </button>
        ))}

        {right && <button className="join-item btn btn-disabled">...</button>}

        {total > 1 && (
          <button
            className={`join-item btn ${current === total && "btn-active"}`}
            onClick={() => setPage(total)}
          >
            {total}
          </button>
        )}
      </div>
  );
};
