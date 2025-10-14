"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Shazeb :D",
    email: "shazeb.arafin@gmail.com",
    avatar: "/Gall2.jpg",
  },
  navMain: [
    {
       title: "About me",
      url: "#about-me",
      icon: IconDashboard,
    },
    {
      title: "My City",
      url: "#my-city",
      icon: IconListDetails,
    },
    {
      title: "Gallery",
      url: "#gallery",
      icon: IconChartBar,
    },
    {
      title: "My Favourite Sports",
      url: "#my-favourite-sports",
      icon: IconFolder,
    },
    {
      title: "My Favourite book",
      url: "#my-favourite-book",
      icon: IconUsers,
    },
    {
      title: "My Message",
      url: "#my-message",
      icon: IconUsers,
    },
  ],

 }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Shazeb</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
       </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
