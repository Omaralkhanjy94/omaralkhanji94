import print from "@/app/core";


export default async function PostsDetails({postId}){
    
    
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next:{
                revalidate: 120
            }
        }
    );
    const post = await response.json();
     print(`Post title : ${post.title}`);
    return(
    // 
    <div>
        <div 
             style={{
                width: "100%", 
                background:"white",
                color:"brown",
                padding: "10px",
                borderRadius: "10px",
                color: "black",
                marginTop: "20px",
            }}
        >
            <h3>{post.title}</h3>
            <hr/>
            <p>{post.body}</p>
        </div>
    </div>
    );
}