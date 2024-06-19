"use client";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { SidebarItems } from "../lib/types";
import { Link, Menu, X } from "lucide-react";
import { SidebarButton } from "./SideBarButton";
import { usePathname } from "next/navigation";

interface SideBarMobileProps {
  sidebarItems: SidebarItems;
}

export default function SideBarMobile(props: SideBarMobileProps) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="fixed left-3 top-3 z-50">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent hideClose side="left" className="px-3 py-4 z-40">
        <SheetHeader className="flex flex-row justify-between items-center space-y-0">
          <span className="text-lg font-semibold text-foreground mx-3">
            DevPulse
          </span>
          <SheetClose>
            <Button className="h-7 w-7 p-0" variant="ghost">
              <X size={15} />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div>
          {props.sidebarItems.links.map((link, index) => (
            <Link key={index} href={link.href}>
              <SidebarButton
                variant={pathname === link.href ? 'secondary' : 'ghost'}
                icon={link.icon}
                className="w-full"
              >
                {link.label}
              </SidebarButton>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
