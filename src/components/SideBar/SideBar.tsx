"use client"
import {useMediaQuery} from 'usehooks-ts'
import SideBarDesktop from './SideBarDesktop'
import SideBarMobile from './SideBarMobile'
import { SidebarItems } from '../lib/types';

import {
    Bell,
    Bookmark,
    Home,
    List,
    Mail,
    MoreHorizontal,
    User,
    Users,
  } from 'lucide-react';
import { SidebarButton } from './SideBarButton';

const sidebarItems: SidebarItems = {
    links: [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Notifications', href: '/item/notifications', icon: Bell },
      { label: 'Messages', href: '/item/messages', icon: Mail },
      {
        href: '/item/lists',
        icon: List,
        label: 'Lists',
      },
      {
        href: '/About',
        icon: Bookmark,
        label: 'About',
      },
      {
        href: '/item/communities',
        icon: Users,
        label: 'Communities',
      },
      {
        href: '/item/profile',
        icon: User,
        label: 'Profile',
      },
    ],
    extras: (
      <div className='flex flex-col gap-2'>
        <SidebarButton icon={MoreHorizontal} className='w-full'>
          More
        </SidebarButton>
        <SidebarButton
          className='w-full justify-center text-white'
          variant='default'
        >
          Tweet
        </SidebarButton>
      </div>
    ),
  };

export default function SideBar (){
    const isDesktop  = useMediaQuery('(min-width:640px)',{
        initializeWithValue : false ,
    })
    if(isDesktop)
        return <SideBarDesktop sidebarItems={sidebarItems} />

    return (
        <SideBarMobile sidebarItems={sidebarItems}/>
    )

}