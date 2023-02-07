
import Image from 'next/image'
import ar_img from '../assets/images/ar.svg'
import mobiledev_img from '../assets/images/mobiledev.svg'
import mobile_img from '../assets/images/mobile.svg'
import telegram_img from '../assets/images/icons/telegram.png'

export default function Home() {

    return <>

    <section id="hero" class="s-hero target-section">
        <div class="s-hero__bg">
            <div class="gradient-overlay"></div>
        </div>
        <div class="row s-hero__content">
            <div class="column">
                <h1>MeQne</h1>
                <div class="s-hero__content-about">
                    <p>
                        You Build, We Nurture.
                    </p>
                    <footer>
                        <div class="s-hero__content-social">
                            {/* <a href="#0"><i class="fab fa-facebook-f" aria-hidden="true"></i></a> 
                            <a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a>  */}
                            <a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                            <a href="#0"><i class="fab fa-telegram" aria-hidden="true"></i></a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>


        <div class="s-hero__scroll">
            <a href="#services" class="s-hero__scroll-link smoothscroll">
                Scroll Down
            </a>
        </div>
    </section>


    <section id="about" class="s-about">
        <div class="horizontal-line"></div>

        <div class="row">
            <div class="column large-12">
                <div class="section-title" data-aos="fade-up">
                    <h3 class="h6">Who We Are</h3>
                </div>
            </div>

            <div class="column large-6 w-900-stack s-about__intro-text">
                <h2 class="display-1" data-aos="fade-up">
                    MeQne is a Tech  solution provider.
                    We design innovative digital experiences   and Next level brand aesthetics.
                </h2>

                <p class="lead" data-aos="fade-up">
                    Our name literally translates to Bone-Marrow, Majorly producing stem cells, which is a must for a being! So are we For your company :)
                </p>
            </div>

            <div class="column large-6 w-900-stack s-about__photo-block">
                <div class="s-about__photo" data-aos="fade-up"></div>
            </div>
        </div>
    </section>


    <section id="services" class="s-styles">
        <div class="container">
            <div class="row">
                <div class="cardd">
                    <div class="icon"></div>
                    <div class="icon2"></div>
                    <div class="box">

                    <Image src={ar_img} alt="" width="165px" height="24px"/>
                        {/* <img src="./images/ar.svg" alt=""/> */}
                        <p> Define, Design, Build and deploy a website. With Us, You can reach out to the world beyond the normal trend.
                        </p>
                    </div>
                </div>
                <div class="cardd">
                    <div class="icon"></div>
                    <div class="icon2"></div>
                    <div class="box">
                    <Image src={mobiledev_img} alt="HomePage" width="165px" height="24px"/>
                        {/* <img src="./images/mobiledev.svg" alt=""/> */}
                        <p> Reinvent your company's future through digital innovation, we add customised features and specification for your each project
                        </p>
                    </div>
                </div>
                <div class="cardd">
                    <div class="icon"></div>
                    <div class="icon2"></div>
                    <div class="box">

                        <Image src={mobile_img} alt="HomePage" width="165px" height="24px"/>
                        {/* <img src="./images/mobile.svg" alt=""/> */}
                        <p>With the current era, Social media marketing is a key to your company.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* <section class="py-7">
        <div class="row mt-5">
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                    <div class="card card-background move-on-hover">
                        <div class="full-background" style="background-image: url('./images/civil.jpg')"></div>
                        <div class="card-body pt-12">
                            <h4 class="text-white">Brand analysis: second step to the brand identity</h4>
                            <p>Why would anyone pick us over another?</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="javascript:;">
                    <div class="card card-background move-on-hover">
                        <div class="full-background" style="background-image: url('./images/civil.jpg')"></div>
                        <div class="card-body pt-12">
                            <h4 class="text-white">How to check the website before releasing it?</h4>
                            <p>A network alone will not lead to opportunities. It has to be combined with the content you consume (books, media) to see how this network.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-4">
                <a href="javascript:;">
                    <div class="card card-background move-on-hover">
                        <div class="full-background" style="background-image: url('./images/civil.jpg')"></div>
                        <div class="card-body pt-12">
                            <h4 class="text-white">People get Intimidated. Let's make some entertainment! </h4>
                            <p>If you’re living well, you will make dissatisfied people feel insignificnt. People get intimidated by anything that makes them feel small.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section> */}


    <section class="s-contact">
        <div class="row narrower s-contact__top h-text-center">
            <div class="column">
                <h5>Have an idea?</h5>
                <h6 class="display-1 h6">
                    Let's build the future, together.
                </h6>
            </div>
        </div>

        <div class="row h-text-center">
            <div class="column">
                <p class="s-contact__email">
                    <a href="mailto:support@meqne.com">support@meqne.com</a>
                </p>
            </div>
            <div class="column">
                <p class="s-tele">
                    <a href="https://t.me/meqne">
                    <Image src={telegram_img} alt="HomePage" width="165px" height="24px"/>
                        {/* <img src="./images/icons/telegram.png"/> */}
                    </a>
                </p>
            </div>
        </div>
    </section>

    {/* <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script> */}

</>
}