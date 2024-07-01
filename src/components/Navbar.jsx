'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter()
    const session = useSession()
    console.log({ session })
    // console.log(pathName)

    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },

    ]


    // if(pathName.includes('dashboard'))
    //     return (
    //         <div className='bg-green-400 '>
    //             <h2 className='m-5'>dashboard Layout</h2>
    //             <Link href={'/about'}>About</Link>
    //         </div>
    //     )

    const handleLogin = () => {
        router.push('/api/auth/signin')
    }




    return (
        <div className=''>
            <nav className='flex justify-between bg-slate-200 px-4 py-4'>
                <h2 className='text-3xl font-bold'>Next<span className='text-cyan-600'>js77</span> <span className='text-green-600'>Concept</span></h2>
                <ul className='flex justify-center space-x-4'>
                    {
                        links?.map((link) => <Link className={`${pathName === link.path && 'text-blue-400'}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                    {/* <li > <Link href={'/about'}>About</Link></li>*/}
                </ul>
                <div className='flex justify-end items-center gap-2'>
                    <div className='flex justify-end items-center gap-1'>
                        <h5>
                            {session?.data?.user?.name}
                            <br />
                            {session?.data?.user?.type}
                        </h5>
                        {
                            session?.data && (
                                <div className='rounded-full mr-3 overflow-hidden size-10'>
                                    <Image height={50} width={50} alt={session?.data?.user?.name} src={session?.data?.user?.image}></Image>
                                </div>
                            )}
                    </div>
                    <div>
                      <Link href={'/api/auth/signup'}> <button className='bg-green-400 rounded-lg py-2 px-4 mr-2'>Sign Up</button></Link> 
                        {
                            session.status !== "authenticated" ? (<button onClick={handleLogin} className='bg-green-400 rounded-lg py-2 px-4 '>Login</button>)
                                : (<button onClick={() => signOut()} className='bg-green-400 rounded-lg py-2 px-4 '>Log Out</button>)
                        }
                    </div>

                </div>

            </nav>
        </div>
    );
};

export default Navbar;