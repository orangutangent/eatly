import Image from "next/image";
import { PurchaseType } from "@/components/Purchase";
import Purchase from "@/components/Purchase";
import purchase1 from "../../public/purchase1.png";
import purchase2 from "../../public/purchase2.png";
import purchase3 from "../../public/purchase3.png";
import expenseGraphIcon from "@/public/expenseGraphIcon.svg";
import vocherUsageGraphIcon from "@/public/vocherUsageGraphIcon.svg";
import PurchaseGraph, { PurchaseGraphType } from "../PurchaseGraph";

const purchases: PurchaseType[] = [
  {
    title: "Chiken Hell",
    status: "On the way",
    time: "3:09PM",
    image: purchase1,
  },
  {
    title: "Swe Dish",
    status: "Cancelled",
    time: "Yesterday",
    image: purchase2,
  },
  {
    title: "Fish Hel Veg",
    status: "Delivered",
    time: "Yesterday",
    image: purchase3,
  },
];

const purchaseGraphs: PurchaseGraphType[] = [
  {
    name: "Expense",
    icon: expenseGraphIcon,
    cost: "$409.00",
    graphText: "Increased By 10%",
    percents: 70,
    color: "purple",
  },
  {
    name: "Voucher Usage",
    icon: vocherUsageGraphIcon,
    cost: "$45.78",
    graphText: "Increased By 10%",
    percents: 60,
    color: "amber",
  },
];

const ControlSection = () => {
  return (
    <section>
      <div className="h-[1px] w-full bg-gray-300" />
      <div className="max-w-[1250px] grid grid-cols-1  lg:grid-cols-2 gap-8 mx-8 xl:mx-auto my-8">
        <div className="flex flex-col justify-center w-full">
          <div className=" text-[45px] font-[600] text-[#323142]">
            <h2 className="inline">Control </h2>
            <h2 className="inline text-[var(--main-color)]"> Purchases </h2>
            <h2 className="inline">Via Dashboard </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col w-full gap-4 my-8 lg:ms-2 lg:me-[170px]">
            {purchases.map((purchase) => (
              <li className="lg:w-full col-span-1" key={purchase.title}>
                <Purchase {...purchase} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[600px] bg-white shadow-xl rounded-xl py-12 px-8">
            <div className="w-full flex justify-between">
              <h3 className="text-[#323142] text-[28px] font-[600]">
                Purchases
              </h3>
              <select className="text-[19px]">
                <option>This Month</option>
                <option>This Week</option>
                <option>This Year</option>
              </select>
            </div>
            <ul className="w-full space-y-4 mt-8">
              {purchaseGraphs.map((graph) => (
                <li key={graph.name} className=" w-full">
                  <PurchaseGraph
                    name={graph.name}
                    icon={graph.icon}
                    cost={graph.cost}
                    graphText={graph.graphText}
                    percents={graph.percents}
                    color={graph.color}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlSection;
