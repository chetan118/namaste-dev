import RestaurantCard from "./RestaurantCard";

const Shimmer = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" disabled>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="res-card"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <div className="res-logo-container">
              <div className="res-logo"></div>
            </div>
            {Array.from({ length: 5 }).map((_, j) => (
              <h4
                key={j}
                style={{
                  width: "75%",
                  height: "1rem",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "0.5rem",
                }}
              ></h4>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
