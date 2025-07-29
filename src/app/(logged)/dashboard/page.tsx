import React from "react";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import Header from "@/components/dashboard/Header";
import LatestExpenses from "@/components/dashboard/LatestExpenses";
import SpendingOverview from "@/components/dashboard/SpendingOverview";
import StatsSection from "@/components/dashboard/StatsSection";
import UpcomingDebts from "@/components/dashboard/UpcomingDebts";

export default function Dashboard() {
  return (
    <div className="p-6">
      <Header />
      <StatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UpcomingDebts />
        <LatestExpenses />
        <SpendingOverview />
      </div>

      <div className="gap-6 mt-6">
        <BudgetProgress />
      </div>
    </div>
  );
}
