import React, {useRef} from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7l9b6mv', 'template_ep2ltwg', form.current, 'VT3yMhn8EXxzW2mWp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section id='contact' onSubmit={sendEmail}>
      <h2>Cont<span class='red'>act</span> Me</h2>
      <form className='contact__form' ref={form}>
        <input type='text' name='name' placeholder='Your Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn__red btn__contact'>Send</button>
      </form>
    </section>
  )
}

export default Contact