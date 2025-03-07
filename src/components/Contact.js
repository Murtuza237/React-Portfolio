import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">Contact Me</h2>
        
        <div className="contact__content">
          <div className="contact__info">
            <h3>Let's get in touch</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            
            <div className="contact__details">
              <div className="contact__detail">
                <Mail className="contact__icon" size={24} />
                <div>
                  <h4>Email</h4>
                  <p>murtuza.ali@example.com</p>
                </div>
              </div>
              
              <div className="contact__detail">
                <Phone className="contact__icon" size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+91 1234567890</p>
                </div>
              </div>
              
              <div className="contact__detail">
                <MapPin className="contact__icon" size={24} />
                <div>
                  <h4>Location</h4>
                  <p>Ujjain, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form__group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form__group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit__button">
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;