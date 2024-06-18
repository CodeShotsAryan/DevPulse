"use client"
import Header from "@/components/Header/Header"
import { GlobeDemo } from "@/components/Globe"
import SideBar from "@/components/SideBar/SideBar"

export default function HomePage(){

       
    return(
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="container">
                    <SideBar/>
                </div>
      </div>
    )
}