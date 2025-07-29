import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { expensesData } from "./data/expenses-data";
import {
  MoreVertical,
  Pencil,
  Trash2,
  ShoppingBag,
  Utensils,
  Car,
  Zap,
  Film,
  Heart,
  Plus,
} from "lucide-react";

const categoryIcons: {
  [key: string]: {
    icon: React.ReactNode;
    iconColor: string;
    badgeColor: string;
  };
} = {
  Food: {
    icon: <Utensils className="h-4 w-4" />,
    iconColor: "bg-indigo-100 text-blue",
    badgeColor: "bg-indigo-200 text-darkblue hover:bg-indigo-300",
  },
  Transportation: {
    icon: <Car className="h-4 w-4" />,
    iconColor: "bg-green-100 text-green-600",
    badgeColor: "bg-green-100 text-green-700 hover:bg-green-200",
  },
  Shopping: {
    icon: <ShoppingBag className="h-4 w-4" />,
    iconColor: "bg-yellow-100 text-yellow-600",
    badgeColor: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  },
  Bills: {
    icon: <Zap className="h-4 w-4" />,
    iconColor: "bg-red-100 text-red-600",
    badgeColor: "bg-red-100 text-red-700 hover:bg-red-200",
  },
  Entertainment: {
    icon: <Film className="h-4 w-4" />,
    iconColor: "bg-purple-100 text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700 hover:bg-purple-200",
  },
  Health: {
    icon: <Heart className="h-4 w-4" />,
    iconColor: "bg-pink-100 text-pink-600",
    badgeColor: "bg-pink-100 text-pink-700 hover:bg-pink-200",
  },
};

export const ExpensesList = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">All Expenses</CardTitle>
        <Button className="bg-orange text-white hover:bg-orange-600">
          <Plus />
          New Expense
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden lg:table-cell">
                Payment Method
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expensesData.map((expense) => {
              const category = categoryIcons[expense.category];
              return (
                <TableRow key={expense.id}>
                  <TableCell>
                    <div className="flex items-center space-x-6">
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                          category
                            ? category.iconColor
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {category ? (
                          category.icon
                        ) : (
                          <MoreVertical className="h-3 w-3" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          {expense.description}
                        </p>
                        <p className="text-xs text-gray-500">{expense.date}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-red-600">
                      ${expense.amount.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge
                      variant="secondary"
                      className={
                        category
                          ? category.badgeColor
                          : "bg-gray-100 text-gray-700"
                      }
                    >
                      {expense.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <span className="text-sm text-gray-600">
                      {expense.payment_method}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-amber-100 hover:text-orange-600"
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
