import { motion, easeOut } from 'framer-motion'

const Advantages = () => {
  return (
    <section className='container lg:mt-[200px]'>
      {/* Advantage 1 - graphic img to the right */}
      <div className='grid grid-cols-12 gap-[20px] items-center lg:flex lg:flex-col'>
        <div className='col-span-6 flex flex-col gap-[32px] py-[130px] lg:order-1 lg:py-0'>
          <div>
            <motion.h3 
             whileInView={{opacity: 1, y:0}}
             initial={{opacity:0, y: -100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='text-[18px] tracking-[1.6px] text-[#FF5555] mb-[4px] xl:text-[16px]'>
              ADVANTAGES
            </motion.h3>
            <motion.h4 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='capitalize text-[48px] font-[700] leading-[1] max-w-[500px] xl:text-[32px]'>
              Who choose Uifry?
            </motion.h4>
          </div>

          <div className='flex flex-col gap-[23px] text-[18px]'>
            <div className='flex items-center gap-[15px]'>
              <img src='/advantage-icon-1.svg' alt='advantage' />
              <span className='font-[600] leading-[1] capitalize text-[28px] xl:text-[20px]'>
                Clever notifications
              </span>
            </div>
            <motion.p 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='text-[#818181] capitalize  xl:text-[16px]'>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </motion.p>
          </div>
        </div>

        <div className='col-span-6 relative lg:order-2'>
          <motion.img
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
           transition={{duration: 1, ease: easeOut}}
            src='/advantage-main-right.svg'
            alt='advantage-main'
            className='absolute z-[-1] top-[-360px] right-[-162px] min-w-[803px] min-h-[720px] xl:min-w-[670px] lg:relative lg:z-0 lg:top-0 lg:right-0 md:min-w-[600px] md:min-h-fit' 
          />
        </div>
      </div>

      {/* Advantage 2 - graphic img to the left */}
      <div className='grid grid-cols-12 gap-[20px] items-center lg:flex lg:flex-col'>
        <div className='col-span-6 relative lg:order-2'>
          <motion.img
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
           transition={{duration: 1, ease: easeOut}}
            src='/advantage-main-left.svg'
            alt='advantage-main'
            className='absolute z-[-1] top-[-360px] right-[0px] min-w-[598px] min-h-[720px] xl:min-w-[450px] lg:relative lg:z-0 lg:top-0 lg:right-0 md:min-w-[400px] md:min-h-fit'
          />
        </div>

        <div className='col-span-6 flex flex-col gap-[32px] py-[260px] lg:order-1 lg:py-0'>
          <motion.div 
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
          transition={{duration: 1, ease: easeOut}}
          className='flex flex-col gap-[23px] text-[18px]'>
            <div className='flex items-center gap-[15px]'>
              <img 
              
              src='/advantage-icon-2.svg' alt='advantage' />
              <span className='font-[600] leading-[1] capitalize text-[28px] xl:text-[20px]'>
                Fully Customizable
              </span>
            </div>
            <motion.p 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
            transition={{duration: 1, ease: easeOut}}
            className='text-[#818181] capitalize min-w-[562px] 2xl:min-w-fit xl:text-[16px]'>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
