import "./Hero.css"
import { useState, useEffect } from "react"
import image from "../../images/cropped_image.png"
import imageHero from "../../images/cropped_image (1).png"
import iconImg from "../../images/verified_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Lottie from "lottie-react";
import developer from "../../animation/developer.json"

const Hero = () => {
  const [loopNum, setloopNum] = useState(0)
  const [isDeleting, setisDeleting] = useState(false)
  const toRotate = [" Web Developer.", " Front End .", " Back End ."]
  const [text, settext] = useState("")
  const [delta, setdelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    const tricker = setInterval(() => {
      trick()
    }, delta)

    return () => { clearInterval(tricker) }
  }, [text])
  const trick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    settext(updateText)

    if (isDeleting) {
      setdelta(newdelta => newdelta / 2)
    }
    if (!isDeleting && updateText === fullText) {
      setisDeleting(true)
      setdelta(period)
    } else if (isDeleting && updateText === "") {
      setisDeleting(false)
      setloopNum(loopNum + 1)
      setdelta(500)
    }
  }
  return (
    <section className="Hero" id="Home">
      <div className="">
        <div className="my-info pt-5 pb-4 text-white row justify-content-between">
          <div className=" col-xl-6 col-md-7 col-sm-8 ps-4 col-12">
            <div className="d-flex avatar align-items-end mb-2">
              <img src={image} className="my-img" alt="" height={70} width={70} />
              <span className="icon-verified ms-1"/>
            </div>
            <h1>{"Hi! I'm Youssef Magdy Mohmmed,"} <span>{text}</span></h1>
            <p>Hello Everyone. I'm Youssef Magdy , I'm a Software Engeneering , Front End Developer and Web Developer . I have 8 months of Experience in Web Develpoment .</p>
            <div className="icons-Hero d-flex">
                <div>
                  <a className="download-cv" href="/Youssef_Magdy_CV.pdf" download="Youssef_Magdy_CV.pdf">DownLoad CV</a>
                </div>
                <ul className=" d-flex">
                  <li><a href="https://www.linkedin.com/in/ana-youssef-48141b337/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                  <li><a href="https://github.com/Youssef-Magdy-19" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
                  <li><a href="https://www.facebook.com/profile.php?id=100053406365909&locale=ar_AR" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                </ul>
            </div>
          </div>
          <div className="animation col-xl-6 col-md-5 col-sm-4  col-12 text-center d-flex align-items-center">
            <Lottie className="w-100 developer" animationData={developer} style={{height:"300px"}}/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero