'use client';

import { useState } from 'react';
import { PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { NewAgentDialog } from './new-agent-dialog';

export const ListHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NewAgentDialog open={open} onOpenChange={setOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="text-2xl font-medium">My Agents</h5>
          <Button onClick={() => setOpen(true)}>
            {' '}
            <PlusIcon /> Create Agent
          </Button>
        </div>
      </div>
    </>
  );
};
