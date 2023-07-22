import AccomCard from "../components/AccomCard";
import Header from "../components/Header";
import useAccommodations from "../hooks/useAccommodations";

function Home() {
  const [data, loading] = useAccommodations();

  return (
    <div>
      <Header />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="m-6 gap-6 flex flex-col items-center">
          {data?.map(({ id, name, description, type }) => (
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
