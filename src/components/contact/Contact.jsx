import React from 'react'
import  './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pye6cw4', 'service_pye6cw4', form.current, '6FOXsiVNt0anQeyMu')

    e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hello@neuch.com</h5>
            <a href="mailto:hello@neuch.io" target="_blank">Envoyer un message</a>
          </article>
          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>hello@neuch.com</h5>
            <a href="https//:m.me/baptiste.bessard.5/" target="_blank">Envoyer un message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33632001723</h5>
            <a href="https://api.whatsapp.com/send?phone+33632001723" target="_blank">Envoyer un message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre Nom Complet' required/>
          <input type="text" name='email' placeholder='Votre Email' required/>
          <textarea name="message" rows="7" placeholder='Votre Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact