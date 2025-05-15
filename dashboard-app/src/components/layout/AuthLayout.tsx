import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <h1 className="text-xl font-bold text-center mb-4">Auth Layout</h1>
        <Outlet />
      </div>
    </div>
  );
}
