import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Button from "@/components/ui/Button";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">User Profile</h1>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center text-white text-xl font-bold">
                  {user?.name ? user.name.charAt(0) : "U"}
                </div>
                <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-400 border-2 border-white"></span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium text-gray-900">
                {user?.name || "Demo User"}
              </h2>
              <p className="text-sm text-gray-500">
                {user?.email || "user@example.com"}
              </p>
            </div>
            <Button className="ml-auto" variant="outline">
              Edit Profile
            </Button>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Account Information
                </h3>
                <dl className="mt-2 text-sm text-gray-900">
                  <div className="mt-1">
                    <dt className="inline text-gray-500">Member since: </dt>
                    <dd className="inline">January 2023</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="inline text-gray-500">Role: </dt>
                    <dd className="inline">{user?.role || "User"}</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="inline text-gray-500">Status: </dt>
                    <dd className="inline">Active</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Contact Information
                </h3>
                <dl className="mt-2 text-sm text-gray-900">
                  <div className="mt-1">
                    <dt className="inline text-gray-500">Email: </dt>
                    <dd className="inline">
                      {user?.email || "user@example.com"}
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="inline text-gray-500">Phone: </dt>
                    <dd className="inline">+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">
            Security Settings
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-900">Password</p>
                <p className="text-sm text-gray-500">
                  Last changed 3 months ago
                </p>
              </div>
              <Button variant="outline" size="sm">
                Change Password
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Two-factor Authentication
                </p>
                <p className="text-sm text-gray-500">Currently disabled</p>
              </div>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
