import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { upcomingDebtsData } from "./data/upcoming-debts-data";

export default function UpcomingDebts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="cursor-default">Upcoming Debts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingDebtsData.map((debt) => (
            <div
              key={debt.month}
              className="flex items-center justify-between py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-sm cursor-default"
            >
              <p className="text-sm font-medium text-gray-900">{debt.month}</p>
              <span className="text-md font-medium text-red-600">
                ${debt.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
