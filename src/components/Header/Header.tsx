"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modeToggle/theme";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import SideBar from "../SideBar/SideBar";
import { useSession, signOut, signIn } from "next-auth/react";

const Header: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <nav className="navbar bg-black text-white px-4 py-2 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">DevPulse</a>
        </Link>
      </div>
      <Button size="icon" variant="ghost" onClick={toggleSideBar} className="sm:hidden">
        {isSideBarOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
      {isSideBarOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <SideBar />
        </div>
      )}
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
        {/* Login and Create Post Buttons */}
        {status === "authenticated" ? (
          <>
            <Link href="/create-post">
              <Button>Create Post</Button>
            </Link>
            <Button onClick={() => signOut()} className="bg-blue-600 text-white">
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button className="bg-blue-600 text-white" onClick={() => signIn('google')}>
              Sign In with Google
            </Button>
            <Link href="/signup" legacyBehavior>
              <a>
                <Button className="bg-blue-600 text-white">Create Account</Button>
              </a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
