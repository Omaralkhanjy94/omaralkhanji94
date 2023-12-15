// "use client";
import Link from "next/link";

export default function DownloadLink (dl){
    // if(message != "")return (`${message}`);
    return (<Link href={{dl}} style={{fontSize:"12pt", backgroundColor:"blue", 
    borderRadius:"10px", color:"white", padding : "5px"}}>Download Application</Link>);

}