import { useMemo } from "react";
import { getAvailability } from "../api/availability";

export type RoomCardProps = {
  id: number;
  name: string;
  type: string;
  max: number;
  min: number;
  price: number;
};

const RoomCard = ({ id, name, type, max, min, price }: RoomCardProps) => {
  const availability = useMemo(() => getAvailability(id), [id]);

  if (!availability) {
    return <div>Error</div>;
  }

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body p-6">
        <h2 className="card-title text-lg">{name}</h2>
        <p className="font-bold">{type}</p>
        <p>
          {availability.available} room{availability.available > 1 && "s"}{" "}
          available
        </p>
        {min < max ? (
          <p>
            {min} - {max} people
          </p>
        ) : (
          <p>{max} people</p>
        )}
        <h2 className="card-title text-lg mt-2">
          £{(price / 100.0).toFixed(2)} / night
        </h2>
      </div>
    </div>
  );
};

export default RoomCard;
