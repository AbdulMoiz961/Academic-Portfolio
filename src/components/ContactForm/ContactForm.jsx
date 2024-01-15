import React, { useState, useEffect } from 'react'

import './contactform.css'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const labels = document.querySelectorAll('.contactform__inp label');

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split('')
        .map(
          (letter, idx) => 
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join('');
    });
  }, []);

  return (
    <div className='container'>

      <div className='contactform'>

        <h2>You Can Email Me</h2>

        <form action='https://formsubmit.co/fc80954601b1792f829204bae5137826' method='POST'>
          <div className='contactform__inp'>
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          <div className='contactform__inp'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className='contactform__inp'>
            <input
              type='text'
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>Message</label>
          </div>

          <button type='submit' className='contactform__btn'>Submit</button>
        </form>

      </div>

    </div>
  )
}

export default ContactForm
