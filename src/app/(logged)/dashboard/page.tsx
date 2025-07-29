import React from "react";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import Header from "@/components/dashboard/Header";
import LatestExpenses from "@/components/dashboard/LatestExpenses";
import SpendingOverview from "@/components/dashboard/SpendingOverview";
import StatsSection from "@/components/dashboard/StatsSection";

export default function Dashboard() {
  return (
    <div className="p-4">
      <Header />
      <StatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingOverview />
        <LatestExpenses />
      </div>

      <div className="mt-6">
        <BudgetProgress />
      </div>
    </div>
  );
}
