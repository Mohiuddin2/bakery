import { AdminHeader } from "@/components/admin/AdminHeader";
import { InventoryManager } from "@/components/admin/InventoryManager";
import { dummyInventory, getStockStatus } from "@/lib/admin-data";

export default function AdminInventoryPage() {
  const lowCount = dummyInventory.filter(
    (i) => getStockStatus(i) !== "healthy",
  ).length;

  return (
    <>
      <AdminHeader
        title="Inventory"
        subtitle={`Tracking ${dummyInventory.length} ingredients & supplies · ${lowCount} alerts`}
      />
      <div className="px-5 py-8 sm:px-8">
        <InventoryManager initialItems={dummyInventory} />
      </div>
    </>
  );
}
