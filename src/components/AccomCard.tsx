import parse from "html-react-parser";
import { Link } from "react-router-dom";

export type AccomCardProps = {
  id: number;
  name: string;
  description: string;
  type: string;
};

const AccomCard = ({ id, name, description, type }: AccomCardProps) => {
  return (
    <div className="card w-fit bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-bold">{type}</p>
        <article className="prose">{parse(description)}</article>
        <div className="card-actions justify-end">
          <Link to={`accommodation/${id}`}>
            <button className="btn btn-primary font-bold tracking-tight">
              Rooms & Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccomCard;
