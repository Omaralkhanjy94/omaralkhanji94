import ProjectDetails from "@/app/components/projectDetails";
import print from "@/app/core";
import { Suspense } from "react";
import { promises as fs } from 'fs';

export default async function ProjectDetailsPage({params}){
    
    const file = await fs.readFile(process.cwd()+`/public/json/data.json`,'utf8');
    const project = JSON.parse(file);
    const projectId = params.projectId;

    print(project);

    const loadingJSX=(
        <div>            
            <p>Wait...</p>
        </div>
    );
    return(
    <div style={{
        padding: "0px 0px 50px 30px",
        width:"70%"
    }}>
        <h1>Project Details</h1>
        <Suspense fallback={loadingJSX}>
            <ProjectDetails projectId={projectId}/>
        </Suspense>
    </div>
    );
}