import {ReactNode} from 'react';
import {Metadata} from 'next';

/**
 * The Layout is needed to specify the page title and meta tags.
 */
export default function AboutLayout({children}: {children: ReactNode}) {
	return (
		< >
        <div className=''>
        {children}
        </div></>
	); 
}
export const metadata: Metadata = {
	title: 'Register',
	robots: 'noindex'
};