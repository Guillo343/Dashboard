import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <Outlet />
      </main>
    </div>
  );
}
