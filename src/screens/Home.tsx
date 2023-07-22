import AccomCard from "../components/AccomCard";
import Header from "../components/Header";
import { Pagination } from "../components/Pagination";
import useAccommodations from "../hooks/useAccommodations";
import usePagination from "../hooks/usePagination";

function Home() {
  const [data, loading] = useAccommodations();
  const [pageData, current, total, setPage] = usePagination(data, 4);

  return (
    <div>
      <Header />
      <div className="justify-center flex m-6">
        <Pagination current={current} total={total} setPage={setPage} />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="m-6 gap-6 flex flex-col items-center">
          {pageData.map(({ id, name, description, type }) => (
            <AccomCard
              key={id}
              id={id}
              name={name}
              description={description}
              type={type.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
