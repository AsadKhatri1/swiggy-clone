import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const Online = () => {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);
  const restaurants = [
    {
      image:
        "https://images.unsplash.com/photo-1520220877087-a4fad0ab8b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D",
      offer: "20% off on all items",
      title: "Italian Bistro",
      rating: 4.5,
      mintime: 30,
      maxtime: 45,
      name: "La Bella Italia",
      city: "New York",
    },
    {
      image:
        "https://images.unsplash.com/photo-1642231877874-ce3e205f39c0?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "20% off on all items",
      title: "Italian Bistro",
      rating: 4.5,
      mintime: 30,
      maxtime: 45,
      name: "La Bella Italia",
      city: "New York",
    },
    {
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "20% off on all items",
      title: "Italian Bistro",
      rating: 4.5,
      mintime: 30,
      maxtime: 45,
      name: "La Bella Italia",
      city: "New York",
    },
    {
      image:
        "https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "20% off on all items",
      title: "Italian Bistro",
      rating: 4.5,
      mintime: 30,
      maxtime: 45,
      name: "La Bella Italia",
      city: "New York",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1676310055316-d73c9d5eeb51?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Buy 1 Get 1 Free",
      title: "Sushi Place",
      rating: 4.8,
      mintime: 20,
      maxtime: 40,
      name: "Sakura Sushi",
      city: "San Francisco",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530799164-fe981d01a118?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Free Dessert with Main Course",
      title: "French Delicacies",
      rating: 4.7,
      mintime: 25,
      maxtime: 35,
      name: "Le Petit Café",
      city: "Chicago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "10% off on orders above $50",
      title: "American Grill",
      rating: 4.2,
      mintime: 35,
      maxtime: 50,
      name: "Steakhouse 101",
      city: "Dallas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "15% off on Breakfast",
      title: "Healthy Eats",
      rating: 4.3,
      mintime: 15,
      maxtime: 25,
      name: "Green Leaf Café",
      city: "Los Angeles",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Free Drink with Lunch",
      title: "Mexican Fiesta",
      rating: 4.6,
      mintime: 20,
      maxtime: 35,
      name: "El Mariachi",
      city: "Houston",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Buy 2 Pizzas, Get 1 Free",
      title: "Pizza Heaven",
      rating: 4.9,
      mintime: 25,
      maxtime: 40,
      name: "Slice of New York",
      city: "Boston",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469307580733-007134b82100?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Free Coffee with Pastry",
      title: "Chic Café",
      rating: 4.4,
      mintime: 15,
      maxtime: 30,
      name: "Café Noir",
      city: "Seattle",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "20% off on Desserts",
      title: "Sweet Treats",
      rating: 4.7,
      mintime: 10,
      maxtime: 20,
      name: "The Dessert Bar",
      city: "Miami",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Happy Hour: 50% off Drinks",
      title: "Cocktail Lounge",
      rating: 4.6,
      mintime: 30,
      maxtime: 50,
      name: "The Mixologist",
      city: "Las Vegas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Happy Hour: 50% off Drinks",
      title: "Cocktail Lounge",
      rating: 4.6,
      mintime: 30,
      maxtime: 50,
      name: "The Mixologist",
      city: "Las Vegas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      offer: "Happy Hour: 50% off Drinks",
      title: "Cocktail Lounge",
      rating: 4.6,
      mintime: 30,
      maxtime: 50,
      name: "The Mixologist",
      city: "Las Vegas",
    },
  ];
  useEffect(() => {
    setData(restaurants);
    console.log(data);
  }, []);
  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 4);
    }
  };
  const nextSlide = () => {
    if (slide < 12) {
      setSlide(slide + 4);
    }
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between w-full mt-5">
        <div className="font-bold text-3xl">
          Restaurants With Online Delivery
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <Card {...d}></Card>;
        })}
      </div>
      <hr />
    </div>
  );
};

export default Online;
