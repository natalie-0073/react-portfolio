import './Contact.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    setSubmitted(true);
  };

  return (
    <div className='contact'>
        <h2 className='contact-header'>CONTACT ME</h2>
      {submitted ? (
        <div className="submission-message">
          {name}, your message is received! I will be in contact with you soon via {email}.
          <NavLink to="/" className="home-link">Back to home page</NavLink>
        </div>
        
      ) : (
        <form onSubmit={handleSubmit} className='contact__form'>
          <input
            type="text"
            placeholder='Your Name'
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Your Email'
            className='form-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder='Your Message'
            className='form-input'
            rows="5"
            cols="40"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type='submit' className='form-button'>Submit</button>
        </form>
      )}
    </div>
  );
}

export default Contact;