import { RES_URL } from "../utils/constans";

const RestorentContainer = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    props.resData.info;
  return (
    <div className="m-4 p-4 w-[230px] bg-slate-200 rounded-lg">
      <img
        src={RES_URL + cloudinaryImageId}
        className="h-40 w-full rounded-lg"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} </h4>
    </div>
  );
};

// Higher order component
export const RestaurentContainerPromoted = (RestorentContainer) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2">
          Propmoted
        </label>
        <RestorentContainer {...props} />
      </div>
    );
  };
};

export default RestorentContainer;
