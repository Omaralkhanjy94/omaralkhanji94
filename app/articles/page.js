import Link from "next/link";

export default async function ArticlesPage(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();

    return (
        <div>
            <h1>Articles Page</h1>
            
            <p>{todo.title}</p>
            <Link href="/homepage">
                <button>Take me to home page.</button>
            </Link>
        </div>
    );
}