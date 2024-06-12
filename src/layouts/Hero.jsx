import { motion, easeOut } from 'framer-motion'

const Hero = () => {
  return (
    <header className='container pt-[30px]'>
      {/* Hero Section */}
      <section className='relative'>
        <div className='max-w-[618px] flex flex-col gap-[24px] mt-[100px] 2xl:max-w-[500px] xl:max-w-[440px] md:mt-[300px]'>
          <div className='relative'>
            <img
              src='/star-black-small.svg'
              alt='star'
              className='absolute z-[-1] top-[-100px] left-[-100px]'
            />
            <img
              src='/gradient-ellipse.svg'
              alt='gradient'
              className='absolute z-[-1] top-[-160px] right-0 '
            />
            <motion.h1 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
            transition={{duration: 1, ease: easeOut}}
            className='text-[64px] leading-[1] font-[800] 2xl:text-[48px] xl:text-[36px]'>
              Make The Best <br />
              Financial Decisions
            </motion.h1>
          </div>
          <motion.p 
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
           transition={{duration: 1, ease: easeOut}}
          className='capitalize text-[#888888] text-[18px] xl:text-[16px] xl:w-[80%]'>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </motion.p>
          <motion.div 
           whileInView={{opacity: 1, y:0}}
           initial={{opacity:0, y: 100, willChange: 'transform, opacity'}} 
           transition={{duration: 1, ease: easeOut}}
          className='flex gap-[40px] text-[18px] xl:text-[16px] xl:gap-[20px]'>
            <button className='flex items-center justify-center gap-[8px] bg-[#000] text-[#fff] h-[60px] rounded-[4px] w-[180px] xl:h-[50px] xl:w-[160px]'>
              <span>Get Started</span>
              <img src='/white-arrow-right.svg' alt='arrow' />
            </button>
            <button className='flex items-center gap-[14px]'>
              <img src='/play-video-icon.svg' alt='play' />
              <span>Watch Video</span>
            </button>
          </motion.div>
        </div>
        <div className='mt-[17px] xl:max-w-[80%] md:mt-[50px]'>
          <img src='/hero-bottom-graphic.svg' alt='achievemnts and finance' />
        </div>
        <div className='absolute top-[-140px] right-[-280px] xl:w-[90%] md:right-0 md:top-[-500px] md:z-[-1] '>
          <motion.img
           whileInView={{opacity: 1, x:0}}
           initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
           transition={{duration: 1, ease: easeOut}}
            src='/hero-main-graphic.svg'
            alt='hero'
            className='xl:min-h-[700px] xl:w-fit'
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
