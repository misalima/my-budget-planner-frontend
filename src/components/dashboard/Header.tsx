import React from 'react'

export default function DashboardHeader() {
  return (
    <div>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's your financial summary.
        </p>
      </div>
    </div>
  );
}
