import Avatar from "@/app/components/avatar";
export default function LoadingProjectDetails(){
    return (
        <div 
        style={{
           width: "100%", 
           background:"white",
           color:"brown",
           paddingTop: "50px",
           paddingLeft:"50%",
           borderRadius: "10px",
           marginTop: "20px",
           textAlign:"center"
       }}>

        <Avatar/>
            <h1>Loading...</h1>

        </div>
    );
}