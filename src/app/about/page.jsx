import React from 'react';
import { Headland_One } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const headland = Headland_One({weight: ['400'], subsets: ['latin']})

const getTime = async () =>{
    const res = await fetch('http://localhost:3000/time', { next:{revalidate:5}})
    // const res = await fetch('http://localhost:3000/time', { cache: 'no-store'})
    const data = await res.json()
    return data.currentTime;
}


const AboutPage = async() => {
    const session = await getServerSession(authOptions)
    console.log({session})




    const currentTime = await getTime()


    return (
        <div className={`${headland.className} px-12 py-20` }>
            <h2>About Page</h2>
            <h2>Time : {currentTime}</h2>
        </div>
    );
};

export default AboutPage;