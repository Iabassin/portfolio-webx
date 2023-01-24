import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import ScrollAnimation from "react-animate-on-scroll"

export function Contact(){

  return(
    <Container id="contato">
      <header>
      <ScrollAnimation animateIn="fadeInLeft" delay={1*1000}>
        <h2>Contact me</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
        <p>If you saw my potential or want to talk to me, don't hesitate to send me a message.</p>
      </ScrollAnimation>
      </header>
      <div className="contacts">
      <ScrollAnimation animateIn="zoomIn" delay={0.8*1000}>
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:soufianiabassin@hotmail.com">soufianiabassin@hotmail.com</a>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="zoomIn" delay={0.8*1000}>
        <div>
          <img src={phoneIcon} alt="phone" />
          <a href="tel:+212767653832">+212767653832</a>
        </div>  
      </ScrollAnimation>
      </div>
      <div id="formmsj">
      <ScrollAnimation animateIn="zoomIn" delay={0.7 * 1000}>
        <h2>Get in touch using the form below.</h2>
      </ScrollAnimation>
      <form action="https://formspree.io/f/mbjelzng" method="POST">
      <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
        <input type="text"  placeholder="Full Name" id="Name" name="Name" required />
        <input placeholder="Email" id="email" type="email" name="Email" required/>
        <textarea placeholder="Leave your message" id="message" name="Message" required/>
      </ScrollAnimation>
        <button type="submit">Send</button>
      </form>
      
      </div>
      
    </Container>
  )
}