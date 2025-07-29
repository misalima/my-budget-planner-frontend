import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Header = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl cursor-default">
              My Expenses
            </CardTitle>
            <CardDescription className="mt-1 cursor-default">
              Manage your expenses and keep track of your spending.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
