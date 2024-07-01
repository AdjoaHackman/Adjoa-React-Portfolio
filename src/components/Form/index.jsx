import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate input on change
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };

    if (value.trim() === '') {
      errors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      errors[name] = '';
    }

    if (name === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.email = 'Invalid email address';
      } else {
        errors.email = '';
      }
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea
          id="message"
          name="message"
          className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactForm;
