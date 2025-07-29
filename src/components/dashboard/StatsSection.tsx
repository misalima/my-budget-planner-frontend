import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, BadgeCheck, CircleDollarSign } from "lucide-react";

export default function StatsSection() {
  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Balance */}
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-default">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <CircleDollarSign
              className="h-7 w-7"
              style={{ color: "#004aad" }}
            />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: "#004aad" }}>
              $12,450.00
            </div>
          </CardContent>
        </Card>

        {/* Monthly Income */}
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-default">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Income
            </CardTitle>
            <ArrowUp className="h-7 w-7 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">$4,200.00</div>
          </CardContent>
        </Card>

        {/* Monthly Expenses */}
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-default">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Expenses
            </CardTitle>
            <ArrowDown className="h-7 w-7 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-500">$2,850.00</div>
          </CardContent>
        </Card>

        {/* Savings Goal */}
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-default">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
            <BadgeCheck className="h-7 w-7 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-500">65%</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
