import { useRouter } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDownIcon, CreditCardIcon, LogOutIcon, UserIcon } from 'lucide-react';

import { GeneratedAvatar } from '@/components/generated-avatar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { signOut, useSession } from '@/lib/auth-client';

export const DashboardUserButton = () => {
  const { data, isPending } = useSession();
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleLogout = () => {
    signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/sign-in');
        },
      },
    });
  };

  if (isPending || !data) return <Skeleton className="w-10 h-10 rounded-full" />;

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
          {data.user.image ? (
            <Avatar>
              <AvatarImage src={data.user.image} />
              <AvatarFallback>{data.user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            <GeneratedAvatar seed={data.user.name} variant="initials" className="size-9 mr-3" />
          )}

          <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{data.user.name}</p>
            <p className="text-xs text-muted-foreground truncate">{data.user.email}</p>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{data.user.name}</DrawerTitle>
            <DrawerDescription>{data.user.email}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="outline" onClick={() => {}}>
              <CreditCardIcon className="size-4 text-black" />
              Billing
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOutIcon className="size-4 text-black" />
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
          {data.user.image ? (
            <Avatar>
              <AvatarImage src={data.user.image} />
              <AvatarFallback>{data.user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            <GeneratedAvatar seed={data.user.name} variant="initials" className="size-9 mr-3" />
          )}

          <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{data.user.name}</p>
            <p className="text-xs text-muted-foreground truncate">{data.user.email}</p>
          </div>
          <ChevronDownIcon className="size-4 shrink-0" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" side="right" className="w-72">
          <DropdownMenuLabel>
            <div className="flex flex-col gap-1">
              <span className="text-medium truncate">{data.user.name}</span>
              <span className="text-sm font-normal text-muted-foreground truncate">
                {data.user.email}
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
            <span>Billing</span>
            <CreditCardIcon className="size-4 ml-auto" />
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
            <span onClick={handleLogout}>Logout</span>
            <LogOutIcon className="size-4 ml-auto" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
