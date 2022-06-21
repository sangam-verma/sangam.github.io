
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w4bt0h8', 'template_ao8yx9y', form.current, 'kkDhbM6wxQrt_hdSh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>
            <div class="container contact_container">
                <div class="container_options">
                    <article class="contact_option">
                        <span><HiOutlineMail /></span>
                        <h5>Email</h5>
                        <a href="mailto:vermasangam261@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article class="contact_option">
                        <span><SiMessenger /></span>
                        <h5>Messenger</h5>
                        <a href="https://m.me/sangam.verma.3762" target="_blank">Send a message</a>
                    </article>
                    <article class="contact_option">
                        <span><BsWhatsapp /></span>
                        <h5>Whatsapp</h5>
                        <a href="https://api.whatsapp.com/send?phone=+917317384101" target="_blank">Send a message</a>
                    </article>
                </div>
                <div className='form'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="email" name="email" placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className="button-39 mx-2 button-1">Send Message</button>
                </form>
                </div>
            </div>
        </section>
    )
}
