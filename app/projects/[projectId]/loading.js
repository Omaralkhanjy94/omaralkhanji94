import Image from "next/image";
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
        <h1 style={{color:"brown"}}>Loading...</h1>
        <Image 
        src={"/images/111_1.png"}
        height={100}
        width={100}
        />
       
        </div>
    );
}