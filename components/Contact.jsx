'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Wrapper } from '@/hoc';
import { slideIn } from '@/utils/motion';
import { styles } from '@/app/styles';
import dynamic from 'next/dynamic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';

const EarthCanvas = dynamic(() => import('./canvas/Earth'), {
  ssr: false
});



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS does not automatically verify whether an email address is valid or fake before sending.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // End
    const email = form.email;

    // Check if the user has sent more than 2 messages
    const emailData = JSON.parse(localStorage.getItem('emailSubmissions')) || {};

    if (emailData[email] && emailData[email] >= 2) {
      toast.error("You have already sent 2 messages. Please wait before sending more.");
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_v0y38tp',
      'template_w7hda1r',
      {
        form_name: form.name,
        to_name: 'Nafis',
        from_email: form.email,
        to_email: 'musfiqurok@gmail.com',
        message: form.message,
      },
      'Fscz_hh1fT1KIq7Cv'
    )
      .then(() => {
        setLoading(false);

        // Update the submission count
        emailData[email] = (emailData[email] || 0) + 1;
        localStorage.setItem('emailSubmissions', JSON.stringify(emailData));

        toast.success("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);
        toast.error("Something went wrong.")
        // alert('Something went wrong.')
      })
  }

  return (
    <Wrapper idName="contact">
      <div className='xl:mt-12  flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('up', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>
            Get in touch
          </p>
          <h3 className={styles.sectionHeadText}>
            Contact
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
          </form>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
          </form>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>
                Your Message
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                required
                onChange={handleChange}
                placeholder="Write your message..."
                className="bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <Button type='submit'>
              {loading ? 'Sending...' : 'Send'}
            </Button>
            <ToastContainer />
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('down', 'tween', 0.2, 1)}
          className='md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Contact