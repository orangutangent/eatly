import ControlSection from "@/components/sections/ControlSection";
import CustomerSaySection from "@/components/sections/CustomerSaySection";
import DishesSection from "@/components/sections/DishesSection";
import GetStartedSection from "@/components/sections/GetStartedSection";
import MobileSection from "@/components/sections/MobileSection";
import RestarauntsSection from "@/components/sections/RestarauntsSection";
import SaleSection from "@/components/sections/SaleSection";
import StatisticsSection from "@/components/sections/StatisticsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <GetStartedSection />
      <StatisticsSection />
      <MobileSection />
      <RestarauntsSection />
      <DishesSection />
      <ControlSection />
      <CustomerSaySection />
      <SaleSection />
    </main>
  );
}
