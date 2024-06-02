import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "4a327632-8018-46ce-b932-4ace8bc1aac9");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    alert("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    alert(data.message);
  }
};
  return (
    <div id="contact" className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Lets's Talk</h1>
                <p>I'm crrently available to talk on new projects, so feel free to contact anytime. </p>
                <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mail_icon} alt=''/><p>pri2003yanshu@gmail.com</p>
                </div>
                <div className='contact-detail'>
                <img src={call_icon} alt=''/><p>7217473306</p>

                    </div>
                    <div className='contact-detail'>
                    <img src={location_icon} alt=''/><p>Ghaziabad,India</p>

                    </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter Your Name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter Your email' name='email'/>
            <label htmlFor=''>Write your Message</label>
            <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Contact;