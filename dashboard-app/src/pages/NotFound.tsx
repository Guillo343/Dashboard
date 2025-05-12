import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-9xl font-extrabold text-primary-600">404</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">Page not found</p>
          <p className="mt-2 text-sm text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;