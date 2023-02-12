
import Image from 'next/image';
// import Head from 'next/head';
import Link from 'next/link';
import "../styles/styles.css";
import "../styles/blog.css";
// import "../styles/style2.css"
// import "../styles/vendor.css"

// import "../styles/vendor2.css"
import atc from "../assets/images/apple-touch-icon.png";
import mobileev from '../assets/images/mobileev.png';
import Script from 'next/script';
import logo_img from '../assets/images/logo.svg'

import Header from '../components/Header'
import Footer from '../components/Footer'
export default function App({Component,pageProps}) {

    return (
    <>
        <Header></Header>

    <header class="s-header">
        <div class="s-header__logo">
            <a href="/">
            <Image src={logo_img}  alt="HomePage" width="165px" height="24px"/>
                {/* <img src="../assets/images/logo.svg" alt="Homepage"/> */}
            </a>
        </div>

        <div class="s-header__content">

            <nav class="s-header__nav-wrap">
                <ul class="s-header__nav">
                    <li><a class="smoothscroll" href="#hero" title="Intro">Home</a></li>
                    <li><a class="smoothscroll" href="#about" title="About">About</a></li>
                    <li><a class="smoothscroll" href="#services" title="Services">Services</a></li>
                </ul>
            </nav>

            <a href="new-project.html" class="btn btn--primary btn--small">New Project </a>  
        </div>

        <a class="s-header__menu-toggle" href="#0"><span>Menu</span></a>
    </header>

    <Component {...pageProps} />
    
    <Footer></Footer>

</>
)
}
