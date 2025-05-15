import { useState } from "react";
import { Menu, X } from "lucide-react";
import SidebarItem from "./SidebarItem";

const navItems = [
  { label: "Dashboard", to: "/", icon: <span>🏠</span> },
  { label: "Reports", to: "/reports", icon: <span>📊</span> },
  { label: "Settings", to: "/settings", icon: <span>⚙️</span> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:shadow-md`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b md:hidden">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleSidebar} aria-label="Close sidebar">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
