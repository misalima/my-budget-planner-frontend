import React from 'react'

export default function RecentTransactions() {
  return (
    <div>
      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Transactions
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Grocery Store
                </p>
                <p className="text-xs text-gray-500">Today, 2:30 PM</p>
              </div>
            </div>
            <span className="text-sm font-medium text-red-600">-$85.50</span>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Salary Deposit
                </p>
                <p className="text-xs text-gray-500">Yesterday, 9:00 AM</p>
              </div>
            </div>
            <span className="text-sm font-medium text-green-600">
              +$4,200.00
            </span>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Gas Station</p>
                <p className="text-xs text-gray-500">2 days ago, 6:15 PM</p>
              </div>
            </div>
            <span className="text-sm font-medium text-red-600">-$45.20</span>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Netflix Subscription
                </p>
                <p className="text-xs text-gray-500">3 days ago, 12:00 PM</p>
              </div>
            </div>
            <span className="text-sm font-medium text-red-600">-$15.99</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
            View all transactions →
          </button>
        </div>
      </div>
    </div>
  );
}
