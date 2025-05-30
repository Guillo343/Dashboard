import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="h-16 bg-white border-b shadow-sm flex items-center px-4 justify-between">
          <h1 className="text-lg font-semibold">Page Title</h1>

          <nav className="space-x-4">
            <a href="/" className="text-blue-600 hover:underline">
              Dashboard
            </a>
            <a href="/auth/login" className="text-blue-600 hover:underline">
              Login
            </a>
            <a href="/auth/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </nav>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
