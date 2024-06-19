"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import { BentoGridThirdDemo } from "@/components/bento-grid";
import { useMediaQuery } from 'usehooks-ts';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 640px)');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex flex-1">
        {isDesktop && (
          <div className="w-[270px]">
            <SideBar />
          </div>
        )}
        <div className={`flex-1 p-4 ${isDesktop ? '' : 'w-full'}`}>
          <BentoGridThirdDemo />
        </div>
      </div>
    </div>
  );
}
