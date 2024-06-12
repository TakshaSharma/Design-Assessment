import { motion, easeOut } from 'framer-motion'
const Footer = () => {
  return (
    <footer className='container mb-[40px] pt-[155px]'>
      <div className='flex justify-between gap-[65px] 2xl:gap-[30px] xl:flex-wrap xl:gap-[65px]'>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}}
        className='flex flex-col gap-[16px]'>
          <div>
            <img src='/logo.svg' alt='uifry' />
          </div>
          <div className='flex gap-[8px]'>
            <img src='/email-icon.svg' alt='email' />
            <span className='capitalize'>help@frybix.com</span>
          </div>
          <div className='flex gap-[8px]'>
            <img src='/phone-icon.svg' alt='phone' />
            <span>+1 234 456 678 89</span>
          </div>
        </motion.div>

        <div className='flex gap-[4rem] 2xl:gap-[40px] xl:gap-[80px] md:gap-[40px]'>
          <motion.div 
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
          transition={{duration: 1, ease: easeOut}}
          className='flex flex-col gap-[16px]'>
            <h6 className='text-[32px] 2xl:text-[24px]'>Links</h6>
            <ul className='flex flex-col gap-[16px]'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>About Us</a>
              </li>
              <li>
                <a href='/'>Bookings</a>
              </li>
              <li>
                <a href='/'>Blog</a>
              </li>
            </ul>
          </motion.div>
          <motion.div 
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
          transition={{duration: 1, ease: easeOut}}
          className='flex flex-col gap-[16px]'>
            <h6 className='text-[32px] 2xl:text-[24px]'>Legal</h6>
            <ul className='flex flex-col gap-[16px]'>
              <li>
                <a href='/'>Terms Of Use</a>
              </li>
              <li>
                <a href='/'>Privacy Policy</a>
              </li>
              <li>
                <a href='/'>Cookie Policy</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
          transition={{duration: 1, ease: easeOut}} 
          className='flex flex-col gap-[16px]'>
            <h6 className='text-[32px] 2xl:text-[24px]'>Product</h6>
            <ul className='flex flex-col gap-[16px] leading-[1.5]'>
              <li>
                <a href='/'>Take Tour</a>
              </li>
              <li>
                <a href='/'>Live Chat</a>
              </li>
              <li>
                <a href='/'>Reviews</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}}
        className='flex flex-col gap-[16px]'>
          <h6 className='text-[32px] 2xl:text-[24px]'>Newsletter</h6>
          <span>Stay Up To Date</span>
          {/* Input field */}
          <div className='bg-[#fff] max-w-[340px] h-[80px] flex items-center rounded-[4px] px-[10px] shadow-[-13.01px_13.01px_104.09px_0px_#A1A1A129] 2xl:h-[60px] 2xl:max-w-[280px]'>
            <input
              type='email'
              name='email'
              placeholder='Your email'
              className='max-h-[100%] focus:outline-none min-w-[160px] pl-[10px] placeholder:text-[#81848A] 2xl:min-w-[140px] 2xl:pl-0'
            />
            <button className='min-w-[160px] h-[60px] bg-[#000] text-[#fff] rounded flex-1 2xl:h-[40px] 2xl:min-w-[140px]'>
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className='mt-[92px]'>
        <hr className='border-0 h-[1px] bg-gradient-to-r from-[#16161600] via-[#696969] to-[#16161600]' />
        <p className='p-[36px_10px] text-center capitalize'>
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
