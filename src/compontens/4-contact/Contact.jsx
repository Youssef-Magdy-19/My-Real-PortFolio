import "./Contact.css"
import img from "../../images/cropped_image.png"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAinmation from "../../animation/done.json"
import contactUs from "../../animation/contact-us.json"
const Contact = () => {
  const [state, handleSubmit] = useForm("mqapdyvk");
  // ده بعد ما يبعت الرساله هيخفي الفورم
  // if (state.succeeded) {
  //   return <h1>Your Message has been sent successfully</h1>;
  // }
  return (
    <section id="Contact" className="ps-3 pb-5">
      <h2><span className="icon-envelope" /> Contact us</h2>
      <p className="pe-3">contact us for more information and Get notified when I publish something new.</p>
      <div className="contact row w-100 justify-content-between  mt-5">
        <form onSubmit={handleSubmit} className="form col-md-7 col-12 pe-4">
          <div className="email mb-3">
            <label htmlFor="email">Email Address: </label>
            <input autoComplete="off" required type="email" name="email" id="email" placeholder="Email Address" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message">
            <label htmlFor="message">Your Message: </label>
            <textarea required id="message" name="message" rows={6} placeholder="Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="btn-submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded ? 
          <p className="succuss d-flex" style={{fontSize:"20px" , marginTop : "1.5rem",color:"var(--title)"}}>
            <Lottie className="done" loop={false} style={{height:40}} animationData={doneAinmation}/>
            <span style={{marginTop:"3px",marginLeft:"5px"}}>Your Message has been sent successfully</span> 
          </p>: null}
        </form>
        
        <div className="contact-img-animation col-md-4 col-12">
        <Lottie className="contactUs w-100"  style={{height:300,marginTop:"-30px"}} animationData={contactUs}/>
        </div>
      </div>
    </section>
  )
}
export default Contact