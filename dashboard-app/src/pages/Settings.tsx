import React from "react";
import Button from "@/components/ui/Button";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">
            Notification Settings
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="email-notifications"
                  name="email-notifications"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-600"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="email-notifications"
                  className="font-medium text-gray-700"
                >
                  Email Notifications
                </label>
                <p className="text-gray-500">
                  Receive emails for important updates and activity.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="browser-notifications"
                  name="browser-notifications"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-600"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="browser-notifications"
                  className="font-medium text-gray-700"
                >
                  Browser Notifications
                </label>
                <p className="text-gray-500">
                  Receive notifications directly in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Appearance</h3>
          <div className="mt-4">
            <fieldset>
              <legend className="sr-only">Theme</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                <div className="flex items-center">
                  <input
                    id="light"
                    name="theme"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="light"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Light
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="dark"
                    name="theme"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label
                    htmlFor="dark"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Dark
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="system"
                    name="theme"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label
                    htmlFor="system"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    System
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">
            Data Preferences
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="analytics"
                  name="analytics"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-600"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="analytics"
                  className="font-medium text-gray-700"
                >
                  Usage Analytics
                </label>
                <p className="text-gray-500">
                  Allow us to collect usage data to improve our service.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="cookies"
                  name="cookies"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-600"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="cookies" className="font-medium text-gray-700">
                  Cookies
                </label>
                <p className="text-gray-500">
                  Allow cookies for improved functionality and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="outline" className="mr-3">
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
