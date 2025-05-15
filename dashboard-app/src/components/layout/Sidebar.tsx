import { Home, User } from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:flex flex-col p-4">
      <div className="mb-6 text-2xl font-bold">Dashboard</div>

      <nav className="flex flex-col gap-2">
        <SidebarItem to="/" label="Home" icon={<Home size={18} />} />
        <SidebarItem to="/profile" label="Profile" icon={<User size={18} />} />
        {/* Agrega más ítems aquí */}
      </nav>
    </aside>
  );
}
