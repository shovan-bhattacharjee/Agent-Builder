import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";

export const DashboardProvider = ({ children }: any) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-screen">
        <AppHeader />
        {children}
      </div>
    </SidebarProvider>
  );
};
