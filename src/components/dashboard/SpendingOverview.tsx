import React from 'react'

export default function SpendingOverview() {
  return (
    <div>
      {/* Spending Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Spending Overview
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Food & Dining</span>
            <span className="text-sm font-medium">$450.00</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: "35%" }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Transportation</span>
            <span className="text-sm font-medium">$320.00</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Entertainment</span>
            <span className="text-sm font-medium">$180.00</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: "15%" }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Shopping</span>
            <span className="text-sm font-medium">$280.00</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-yellow-600 h-2 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
