
import ProjectDetails from "@/app/components/projectDetails";
import print from "@/app/core";
import { Suspense } from "react";
import {promises as fs} from "fs";
import "@/app/api/data.json";
export default async function ProjectDetailsPage({params}){
    //process.cwd() + 
    const file = await fs.readFile(`${process.cwd()}/app/api/data.json`, 'utf8');
    const projects = JSON.parse(file);     
    const projectId = params.projectId;
    print(`${process.cwd()}/app/api/data.json`);
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
        width:"90%"
    }}>
        <h1>Project Details</h1>
        <Suspense key={projectId} fallback={loadingJSX}>
            {projectJSX}
        </Suspense>
    </div>
    );
}