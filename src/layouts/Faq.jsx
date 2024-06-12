import { motion, easeOut } from 'framer-motion'

const Faq = () => {
  return (
    <section className='container mt-[68px] lg:mt-0'>
      <h3 className='text-[18px] text-[#FF5555] tracking-[1.6px] mb-[4px] xl:text-[16px]'>
        FAQ
      </h3>
      <div className='relative'>
        <h4 className='text-[48px] font-[700] leading-[1] mb-[40px] xl:text-[32px]'>
          Frequently Asked <br /> Questions
        </h4>
        <img
          src='/star-black-large.svg'
          alt='star'
          className='absolute bottom-[10%] right-[39%] lg:right-[20%] md:right-[10%]'
        />
      </div>
      <div className='grid grid-cols-2 gap-[20px] xl:gap-[14px] md:grid-cols-1'>
        <motion.article 
         whileInView={{opacity: 1, x:0}}
         initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
         transition={{duration: 1, ease: easeOut}}
        className='bg-[#FF5555] text-[#fff] capitalize p-[30px] rounded-[8px] xl:p-[20px] md:order-1'>
          <h5 className='text-[28px] font-[600] leading-[1.1] mb-[8px] xl:text-[24px] lg:text-[20px]'>
            the best financial accounting app ever!
          </h5>
          <p className='text-justify'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.article>

        <motion.article 
         whileInView={{opacity: 1, x:0}}
         initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
         transition={{duration: 1, ease: easeOut}}
        className='bg-[#fff] capitalize p-[30px] rounded-[8px] xl:p-[20px] md:order-2'>
          <h5 className='text-[28px]  font-[600] leading-[1.1] mb-[8px] xl:text-[24px] lg:text-[20px]'>
            the best financial accounting app ever!
          </h5>
          <p className='text-justify text-[#8c8c8c]'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.article>

        <motion.article
         whileInView={{opacity: 1, x:0}}
         initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
         transition={{duration: 1, ease: easeOut}} 
        className='bg-[#fff] capitalize p-[30px] rounded-[8px] xl:p-[20px] md:order-4'>
          <h5 className='text-[28px]  font-[600] leading-[1.1] mb-[8px] xl:text-[24px] lg:text-[20px]'>
            the best financial accounting app ever!
          </h5>
          <p className='text-justify text-[#8c8c8c]'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.article>

        <motion.article 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}} 
        className='bg-[#FF5555] text-[#fff] capitalize p-[30px] rounded-[8px] xl:p-[20px] md:order-3'>
          <h5 className='text-[28px] font-[600] leading-[1.1] mb-[8px] xl:text-[24px] lg:text-[20px]'>
            the best financial accounting app ever!
          </h5>
          <p className='text-justify'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.article>

        <motion.article 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}} 
        className='bg-[#FF5555] text-[#fff] capitalize p-[30px] rounded-[8px] xl:p-[20px] md:order-4'>
          <h5 className='text-[28px] font-[600] leading-[1.1] mb-[8px] xl:text-[24px] lg:text-[20px]'>
            the best financial accounting app ever!
          </h5>
          <p className='text-justify'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.article>

        <motion.article 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}} 
        className='bg-[#fff] capitalize p-[30px] rounded-[8px] xl:p-[20px]'>
          <h5 className='text-[28px]  font-[600] leading-[1.1] mb-[8px] xl:text-[24px] lg:text-[20px]'>
            the best financial accounting app ever!
          </h5>
          <p className='text-justify text-[#8c8c8c]'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default Faq;
