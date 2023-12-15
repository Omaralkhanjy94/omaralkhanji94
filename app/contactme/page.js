import Link from "next/link";

export default function ContactMePage(){
    return (
        <div style={{padding:"20px"}}>
            <h1 style={{paddingLeft:"30px"}}>Call me on:</h1>
            <h2 style={{paddingLeft:"30px"}}>00962795372616</h2>

            <h1 style={{paddingLeft:"30px"}}>Send me an email on:</h1>
            <h2 style={{paddingLeft:"30px"}}>omaralkhanji@gmail.com</h2>

            <Link href="https://www.linkedin.com/in/omar-al-khanji-157a10b8/" 
            style={{fontSize:"14pt",paddingLeft:"30px"}}>LinkedIn</Link>
            <Link href="https://github.com/Omaralkhanjy94" 
            style={{fontSize:"14pt",paddingLeft:"30px"}}>GetHub</Link>
        </div>
    );
}