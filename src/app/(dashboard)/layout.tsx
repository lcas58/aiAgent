import { DashboardNavbar } from '@/modules/dashboard/ui/components/dashboard-navbar';
import { DashboardSidebar } from '@/modules/dashboard/ui/components/dashboard-sidebar';

import { SidebarProvider } from '@/components/ui/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-full">
        <DashboardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
