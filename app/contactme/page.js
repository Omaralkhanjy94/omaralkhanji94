import Link from "next/link";

export default function ContactMePage(){
    return (
        <div style={{padding:"20px"}}>
            <p style={{paddingLeft:"10px", paddingRight:"30px"}}>Call me on:</p>
            <p style={{paddingLeft:"20px", paddingRight:"30px"}}>00962795372616</p>
            <br/>
            <p style={{paddingLeft:"10px", paddingRight:"30px"}}>Send me an email on:</p>
            <p style={{paddingLeft:"20px", paddingRight:"30px"}}>omaralkhanji@gmail.com</p>
            <br/>
            <Link href="https://www.linkedin.com/in/omar-al-khanji-157a10b8/" 
            style={{fontSize:"12pt",paddingLeft:"10px", 
            paddingRight:"30px", backgroundColor:"lightBlue", 
            color:"brown", margin:"10px", borderRadius: "10px", textAlign:"center"}}>LinkedIn</Link>
            
            <Link href="https://github.com/Omaralkhanjy94" 
            style={{fontSize:"12pt",paddingLeft:"10px", 
            paddingRight:"30px", backgroundColor:"lightBlue", 
            color:"brown", margin:"10px", borderRadius: "10px",textAlign:"center"}}>GetHub</Link>
        </div>
    );
}