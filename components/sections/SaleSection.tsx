import Button from "../Button";
import Image from "next/image";
import foodImage from "../../public/foodImage.png";

const SaleSection = () => {
  return (
    <section className="mx-4 mb-[100px]">
      <div className="relative bg-[#5547aa] bg-cover bg-no-repeat w-full w-max-[1250px]  rounded-xl px-8 py-4 smd:py-8 smd:px-16 h-[250px]">
        <div className="absolute top-0 -left-16 bg-[url('/saleBG/saleBG1.svg')] bg-cover bg-no-repeat w-full h-[250px] "></div>
        <Image
          className="hidden md:block absolute  bottom-0 translate-y-1/2 right-16"
          src={foodImage}
          alt="foodImage"
          width={274}
        />
        <div className="flex flex-col">
          <h2 className="text-white text-[50px] smd:text-[70px] font-[700] ">
            GET 50%
          </h2>
          <div className="relative  flex flex-col gap-4 w-full max-w-[440px] ">
            <input
              className="bg-white box-border text-[#878787] text-[16px] font-[500] w-full max-w-[440px] h-[50px] smd:h-[68px] focus:border-2 focus:border-[#6C5FBC] outline-white rounded-xl px-4 smd:pe-[155px]"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <div className="smd:absolute w-auto static top-1/2 smd:translate-y-[-50%] right-4">
              <Button className="" actionLabel="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
