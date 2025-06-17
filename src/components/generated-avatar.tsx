import { botttsNeutral, initials } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface GeneratedAvatarProps {
  seed: string;
  variant?: 'bottsNeutral' | 'initials';
  className?: string;
}

export const GeneratedAvatar = ({
  seed,
  className,
  variant = 'bottsNeutral',
}: GeneratedAvatarProps) => {
  let avatar;

  if (variant === 'bottsNeutral') {
    avatar = createAvatar(botttsNeutral, {
      seed,
    });
  } else {
    avatar = createAvatar(initials, {
      seed,
      fontWeight: 500,
      fontSize: 42,
    });
  }

  return (
    <Avatar className={cn('w-full h-full', className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
