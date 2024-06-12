import { motion, easeOut } from 'framer-motion'

const Testimonial = () => {
  return (
    <section className='container pb-[265px] pt-[50px] lg:pb-[180px]'>
      <div className='relative'>
        <h3 
        
        className='text-[18px] tracking-[1.6px] mb-[4px] text-center xl:text-[16px]'>
          TESTIMONIAL
        </h3>
        <motion.h4 
         whileInView={{opacity: 1, x:0}}
         initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
         transition={{duration: 1, ease: easeOut}}
        className='capitalize text-center mx-auto text-[48px] font-[700] leading-[1] max-w-[500px] xl:text-[32px]'>
          What our users <br />
          say about us?
        </motion.h4>
        <img
          src='/star-black-large.svg'
          alt='star'
          className='absolute z-[-1] top-[-120px] right-[70px]'
        />
      </div>
      <div className='grid grid-cols-12 gap-[20px] items-center lg:flex lg:flex-col'>
        <div className='col-span-7 relative xl:col-span-6 lg:order-1 lg:py-0 md:h-[500px]'>
          <motion.img
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
          transition={{duration: 1, ease: easeOut}}
            src='/testimony-graphic.svg'
            alt='testimony'
            className='absolute z-[-1] top-[-260px] right-[0] min-w-[745px] h-[713px] 2xl:right-[-10%] xl:min-w-[500px] xl:top-[-320px] lg:relative lg:z-0 lg:top-[-20%] lg:right-0 md:min-w-[600px] md:min-h-fit'
          />
        </div>
        <div 
       
        className='col-span-5 flex flex-col grid-flow-row gap-[24px] mt-[125px] xl:mt-[80px] xl:col-span-6 lg:order-2 lg:py-0 lg:mt-0'>
          <motion.h5 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
            transition={{duration: 1, ease: easeOut}}
          className='text-[28px] font-[600] leading-[1] capitalize xl:text-[24px]'>
            The best financial accounting app ever!
          </motion.h5>
          <motion.p 
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
           transition={{duration: 1, ease: easeOut}}
          className='text-[#818181] text-[18px] leading-[1.6] lg:text-[16px]'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </motion.p>
          <img 
          
          src='/testimony-avatar.png' alt='avatars' width={192} />
          <span className='text-[18px] font-[600]'>Nick Jonas</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
