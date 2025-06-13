"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const APP_SIDELIST = [
  { name: "Challenge", link: "/challenge", icon: "" },
  { name: "Leaderboad", link: "/leaderboard", icon: "" },
  { name: "Support", link: "/support", icon: "" },
  { name: "Notification", link: "/notification", icon: "" },
];

function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="py-6 pl-4">
        <h1 className="text-4xl text-blue-700 font-semibold font-geist-sans mb-6">
          Quiz Game
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col">
              {APP_SIDELIST.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    className={`px-4 py-6 ${item.link === pathname ? "bg-blue-300" : ""}`}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
