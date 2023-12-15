import ProjectDetails from "@/app/components/projectDetails";
// import print from "@/app/core";
import { Suspense } from "react";
import Avatar from "@/app/components/avatar";

export default async function ProjectDetailsPage({params}){
    const projectId = params.projectId;

    const loadingJSX=(
        <div>            
            {/* <img src="../images/logo.png" height="50px"/> */}

            <p>Wait...</p>
        </div>
    );
    return(
    <div style={{
        padding: "0px 0px 50px 50px",
        width:"70%"
    }}>
        <h1>Project Details</h1>
        <Suspense fallback={loadingJSX}>
            <ProjectDetails projectId={projectId}/>
        </Suspense>
    </div>
    );
}