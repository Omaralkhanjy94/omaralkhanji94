"use client";
import print from "@/app/core";
import DownloadLink from "./downloadapplication";

export default function ProjectDetails({projectId, project}){   
    
    if(projectId<1){
        projectId=0;
    }
     var dl= "";
     dl=``;
     var message = "";var messagecolor="red";
     print(project.download_link);
     if(project.download_link!==""){
        dl=project.download_link;
        print(dl);
        message = "The download link is valid.";
        messagecolor = "green";
        
     }
     else{
        dl=`/projects/${projectId}`;
        message = "The download link is invalid.";
        messagecolor= "red";
     }
     print(`message : ${message}`);
    return(
    // 
    <div key={projectId}>
        <div 
             style={{
                width: "100%", 
                background:"white",
                color:"brown",
                padding: "20px",
                borderRadius: "10px",
                color: "black",
                marginTop: "20px",
                marginLeft:"5px"
            }}
        >
            <h3>{project.title}</h3>
            <hr/>
            <div style={{padding:"25px 10px 10px 10px"} }>
                
                {/* <br/> */}
             {/* <i style={{color:`${messagecolor}`, fontSize:"12pt"}}>{message}</i>  */}
             {/* <br/><br/> */}
             
             {/* <DownloadLink dl={`/files/proj8.apk`}/> */}
             {/* <br/><br/> */}
             <h5>video</h5>
           
            <video className="projectvideo" src={project.video_path} width="100%" controls></video>
              
            </div>
            {/* <Link href={dl} >Download Application</Link> */}
           
            
            
        </div>
    </div>
    );
}