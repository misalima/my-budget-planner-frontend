import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl">Overview</CardTitle>
            <CardDescription className="mt-1">
              Welcome back! Here's your financial summary.
            </CardDescription>
          </div>
          <Button
            size="lg"
            className="px-4 bg-orange hover:bg-orange-600 text-black"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Expense
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
