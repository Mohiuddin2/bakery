import { AdminHeader } from "@/components/admin/AdminHeader";
import { ProductManager } from "@/components/admin/ProductManager";
import { dummyAdminProducts } from "@/lib/admin-data";

export default function AdminProductsPage() {
  return (
    <>
      <AdminHeader
        title="Products"
        subtitle="Catalogue, stock levels, and sales performance"
      />
      <div className="px-5 py-8 sm:px-8">
        <ProductManager initialProducts={dummyAdminProducts} />
      </div>
    </>
  );
}
