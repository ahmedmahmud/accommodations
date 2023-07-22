import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import useAccommodation from "../hooks/useAccommodation";
import RoomCard from "../components/RoomCard";
import NotFound from "./NotFound";
import Loading from "./Loading";
import Header from "../components/Header";

const Accommodation = () => {
  const { id } = useParams();
  const [data, loading] = useAccommodation(id);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />

      <div className="mx-auto w-fit space-y-6 my-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body mx-auto">
            <h1 className="text-3xl font-bold">{data.name}</h1>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm font-bold">DESCRIPTION</p>
            <article className="prose">{parse(data.description)}</article>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm font-bold">FACILITIES</p>
            <article className="prose">
              <ul>
                {data.facilities.map(({ label }) => (
                  <li>{label}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-sm font-bold">ROOMS</p>
            {data.rooms.map(
              ({ id, name, type, max_occupancy, min_occupancy, price }) => (
                <RoomCard
                  id={id}
                  name={name}
                  type={type}
                  max={max_occupancy}
                  min={min_occupancy}
                  price={price}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
