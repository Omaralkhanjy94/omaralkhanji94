"use client";
import Link from "next/link";
import print from "../core";
import { useEffect } from "react";
export default function DownloadLink (dl){
    var comm = "";
    print(dl);
    
    // if(message != "")return (`${message}`);
    return (<Link href={{dl}} style={{fontSize:"9pt", backgroundColor:"blue", 
    borderRadius:"10px", color:"white", padding : "5px"}}>Download Application</Link>);

}