import { AdminHeader } from "@/components/admin/AdminHeader";
import { ResumeManager } from "@/components/admin/ResumeManager";
import { dummyResumes } from "@/lib/admin-data";

export default function AdminResumesPage() {
  const newCount = dummyResumes.filter((r) => r.status === "new").length;

  return (
    <>
      <AdminHeader
        title="Resumes"
        subtitle={`${newCount} new application${newCount !== 1 ? "s" : ""} from careers page`}
      />
      <div className="px-5 py-8 sm:px-8">
        <ResumeManager initialResumes={dummyResumes} />
      </div>
    </>
  );
}
