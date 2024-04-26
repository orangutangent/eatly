"use client";
import React from "react";
import axios from "axios";
import RestarauntItem from "../RestarauntItem";
import { FaArrowRight } from "react-icons/fa";
import DishItem from "../DishItem";

const RestarauntsSection = () => {
  const [dishes, setDishes] = React.useState([]);
  React.useEffect(() => {
    const fetchRestaraunts = async () => {
      try {
        const res = await axios.get(
          "https://6625022f04457d4aaf9d8f31.mockapi.io/foods"
        );
        setDishes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRestaraunts();
  }, []);
  return (
    <section>
      <div className="h-[1px] w-full bg-gray-300" />
      <div className="max-w-[1250px] mx-8 xl:mx-auto my-8">
        <div className="text-center text-[45px] font-[600] text-[#323142]">
          <h2 className="inline">Our Top </h2>
          <h2 className="inline text-[var(--main-color)]"> Dishes</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {dishes.map((dish: any) => (
            <DishItem
              key={dish.id}
              name={dish.name}
              deliveryTime={dish.delivery_time}
              price={dish.price}
              tag={dish.tag}
              rating={dish.rating}
              imgUrl={dish.img_url}
            />
          ))}
        </div>
        <div className="w-full flex justify-end mt-8">
          <button className="text-gray-400 font-[500] text-[20px] flex items-center gap-1 hover:bg-gray-200 hover:scale-110 duration-300 ease-in-out rounded-2xl p-2">
            <p>View All</p>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestarauntsSection;
