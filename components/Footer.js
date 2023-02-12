
import Link from "next/link"

export default function first() {

    return <>
    
    <footer class="s-footer bg-gradient-info">
        <div class="row row-y-top">
            <div class="column large-8 medium-12">
                <div class="row">
                    <div class="column large-7 tab-12 s-footer__block">
                        <h4 class="h6">Contact Us</h4>

                        <p>
                            Addis Ababa, Ethiopia
                            <Link href="tel:+251 923 09 20 27">+251 923 09 20 27</Link>
                            <Link href="tel:+251 99 13 143 28">+251 991 31 43 28</Link>

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
                    <span>Copyright MeQne {new Date().getFullYear()}</span>
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


}