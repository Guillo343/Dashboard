import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Sidebar - vendrá después */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4 font-bold text-xl">Dashboard</div>
        {/* Aquí van los links del sidebar */}
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <header className="h-16 bg-white border-b shadow-sm flex items-center px-4">
          <h1 className="text-lg font-semibold">Page Title</h1>
        </header>

        {/* Página específica */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
