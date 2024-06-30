
import {Button} from '@/components/ui/button'
import { signIn , signOut, useSession } from 'next-auth/react'

export default function LoginButton(){
    const {data : session} = useSession();
    
    const handleSignOut = async () => {
        await signOut();
    };


    if(session && session.user){
    return(
        <div>
            <Button className="bg-blue-600 text-white" onClick={handleSignOut}>Sign Out</Button>
        </div>
        )
     }
     
     return(
        <div>
             <Button className="bg-blue-600 text-white" onClick={()=>signIn()}>
                SignIn with Google Account</Button>
        </div>
     )

}