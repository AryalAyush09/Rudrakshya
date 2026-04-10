import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

const AdminGallery = () => {
  const { gallery, addGalleryImage, deleteGalleryImage } = useAdmin();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ src: "", alt: "", category: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.src.trim()) { toast.error("Image URL is required"); return; }
    addGalleryImage({ src: form.src, alt: form.alt || "Gallery image", category: form.category || "General" });
    toast.success("Image added");
    setForm({ src: "", alt: "", category: "" });
    setOpen(false);
  };

  const handleDelete = (id: string) => { deleteGalleryImage(id); toast.success("Image deleted"); };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading">Manage Gallery</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button><Plus size={16} /> Add Image</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add Gallery Image</DialogTitle></DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2"><Label>Image URL *</Label><Input value={form.src} onChange={(e) => setForm({ ...form, src: e.target.value })} required /></div>
              <div className="space-y-2"><Label>Title</Label><Input value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} /></div>
              <div className="space-y-2"><Label>Category</Label><Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} /></div>
              <Button type="submit" className="w-full">Add Image</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((img) => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden border bg-card shadow-sm">
            <img src={img.src} alt={img.alt} className="w-full h-40 object-cover" />
            <div className="p-3">
              <p className="text-sm font-medium truncate">{img.alt}</p>
              <p className="text-xs text-muted-foreground">{img.category}</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8">
                  <Trash2 size={14} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader><AlertDialogTitle>Delete this image?</AlertDialogTitle><AlertDialogDescription>This action cannot be undone.</AlertDialogDescription></AlertDialogHeader>
                <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => handleDelete(img.id)}>Delete</AlertDialogAction></AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;
