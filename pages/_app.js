import "../styles/styles.css"
import "../styles/blog.css"
// import "../styles/style2.css"
// import "../styles/vendor.css"
// import "../styles/vendor2.css"


import Script from 'next/script'



import Image from 'next/image'
import logo_img from '../assets/images/logo.svg'


export default function App({Component,pageProps}) {

    return (
    <>
    <header class="s-header">
        <div class="s-header__logo">
            <a href="/">
            <Image src={logo_img} alt="HomePage" width="165px" height="24px"/>
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

    <Script src="../assets/js/jquery-3.2.1.min.js"/>
    <Script src="../assets/js/plugins.js"/>
    <Script src="../assets/js/main.js"/>
    <Component {...pageProps} />
    <footer class="s-footer bg-gradient-info">
        <div class="row row-y-top">
            <div class="column large-8 medium-12">
                <div class="row">
                    <div class="column large-7 tab-12 s-footer__block">
                        <h4 class="h6">Contact Us</h4>

                        <p>
                            Addis Ababa Ethiopia
                            <a href="tel:+251 923 09 20 27">+251 923 09 20 27</a> 
                            <a href="tel:+251 99 13 143 28">+251 991 31 43 28</a>
                        </p>
                    </div>
                    {/* <div class="column large-5 tab-12 s-footer__block">
                        <h4 class="h6">Follow Us</h4 class="h6">

                        <ul class="s-footer__list">
                            <li><a href="#0">Blog</a></li>
                            <li><a href="#0">Freelance</a></li>
                            <li>
                                <a href="#0"></a>
                            </li>
                        </ul>
                    </div>  */}
                </div>
            </div>

            <div class="column large-4 medium-12 s-footer__block--end">
                <a href="mailto:support@meqne.com" class="btn h-full-width">Let's Talk</a>

                <div class="ss-copyright">
                    <span>Copyright MeQne 2022</span>
                </div>
            </div>

            <div class="ss-go-top link-is-visible">
                <a class="smoothscroll" title="Back to Top" href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"></path></svg>
                </a>
            </div>
        </div>
    </footer>

</>

    )
}