"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/Header";
import Providers from "@/components/Providers";
import SideBar from "@/components/SideBar/SideBar";
import HomePage from "./home-page/homePage";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const hiddenNavbarAndSidebarRoutes = ["/new"];


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 

{
  const pathname = usePathname();
  const showNavbarAndSidebar = !hiddenNavbarAndSidebarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className="h-[50rem] w-full dark:bg-black bg-zinc-300  relative">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {showNavbarAndSidebar && <Header />}
            {showNavbarAndSidebar && <SideBar />}

            <main className="">
              {children}
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
