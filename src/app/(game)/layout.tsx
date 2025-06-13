import AppSidebar from "@/components/common/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
}
