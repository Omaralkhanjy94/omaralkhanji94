"use server";
import print from "@/app/core";
import { promises as fs } from 'fs';
import DownloadLink from "./downloadapplication";

export default async function ProjectDetails({projectId}){    
    const file = await fs.readFile(process.cwd() + `/app/projects/data.json`, 'utf8');
    const data = JSON.parse(file);
    print(`first : ${projectId}`);
    if(projectId<1){
        projectId=0;
    }
    print(`second : ${projectId}`);
    const project = data[projectId];
     print(`Post title : ${project.title}`);
     var dl= "";
     dl=`/app/projects/${projectId}`;
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