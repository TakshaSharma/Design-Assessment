import { motion, easeOut } from 'framer-motion'

const Features = () => {
  return (
    <section className='container'>
      <div className='grid grid-cols-12 gap-[20px] items-center lg:flex lg:flex-col '>
        <div className='col-span-6 relative lg:h-[500px] lg:order-3 md:h-[400px]'>
          <motion.img
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
           transition={{duration: 1.5, ease: easeOut}}
            src='/features-main-graphic.svg'
            alt='features-main'
            className='absolute z-[-1] top-[-360px] right-[-60px] min-w-[720px] min-h-[720px] xl:min-w-[600px] lg:static lg:z-0 md:min-h-[100%] md:min-w-[100%]'
          />
        </div>
        <div className='col-span-6 flex flex-col gap-[32px] py-[130px] lg:order-1 lg:pt-[80px] lg:pb-0'>
          <div className='relative'>
            <motion.h3 
             whileInView={{opacity: 1, y:0}}
             initial={{opacity:0, y: -100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='text-[18px] tracking-[1.6px] text-[#FF5555] mb-[4px] xl:text-[16px]'>
              FEATURES
            </motion.h3>
            <motion.h4 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='capitalize text-[48px] font-[700] leading-[1] max-w-[500px] xl:text-[32px]'>
              Uifry premium
            </motion.h4>
            <img
              src='/gradient-ellipse.svg'
              alt='ellipse'
              className='absolute z-[-1] top-[-50px] right-[-400px] md:hidden'
            />
          </div>

          <div className='flex flex-col gap-[12px] text-[18px] md:gap-[6px] md:text-[16px]'>
            <div className='flex items-center gap-[8px]'>
              <img src='/features-icon-1.svg' alt='feature' />
              <span className='font-[600] leading-[1] capitalize'>
                Budgeting intervals
              </span>
            </div>
            <motion.p 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='text-[#818181] w-[638px] 2xl:w-fit'>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </motion.p>
          </div>

          <div className='flex flex-col gap-[12px] text-[18px] md:gap-[6px] md:text-[16px]'>
            <div className='flex items-center gap-[8px]'>
              <img src='/features-icon-2.svg' alt='feature' />
              <span className='font-[600] leading-[1] capitalize'>
                Budgeting intervals
              </span>
            </div>
            <motion.p 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='text-[#818181] w-[638px] 2xl:w-fit'>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </motion.p>
          </div>

          <div className='flex flex-col gap-[12px] text-[18px] md:gap-[6px] md:text-[16px]'>
            <div className='flex items-center gap-[8px]'>
              <img src='/features-icon-3.svg' alt='feature' />
              <span className='font-[600] leading-[1] capitalize'>
                Budgeting intervals
              </span>
            </div>
            <motion.p 
             whileInView={{opacity: 1, x:0}}
             initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
             transition={{duration: 1, ease: easeOut}}
            className='text-[#818181] w-[638px] 2xl:w-fit'>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
