import React, { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Mind = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);
  const dishes = [
    {
      name: "Spaghetti Carbonara",
      image:
        "https://plus.unsplash.com/premium_photo-1705409892694-39677f828078?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Margherita Pizza",
      image:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sushi Rolls",
      image:
        "https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tacos al Pastor",
      image:
        "https://images.unsplash.com/photo-1524412529635-a258ed66c010?q=80&w=1695&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chicken Tikka ",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Beef Wellington",
      image:
        "https://images.unsplash.com/photo-1546964053-d018e345e490?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pad Thai",
      image:
        "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFkJTIwdGhhaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Lobster Bisque",
      image:
        "https://images.unsplash.com/photo-1707995546403-a8cb996e5932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9ic3RlciUyMGJpc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Ramen",
      image:
        "https://plus.unsplash.com/premium_photo-1664475934279-2631a25c42ce?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Caesar Salad",
      image:
        "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tom Yum Soup",
      image:
        "https://images.unsplash.com/photo-1675150277436-9c7348972c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tJTIwWXVtJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      name: "Gnocchi",
      image:
        "https://images.unsplash.com/photo-1613563732537-0229d46c97eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z25vY2hpfGVufDB8fDB8fHww",
    },
    {
      name: "Tom Yum Soup",
      image:
        "https://images.unsplash.com/photo-1675150277436-9c7348972c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tJTIwWXVtJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      name: "Gnocchi",
      image:
        "https://images.unsplash.com/photo-1613563732537-0229d46c97eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z25vY2hpfGVufDB8fDB8fHww",
    },
    {
      name: "Tom Yum Soup",
      image:
        "https://images.unsplash.com/photo-1675150277436-9c7348972c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tJTIwWXVtJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      name: "Gnocchi",
      image:
        "https://images.unsplash.com/photo-1613563732537-0229d46c97eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z25vY2hpfGVufDB8fDB8fHww",
    },
    {
      name: "Tom Yum Soup",
      image:
        "https://images.unsplash.com/photo-1675150277436-9c7348972c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tJTIwWXVtJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      name: "Gnocchi",
      image:
        "https://images.unsplash.com/photo-1613563732537-0229d46c97eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z25vY2hpfGVufDB8fDB8fHww",
    },
    {
      name: "Tom Yum Soup",
      image:
        "https://images.unsplash.com/photo-1675150277436-9c7348972c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tJTIwWXVtJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      name: "Gnocchi",
      image:
        "https://images.unsplash.com/photo-1613563732537-0229d46c97eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z25vY2hpfGVufDB8fDB8fHww",
    },
  ];

  useEffect(() => {
    setCategories(dishes);
  }, []);

  const nextSlide = () => {
    if (slide < 12) {
      setSlide(slide + 3);
    }
  };
  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 3);
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between w-full mt-5">
        <div className="font-bold text-2xl">Whats on your mind?</div>
        <div className="flex ">
          <div
            onClick={prevSlide}
            className="cursor-pointer w-[30px] h-[30px] bg-gray-200 rounded-full mx-2 flex justify-center items-center"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className=" cursor-pointer w-[30px] h-[30px] bg-gray-200 rounded-full mx-2 flex justify-center items-center"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className=" flex my-10  overflow-hidden border-b-2">
        {categories.map((dish, index) => {
          return (
            <div
              style={{ transform: `translateX(-${slide * 100}%)`, zIndex: -1 }}
              key={index}
              className="w-[150px] py-8 shrink-0 duration-500 flex flex-col items-center justify-around"
            >
              <img
                src={dish.image}
                alt="Dishes"
                className="w-[250px] h-[100px] px-1"
              />
              <h3>{dish.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mind;
