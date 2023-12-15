import Link from "next/link";

export default function ContactMePage(){
    return (
        <div>
            <h1>Call me on:</h1>
            <h2>00962795372616</h2>

            <h1>Send me an email on:</h1>
            <h2>omaralkhanji@gmail.com</h2>

            <Link  href="https://www.linkedin.com/in/omar-al-khanji-157a10b8/" 
            style={{fontSize:"14pt"}}>LinkedIn</Link>
            <Link href="https://github.com/Omaralkhanjy94" 
            style={{fontSize:"14pt"}}>GetHub</Link>
        </div>
    );
}