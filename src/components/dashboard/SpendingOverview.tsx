import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpendingOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="cursor-default">Spending Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 cursor-default">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Food & Dining</span>
              <span className="text-sm font-medium">$450.00</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Transportation</span>
              <span className="text-sm font-medium">$320.00</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Entertainment</span>
              <span className="text-sm font-medium">$180.00</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 cursor-default">
                Shopping
              </span>
              <span className="text-sm font-medium cursor-default">
                $280.00
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-yellow-600 h-2 rounded--full"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
