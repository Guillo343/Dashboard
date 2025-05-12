import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { dateRange } = useSelector((state: RootState) => state.dashboard);
  const [selectedPeriod, setSelectedPeriod] = useState<
    "day" | "week" | "month"
  >("week");

  const stats = [
    { name: "Total Users", value: "8,492", change: "+12.3%", trend: "up" },
    { name: "Revenue", value: "$24,234", change: "+5.4%", trend: "up" },
    { name: "Conversion Rate", value: "3.6%", change: "-0.8%", trend: "down" },
    { name: "Avg. Session", value: "2m 56s", change: "+14.2%", trend: "up" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard Overview
        </h1>
        <div className="flex space-x-2">
          <Button
            variant={selectedPeriod === "day" ? "primary" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("day")}
          >
            Day
          </Button>
          <Button
            variant={selectedPeriod === "week" ? "primary" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("week")}
          >
            Week
          </Button>
          <Button
            variant={selectedPeriod === "month" ? "primary" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("month")}
          >
            Month
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </div>
                <div
                  className={`ml-auto inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
                    stat.trend === "up"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {stat.change}
                </div>
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Performance Overview
          </h2>
          <div className="mt-4 h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart will be rendered here</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">
              Recent Activity
            </h2>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <ul className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Activity Item {item}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Description of activity {item}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {item} hour{item !== 1 ? "s" : ""} ago
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                variant="link"
                className="w-full justify-center"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                View all activity
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
