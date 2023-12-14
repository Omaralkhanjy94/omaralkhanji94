
export default function ({children}){
    return (
        <div>
            <h1>About layout</h1>

            <div
                style={{
                    marginTop:"50px",
                    background: "blue",
                    color:"white",
                    padding: "20px",
                    width: "300px",
                    borderRadius: "10px",
                }}>
                {children}
                <p 
                style={{
                    fontSize:"20px",
                    color:"yellow"
                }}>Hello</p>
            </div>
        </div>
    );
}