import Link from "next/link";
import { promises as fs } from 'fs';

export default async function ProjectsPage(){
    const file = await fs.readFile(process.cwd() + '/public/json/data.json', 'utf8');
    const projects = JSON.parse(file); 
    const projectsJSX = projects.map((project) => {
        return (
            <Link key={project.id} href={`/projects/${project.id}`}
            style={{
                width:"70%",
            }}>
                <div key={project.id}
                     style={{
                        width: "100%", 
                        background:"white",
                        color:"brown",
                        padding: "10px",
                        borderRadius: "10px",
                        marginTop: "20px",
                    }}
                >
                    <h3 key={project.id}>{project.title}</h3>
                    <img key={project.id} className="projectcomponent" src={project.img_path} 
                    height="80%" width="90%" style={{paddingLeft:"30px"}}/>
                </div>
            </Link>
        );
    });
    // print(posts);

    return (
        <div>
            <h1>Projects Page</h1>
            {/*==PROJECTS==*/}
            <div 
            style={{
                display:"flex",
                justifyContent: " center",
                alignItems: "center",
                flexDirection: "column",
            }}>
                {projectsJSX}
                
                </div>
            
        </div>
    );
};