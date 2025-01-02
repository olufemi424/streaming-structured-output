"use client";

import { SquareTerminal, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import { NavMain } from "@/components/nav-main";
import { Sidebar, SidebarContent, SidebarItem } from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Vercel-AI",
          url: "/vercel-ai",
          icon: Star,
          description: "Vercel-AI",
        },
        {
          title: "Synchronous Test",
          url: "/synchronous",
          icon: Star,
          description: "Synchronous Test",
        },
        {
          title: "Streaming",
          url: "/streaming",
          icon: Star,
          description: "Streaming",
        },
      ],
    },
  ],
};

interface AppSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AppSidebar({ className, ...props }: AppSidebarProps) {
  const isMobile = useIsMobile();

  return (
    <Sidebar className={cn(!isMobile && "mt-14", className)} {...props}>
      <SidebarContent>
        <SidebarItem>
          <NavMain items={data.navMain} />
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  );
}
