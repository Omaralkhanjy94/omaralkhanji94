import styles from './page.module.css';
// import Avatar from './components/avatar';
import Image from 'next/image';
export default function Home() {
  
  return (
    <section id="about" className="container mt-5">
        <div className="row" style={{padding:"20px 50px 100px 20px"}}>
            <div className="col-md-6">
                <h2>Hello, to my portfolio</h2>
                <p>
                  In this website:
                  <br/>
                  I am showing my projects,
                  <br/>
                  Information about me
                  <br/>And ways for contacting me               
                </p>
            </div>
            <div className="col-md-6">
                {/* <!-- يمكنك إضافة صورتك الشخصية هنا --> */}
                {/* <Image src={avatar} alt="me" width="64" height="64"/> */}
                {/* <Avatar/> */}

                <Image 
                  src={"/images/111_1.png"} 
                  alt="me" 
                  width="200" 
                  height="200"
                />

            </div>
        </div>
    </section>
  );
}
