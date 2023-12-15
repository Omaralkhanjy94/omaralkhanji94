'use client';
// import { promises as fs } from 'fs';
import Image from 'next/image';

export default async function Avatar(){
    // const file = await fs.readFile(process.cwd() + '/app/avatar.json', 'utf8');
    // const avatar = JSON.parse(file); 
    return (<div>
        <Image src={"/images/111_1.png"} height={200} width={200}/>
        {/* <Image src={"/images/logo.png"} height={50} width={50}/> */}
        </div>
    );
}
