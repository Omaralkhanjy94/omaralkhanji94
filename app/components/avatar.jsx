'use client';
import { promises as fs } from 'fs';

export default async function Avatar(){
    const file = await fs.readFile(process.cwd() + '/app/avatar.json', 'utf8');
    const avatar = JSON.parse(file); 
    return (
        <img src={avatar.img_path} height="33%"/>
    );
}