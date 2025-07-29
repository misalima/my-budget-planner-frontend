import React from "react";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import Header from "@/components/dashboard/Header";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import SpendingOverview from "@/components/dashboard/SpendingOverview";
import StatsSection from "@/components/dashboard/StatsSection";

export default function Dashboard() {
  return (
    <div className="p-6">
      <Header />
      <StatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingOverview />
        <RecentTransactions />
      </div>

      <BudgetProgress />
    </div>
  );
}
