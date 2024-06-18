import { LucideIcon } from 'lucide-react';
import { Button, ButtonProps } from  '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SheetClose } from '@/components/ui/sheet';

interface SideBarButtonProps extends ButtonProps {
  icon?: LucideIcon;
}

export function SidebarButton({
  icon: Icon,
  className,
  children,
  ...props
}: SideBarButtonProps) {
  return (
    <Button
      variant='ghost'
      className={cn('gap-2 justify-start', className)}
      {...props}
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </Button>
  );
}

export function SidebarButtonSheet(props: SideBarButtonProps) {
  return (
    <SheetClose asChild>
      <SidebarButton {...props} />
    </SheetClose>
  );
}