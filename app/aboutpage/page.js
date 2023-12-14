import Link from "next/link";

export default function AboutPage(){
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/homepage">
                <button>Take me to home page.</button>
            </Link>
            <Link href="/aboutpage/features">
                <button>Take me to features page.</button>
            </Link>
        </div>
    );
}