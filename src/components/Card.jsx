import React from "react";
import { FcRating } from "react-icons/fc";
const Card = (props) => {
  console.log(props.slide);
  let finalSlide = props.slide * 100;
  return (
    <div
      className="w-[273px] my-10 shrink-0 grow duration-500"
      style={{ transform: `translateX(-${finalSlide}%)` }}
    >
      <div className="h-[182px] rounded-md overflow-hidden relative">
        <img
          src={props.image}
          alt="restaurant"
          className="object-cover w-full h-full "
        />
        <div className="img-overlay absolute w-full h-full top-0 flex items-end justify-start">
          <h2 className="m-3 text-white text-3xl tracking-tighter">
            {props.offer}
          </h2>
        </div>
      </div>
      <div className="mt-3 text-xl font-bold">{props.title}</div>
      <div className="font-semibold">
        <FcRating className="inline " /> {props.rating} . {props.mintime} -{" "}
        {props.maxtime} mins
      </div>
      <div>
        {props.name}
        <br />
        {props.city}
      </div>
    </div>
  );
};

export default Card;
