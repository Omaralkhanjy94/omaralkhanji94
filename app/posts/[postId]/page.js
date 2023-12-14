import PostsDetails from "@/app/components/postDetails";
import print from "@/app/core";
import { Suspense } from "react";


export default async function PostsDetailsPage({params}){
    const postId = params.postId;

    const loadingJSX=(
        <div>
            <h1>Loading...</h1>
        </div>
    );
    return(
    <div style={{
        padding: "0px 0px 50px 50px",
        width:"70%"
    }}>
        <h1>Posts Details</h1>
        <Suspense fallback={loadingJSX}>
            <PostsDetails postId={postId}/>
        </Suspense>
    </div>
    );
}