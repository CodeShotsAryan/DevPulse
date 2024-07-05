"use client"
import { BentoGridThirdDemo } from "@/components/bento-grid";
import { BentoGrid } from "@/components/ui/bento-grid";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
   <div className=""> 
     {
                status==="authenticated" ? 
                (
                    <>
                    <h1>
                        hello ,  welcome to Devpulse
                    </h1>
                    </>
                ):(
                    <div>
                      Please Login or Register
                    </div>
                )
            }
    This is Home Page 
    {/* <BentoGridThirdDemo/> */}
   </div>
  );
}
