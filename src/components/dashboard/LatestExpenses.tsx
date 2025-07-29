import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import { latestExpensesData } from "@/components/dashboard/data/latest-expenses-data";
import { format } from "date-fns";
import Link from "next/link";

export default function LatestExpenses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="cursor-default">Latest Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {latestExpensesData.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between py-2 px-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-sm cursor-default"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <ArrowDown className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 cursor-default">
                    {expense.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(expense.date), "PPP")}
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium text-red-600 cursor-default">
                -${expense.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end items-center">
        <Link
          href="/my-expenses"
          className="text-blue text-sm font-medium hover:text-darkblue"
        >
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
            View all expenses →
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
}
