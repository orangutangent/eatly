"use client";
import Image from "next/image";
import React from "react";
import Avatar from "../../public/Avatar.png";
import Review from "../Review";

const reviews = [
  {
    id: 1,
    author: "Alexander R.",
    yearsWithUs: 1,
    avatar: Avatar,
    text: "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
    rating: 5,
  },
  {
    id: 2,
    author: "Alexander R.",
    yearsWithUs: 1,
    avatar: Avatar,
    text: "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
    rating: 5,
  },
  {
    id: 3,
    author: "Alexander R.",
    yearsWithUs: 1,
    avatar: Avatar,
    text: "Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time",
    rating: 5,
  },
];

const CustomerSaySection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <section>
      <div className="h-[1px] w-full bg-gray-300" />
      <div className="max-w-[1250px] mx-8 xl:mx-auto my-8">
        <div className="text-center text-[45px] font-[600] text-[#323142]">
          <h2 className="inline text-[var(--main-color)]">Customer </h2>
          <h2 className="inline">Say </h2>
        </div>
        <div className="mt-20 flex justify-between gap-8">
          {reviews.map((review, index) => (
            <Review
              id={review.id}
              key={review.id}
              author={review.author}
              yearsWithUs={review.yearsWithUs}
              avatar={review.avatar}
              text={review.text}
              rating={review.rating}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </div>
        <div className="flex justify-end mt-12">
          <div className="flex gap-[1px] overflow-hidden overflow-x-auto">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`w-[181px] h-[11px] rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-[var(--main-color)]"
                    : "bg-purple-300"
                }`}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSaySection;
