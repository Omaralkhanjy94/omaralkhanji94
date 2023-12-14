export const metadata = {
    title: "Article"
    };
    
export default function ({children}){
    return (
        <div>
            <h1>Articles</h1>

            <div
                style={{
                    marginTop:"50px",
                    background: "blue",
                    color:"white",
                    padding: "20px",
                    width: "250px",
                    borderRadius: "10px",
                }}>
                {children}
            </div>
        </div>
    );
}