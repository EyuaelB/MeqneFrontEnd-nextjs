// function Head() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
import Head from "next/head"

//   export default Car;

export default function Header() {

    return
    <>
    <Head>
    <meta charset="utf-8"/> 
    <title>Meqne</title>
    <meta name="description" content=""/>
    <meta name="author" content=""/>

    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <Link rel="stylesheet" href="css/styles.css"/>
    <Link rel="stylesheet" href="css/blog.css"/>

    <Link rel="icon" type="image/png" sizes="32x32" href={mobileev}/>
    <Link rel="icon" type="image/png" sizes="16x16" href={mobileev}/> 
    
    <Script src="../assests/js/modernizer.js"></Script>
    <Script src="../assets/js/fontawesome/all.min.js"></Script> 
    
    <Script src="../assets/js/jquery-3.2.1.min.js"/>
    <Script src="../assets/js/plugins.js"/>
    <Script src="../assets/js/main.js"/>

    <Link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png"/>
    {/* <Link rel="icon" type="image/png" sizes="32x32" href="../assets/images/mobileev.png"/>
    <Link rel="icon" type="image/png" sizes="16x16" href="../assets/images/mobileev.png"/> */}
    
    <Link rel="manifest" href="site.webmanifest"/>
    </Head> 
    </>
}