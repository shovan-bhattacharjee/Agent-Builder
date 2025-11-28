"use client";

import { Button } from "@/components/ui/button";
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
import { UserDetailContext } from "@/context/UserDetailContext";
import {
  Bot,
  Database,
  Gem,
  LayoutDashboard,
  User2Icon,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const MenuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "AI Agents",
    icon: Bot,
    href: "/agents",
  },
  {
    title: "Data",
    icon: Database,
    href: "/data",
  },
  {
    title: "Pricing",
    icon: WalletCards,
    href: "/pricing",
  },
  {
    title: "Profile",
    icon: User2Icon,
    href: "/profile",
  },
];

export const AppSidebar = () => {
  const { open } = useSidebar();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const path = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="mt-2">
        <div className="flex justify-between items-center">
          <div
            className={`flex items-center gap-2 ${
              !open && "group-hover:hidden"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="Agent Builder Logo"
              width={35}
              height={35}
              className="size-8"
            />
            {open && <span className="text-xl font-semibold">AgentEngine</span>}
          </div>
          <SidebarTrigger
            className={`size-8 flex items-center justify-center rounded-md cursor-w-resize ${
              !open && "hidden group-hover:flex"
            }`}
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuItems.map((item, idx) => (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton isActive={path === item.href} asChild size={open ? "lg" : "default"}>
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
      <SidebarFooter className="mb-2">
        <div className="flex items-center gap-2">
          {open ? (
            <Gem className="size-5" />
          ) : (
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Gem className="size-5" />
            </Button>
          )}
          {open && (
            <h2>
              Remaining Credits:{" "}
              <span className="font-semibold">{userDetail?.token}</span>
            </h2>
          )}
        </div>
        {open && <Button className="cursor-pointer">Upgrade to Pro</Button>}
      </SidebarFooter>
    </Sidebar>
  );
};
