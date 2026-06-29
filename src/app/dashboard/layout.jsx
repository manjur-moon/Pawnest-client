import DashboardShell from "@/components/shared/DashboardShell";

export const metadata = { title: "Dashboard | PawsNest" };

export default function DashboardLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
