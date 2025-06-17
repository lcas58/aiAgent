'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BotIcon, LogOutIcon, StarIcon, VideoIcon } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

import { DashboardUserButton } from './dashboard-user-button';

const firstSection = [
  {
    label: 'Meetings',
    href: '/meetings',
    icon: VideoIcon,
  },
  {
    label: 'Agents',
    href: '/agents',
    icon: BotIcon,
  },
];

const secondSection = [
  {
    label: 'Upgrade',
    href: '/upgrade',
    icon: StarIcon,
  },
];
export const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-accent-foreground">
        <Link href="/" className="flex items-center gap-2 px-2 pt-2">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
          <span className="text-lg font-bold">Meet AI</span>
        </Link>
      </SidebarHeader>
      <div className="px-4 py-2">
        <Separator className="opacity-10 text-[#5D6B68]" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {firstSection.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    'h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50 ',
                    pathname === item.href && 'bg-linear-to-r/oklch border-[#5D6B68]/10'
                  )}
                  isActive={pathname === item.href}
                >
                  <Link href={item.href}>
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium tracking-tight">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <div className="px-4 py-2">
          <Separator className="opacity-10 text-[#5D6B68]" />
        </div>
        <SidebarGroup>
          <SidebarMenu>
            {secondSection.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    'h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50 ',
                    pathname === item.href && 'bg-linear-to-r/oklch border-[#5D6B68]/10'
                  )}
                  isActive={pathname === item.href}
                >
                  <Link href={item.href}>
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium tracking-tight">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="text-white">
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
};
