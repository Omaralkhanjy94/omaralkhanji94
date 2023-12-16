import ProjectDetails from "@/app/components/projectDetails";
// import print from "@/app/core";
import { Suspense } from "react";
import {promises as fs} from "fs";
export default async function ProjectDetailsPage({params}){
    //process.cwd() + 
    const file = await fs.readFile(`${process.cwd()}/public/json/data.json`, 'utf8');
    const projects = JSON.parse(file);     
    const projectId = params.projectId;

    const projectJSX = projects.map((project)=>{
        if(project.id === projectId)
        {return <div key={projectId}>
            <ProjectDetails project={project} projectId={projectId}/>
        </div>}
        else{
            return <div key={projectId}> 
        </div> 
        }
        

    });
    const loadingJSX=(
        <div>            
            <p>Wait...</p>
        </div>
    );
    return(
    <div key={projectId} style={{
        padding: "0px 0px 50px 30px",
        width:"70%"
    }}>
        <h1>Project Details</h1>
        {/* <Suspense key={projectId} fallback={loadingJSX}> */}
            {projectJSX}
        {/* </Suspense> */}
    </div>
    );
}