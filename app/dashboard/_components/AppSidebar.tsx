"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Bot,
  Database,
  LayoutDashboard,
  User2Icon,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MenuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: "AI Agents",
      icon: Bot,
      href: "#",
    },
    {
      title: "Data",
      icon: Database,
      href: "#",
    },
    {
      title: "Pricing",
      icon: WalletCards,
      href: "#",
    },
    {
      title: "Profile",
      icon: User2Icon,
      href: "#",
    },
  ];

export const AppSidebar = () => {
  const {open} = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Agent Builder Logo"
            width={35}
            height={35}
          />
          {
            open && <span className="text-lg font-semibold">AgentEngine</span>
          }
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuItems.map((item, idx) => (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton asChild size={open ? 'lg' : 'default'}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
};
