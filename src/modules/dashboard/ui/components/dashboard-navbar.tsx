'use client';

import { useEffect, useState } from 'react';
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

import { DashboardCommand } from './dashboard-command';

export const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <DashboardCommand open={open} setOpen={setOpen} />
      <nav className="flex px-4 gap-x-2 items-center py-3 border-b bg-background">
        <Button className="size-9" variant="outline" onClick={() => toggleSidebar()}>
          {state === 'collapsed' || isMobile ? (
            <PanelLeftIcon className="size-4" />
          ) : (
            <PanelLeftCloseIcon className="size-4" />
          )}
        </Button>
        <Button
          variant="outline"
          className="h-9 w-[240px] justify-start font-normal text-muted-foreground"
          size="sm"
          onClick={() => {
            setOpen(true);
          }}
        >
          <SearchIcon className="size-4" />
          Search
          <kbd className="ml-auto pointer-events-none select-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span>&#8984;</span>
            <span>K</span>
          </kbd>
        </Button>
      </nav>
    </>
  );
};
