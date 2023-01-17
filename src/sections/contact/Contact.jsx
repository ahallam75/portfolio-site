import contacts from './data'
import './contact.css'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ll2d6by', 'template_lcms9gw', form.current, '0YP7qfK9rRLXRp8E1')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Something went wrong')
      });
  };
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className="container contact__container" data-aos="fade-in">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
      <p className='message'>
        OR send a message using this form...
      </p>
      <div className='form__container' data-aos="fade-in">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='form__button btn primary hover'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact