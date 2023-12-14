import Link from "next/link";

export default function FeaturesPage(){
    return (
        <div>
            <h1>Features Page</h1>
            <Link href="/homepage">
                <button>Take me to home page.</button>
            </Link>
            <Link href="/aboutpage">
                <button>Take me to about page.</button>
            </Link>
        </div>
    );
}