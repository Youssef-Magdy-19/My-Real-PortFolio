
import { useEffect } from 'react';
import './App.css';
import NavBar from './compontens/1-header/NavBar';
import Hero from './compontens/2-hero/Hero';
import Projects from './compontens/3-Projects/Projects';
import Contact from './compontens/4-contact/Contact';
import Footer from './compontens/5-footer/Footer';
function App() {
  const scroll=()=>{
    let scroll2up = document.querySelector(".scroll2up")
    if(window.scrollY >= 100){
      return scroll2up.style.opacity = "1"
    }else{
      scroll2up.style.opacity = "0"
    }
  }
  const scrollToTop =()=>{
      window.scrollTo(0,0)
  }
  window.addEventListener("scroll",scroll)
  return (
    <div className='container'>
      <NavBar/>
      <Hero />
      <Projects />
      <Contact />
      <Footer/>

      <button className='scroll2up' onClick={()=> scrollToTop()}><span className='icon-keyboard_arrow_up'/></button>
    </div>
  );
}

export default App;
