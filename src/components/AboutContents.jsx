import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div>
            <h2>This About Contents Page </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis cum sed? Voluptatem non beatae cupiditate ab, officiis ducimus saepe odit commodi earum quae aliquid nemo magni optio quisquam labore!
            Eos odio beatae nihil cumque provident culpa vitae rem. Molestias eius, .</p>
            <Link className='mr-2 text-blue-400' href={'/about/history'}>History</Link>
            <Link className='ml-2 text-blue-400' href={'/about/history/vision'}>Vision</Link>
            <Link className='ml-2 text-blue-400' href={'/about/mission'}>Mission</Link>
        </div>
    );
};

export default AboutContents;