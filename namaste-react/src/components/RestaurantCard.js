import { SWIGGY_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    props.resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={SWIGGY_CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
