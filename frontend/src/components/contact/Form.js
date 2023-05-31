import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/contacts.css'

function Form() {
  const form = useRef();
  const [errors, setErrors] = useState({});



  const validateForm = () => {
      const { user_name, user_email, message } = form.current;
      const errors = {};

      // Empty Input Validation
      if (!user_name.value.trim()) {
        errors.user_name = 'Name is required';
      }
  
      if (!user_email.value.trim()) {
        errors.user_email = 'Email is required';
      }
  
      if (!message.value.trim()) {
        errors.message = 'Message is required';
      }
  
      // Email Format Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(user_email.value)) {
        errors.user_email = 'Invalid email format';
      }

      setErrors(errors);

      // Only return true if there are no errors, validation passed
      return Object.keys(errors).length === 0;
    };

  const sendEmail = (e) => {
    e.preventDefault();
    const notify = () => toast("Message Sent! Thank you for your input.");
    if (validateForm()) {
      emailjs.sendForm('service_bygikoq', 'template_xnt3nr9', form.current, 'zA2xTIhAN9VQ51791')
        .then((result) => {
            console.log("Message sent!");
            e.target.reset();
            notify()
        }, (error) => {
            console.log(error.text);
        });
      }
    };

    return (
    <div className='formpagecontainer'>
      <h2 className='contactustitle'>Contact Us</h2>
      <h2 className='contactusdesc'>Any question or remarks? Send us a message!</h2>


      <div className='formcontainer'>
        <div className='contactinfoleft'>
            <h2 className='letusknow'>Let us know what you think!</h2>
            <h2 className='letusknowdesc'>Fill up the form and our team will get back to you as soon as possible!</h2>
        </div>

        <div className='contactinforight'>
          <form className="contactform" ref={form} onSubmit={sendEmail}>
            <label className='contactinfoinputlabel1'>Full Name:</label>
            <input className='inputnameemail' type="text" name="user_name" placeholder='Enter full name'/>
            {errors.user_name && <div className="error" 
              style={{
                color:"#D30000", 
                fontWeight:"600"}}
                >{errors.user_name}</div>}
            
            <label className='contactinfoinputlabel2'>Email:</label>
            <input className='inputnameemail' type="email" name="user_email" placeholder='Enter email address'/>
            {errors.user_email && <div className="error" 
              style={{
                color:"#D30000",
                fontWeight:"600"}}
                >{errors.user_email}</div>}

            
            <label className='contactinfoinputlabel2'>Message:</label>
            <textarea className="messagetextarea" name="message" placeholder='Type your message'/>
            {errors.message && <div className="error" 
              style={{
                color:"#D30000", 
                fontWeight:"600"}}
                >{errors.message}</div>}

            <div className='btnpositioncenter'>
              <input className="sendmsgbtn" type="submit" value="Send Message" />
              <ToastContainer/>
            </div>
         </form>
        </div>

      </div>
    </div>
  )
}

export default Form
