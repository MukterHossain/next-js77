import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            <div className='px-12 py-20'>
                <h2 className='text-3xl text-center mb-10'>Gallery Page</h2>
                <div>
                    {
                        [1,2,3,4,5,6]?.map((img) =>(
                            <Image key={img} className='mb-2' src={`/images/${img}.jpg`} alt="photo" width='1280' height='600'/>
                        ))
                    }
                </div>
                {/* <Image src="/images/3.jpg" alt="photo1" width='1280' height='600'/>
                <img src="/images/2.jpg" alt="photo1" width='1280' height='600'/> */}

            </div>
        </div>
    );
};

export default GalleryPage;