import Link from "next/link";

export default function HomePage(){
    return (
        <main>
            <h1>Home Page</h1>
            <Link href="/aboutpage">
                <button>Take me to About Page</button>
            </Link>
        </main>
    );
}