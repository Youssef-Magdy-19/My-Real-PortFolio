
import Hero from '../compontens/2-hero/Hero';
import Skills from '../compontens/3-Skills/Skills';
import Projects from '../compontens/4-Projects/Projects';
import Contact from '../compontens/5-contact/Contact';
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"

const Home = () => {
    const scroll = () => {
        const scroll2up = document.querySelector(".scroll2up");

        if (scroll2up instanceof HTMLElement) {
            scroll2up.style.opacity = window.scrollY >= 100 ? "1" : "0";
        }
    }
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    window.addEventListener("scroll", scroll)
    useWindowScrollToTop()
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <button className='scroll2up' onClick={() => scrollToTop()}><span className='icon-keyboard_arrow_up' /></button>
        </div>
    );
}

export default Home;
