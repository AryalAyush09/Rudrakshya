import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product, Category, products as initialProducts, categories as initialCategories, galleryImages as initialGallery } from "@/lib/data";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  products: Product[];
  addProduct: (p: Omit<Product, "id">) => void;
  updateProduct: (id: string, p: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  adminCategories: Category[];
  addCategory: (c: Omit<Category, "id" | "productCount">) => void;
  updateCategory: (id: string, c: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  gallery: GalleryImage[];
  addGalleryImage: (g: Omit<GalleryImage, "id">) => void;
  deleteGalleryImage: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
};

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem("admin_auth") === "true");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [adminCategories, setCategories] = useState<Category[]>(initialCategories);
  const [gallery, setGallery] = useState<GalleryImage[]>(initialGallery);

  useEffect(() => {
    localStorage.setItem("admin_auth", String(isAuthenticated));
  }, [isAuthenticated]);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAuthenticated(false);

  const addProduct = (p: Omit<Product, "id">) => {
    setProducts((prev) => [...prev, { ...p, id: crypto.randomUUID() }]);
  };
  const updateProduct = (id: string, p: Partial<Product>) => {
    setProducts((prev) => prev.map((x) => (x.id === id ? { ...x, ...p } : x)));
  };
  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((x) => x.id !== id));
  };

  const addCategory = (c: Omit<Category, "id" | "productCount">) => {
    setCategories((prev) => [...prev, { ...c, id: crypto.randomUUID(), productCount: 0 }]);
  };
  const updateCategory = (id: string, c: Partial<Category>) => {
    setCategories((prev) => prev.map((x) => (x.id === id ? { ...x, ...c } : x)));
  };
  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((x) => x.id !== id));
  };

  const addGalleryImage = (g: Omit<GalleryImage, "id">) => {
    setGallery((prev) => [...prev, { ...g, id: crypto.randomUUID() }]);
  };
  const deleteGalleryImage = (id: string) => {
    setGallery((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout, products, addProduct, updateProduct, deleteProduct, adminCategories, addCategory, updateCategory, deleteCategory, gallery, addGalleryImage, deleteGalleryImage }}>
      {children}
    </AdminContext.Provider>
  );
};
