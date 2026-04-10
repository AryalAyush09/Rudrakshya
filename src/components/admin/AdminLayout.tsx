import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Package, FolderOpen, Image, LogOut } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

const menuItems = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/categories", label: "Categories", icon: FolderOpen },
  { to: "/admin/gallery", label: "Gallery", icon: Image },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { logout } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="w-64 bg-foreground text-background flex flex-col shrink-0">
        <div className="p-6 border-b border-background/10">
          <h2 className="font-heading text-lg tracking-wider text-primary">SHAMBO</h2>
          <p className="text-xs text-background/50 mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 py-4">
          {menuItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${active ? "bg-primary/20 text-primary border-r-2 border-primary" : "text-background/60 hover:text-background hover:bg-background/5"}`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-background/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-2 py-2 text-sm text-background/60 hover:text-destructive transition-colors w-full">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-8 overflow-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
