import AdminLayout from "@/components/admin/AdminLayout";
import { useAdmin } from "@/contexts/AdminContext";
import { Card, CardContent } from "@/components/ui/card";
import { Package, FolderOpen, Image } from "lucide-react";

const AdminDashboard = () => {
  const { products, adminCategories, gallery } = useAdmin();

  const stats = [
    { label: "Total Products", value: products.length, icon: Package, color: "text-primary" },
    { label: "Total Categories", value: adminCategories.length, icon: FolderOpen, color: "text-blue-500" },
    { label: "Gallery Items", value: gallery.length, icon: Image, color: "text-emerald-500" },
  ];

  return (
    <AdminLayout>
      <h1 className="text-2xl font-heading mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <Card key={s.label} className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${s.color}`}>
                <s.icon size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-3xl font-heading">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
