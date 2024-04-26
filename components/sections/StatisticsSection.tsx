import featuresBG from "/featuresBG.svg";
const StatisticsSection = () => {
  return (
    <section className=" bg-[url('/featuresBG.svg')] bg-cover bg-no-repeat w-full grid md:grid-cols-3 py-[55px] gap-4 px-16 md:px-8">
      <div className="col-span-1 flex flex-col justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border-[#c5BFED] pb-4">
        <h2 className="text-[43px] text-white font-[600]">10K+</h2>
        <p className="text-center text-[14px] text-[#c5BFED]">
          Satisfied Costumers All Great Over The World
        </p>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border-[#c5BFED] pb-4">
        <h2 className="text-[43px] text-white font-[600]">4M</h2>
        <p className="text-center text-[14px] text-[#c5BFED]">
          Healthy Dishes Sold Including Milk Shakes Smooth
        </p>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center border-b-2 md:border-b-0 border-[#c5BFED] pb-4">
        <h2 className="text-[43px] text-white font-[600]">99.99%</h2>
        <p className="text-center text-[14px] text-[#c5BFED]">
          Reliable Customer Support We Provide Great Experiences
        </p>
      </div>
    </section>
  );
};

export default StatisticsSection;
