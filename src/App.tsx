import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  return (
    <div>
      <div className="navbar bg-base-100 drop-shadow-xl">
        <div className="navbar-start" />
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">accom</a>
        </div>
        <div className="navbar-end" />
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
