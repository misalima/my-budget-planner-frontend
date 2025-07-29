import { ExpensesList } from "@/components/my-expenses/ExpensesList";
import { Header } from "@/components/my-expenses/Header";
import React from "react";

const MyExpensesPage = () => {
  return (
    <div className="space-y-6 p-4">
      <Header />
      <ExpensesList />
    </div>
  );
};

export default MyExpensesPage;
