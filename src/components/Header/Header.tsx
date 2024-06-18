"use client";

import * as React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modeToggle/theme";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-black text-white px-4 py-2 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">DevPulse</a>
        </Link>
      </div>
      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-black"
        />
      </div>
      <div className="flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link href="/about" legacyBehavior>
                    <a>About</a>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/contact" legacyBehavior>
                    <a>Contact</a>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mode Toggle */}
        <ModeToggle />
        {/* Login Button */}
        <Link href="/login" legacyBehavior>
          <a>
            <Button variant="outline" className="text-white">
              Login
            </Button>
          </a>
        </Link>
        {/* Create Account Button */}
        <Link href="/signup" legacyBehavior>
          <a>
            <Button className="bg-blue-600 text-white">Create Account</Button>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
