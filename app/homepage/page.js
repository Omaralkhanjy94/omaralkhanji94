import Link from "next/link";
import Avatar from "../components/avatar";
export default function HomePage(){
    return (
        <main>
            <h1>Home Page</h1>
            <Link href="/aboutpage">
                <button>Take me to About Page</button>
            </Link>
            <Avatar/>
        </main>
    );
}