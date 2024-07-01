import { getPostsDetails } from '@/services/postApi';
import React from 'react';

// export const metadata = {
//     title: "Post details",
//     description: "This is from Post details",
//     keywords:["post", "post page"]
//   };
export const generateMetadata = async({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()
   return {
     title: `Post details ${postData.title}`,
     description : postData.body,
     keywords: postData.body.split(' ')
   }
}

const PostDetailsPage = async ({ params }) => {
    // console.log(params.id)
    const { title, body , id} = await getPostsDetails(params.id)
    // console.log(postDetails)
    return (
        <div>
            <h2>Id : {params.id}</h2>
            <div className="p-3 border-2 shadow-2xl">
                <h2>Id: {id}</h2>
                <h2>Title: {title}</h2>
                <h2>Description: {body}</h2>
                {/* <button type="button" className="flex items-center justify-center bg-green-600 p-1 space-x-1.5">
                        <Link href={`/posts/${id}`}>See more</Link>
                    </button> */}
            </div>
        </div>
    );
};

export default PostDetailsPage;