"use client";
import print from "@/app/core";
import DownloadLink from "./downloadapplication";
// import fs from 'fs';
var fs = require('fs');

export default async function ProjectDetails({projectId}){   
    // const file = fs.readFile(`/json/data.json`, 'utf8',()=>{
    //     print("The file is opened");
    // });
    // const project = JSON.parse(`${process.cwd()}/public/json/data.json`); 

    const response = await fetch(`/projects/${projectId}`);
    const project = await response.json(); 

    if(projectId<1){
        projectId=0;
    }
     var dl= "";
     dl=`/projects/${projectId}`;
     var message = "";var messagecolor="red";
     if(project.download_link!=""){
        dl=project.download_link;
        message = "The download link is valid.";
        messagecolor = "green";
     }
     else{
        message = "The download link is invalid.";
        messagecolor= "red";
     }
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
            <h3>{project.title}</h3>
            <hr/>
            <div style={{padding:"25px 10px 5px 10px"} }>
                <br/>
             <i style={{color:`${messagecolor}`, fontSize:"12pt"}}>{message}</i> 
             <br/><br/>
             <DownloadLink dl={dl}/>
             <br/><br/>
             <h5>video</h5>
           
            <video className="projectvideo" src={project.video_path} width="100%" controls></video>
              
            </div>
            {/* <Link href={dl} >Download Application</Link> */}
           
            
            
        </div>
    </div>
    );
}