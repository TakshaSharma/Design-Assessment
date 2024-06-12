const GetStarted = () => {
  return (
    <section className='container pt-[155px]'>
      <div className='relative h-[508px] bg-[#000000] text-[#fff] rounded-[8px] px-[75px] xl:h-[400px] lg:flex lg:flex-col lg:h-fit lg:pr-0'>
        {/* Graphic out side the boundary start */}
        <img
          src='/gradient-ellipse.png'
          alt='ellipse'
          className='absolute z-[-2] top-[-200px] left-[-250px]'
        />
        <img
          src='/star-black-small.svg'
          alt='star'
          className='absolute z-[-1] top-[130px] left-[-120px]'
        />
        <img
          src='/star-black-large.svg'
          alt='star'
          className='absolute z-[-2] top-[-95px] right-[-110px]'
        />
        {/* Graphic out side the boundary ends */}

        <div className='h-[100%] flex flex-col justify-center gap-[16px] relative z-10 max-w-[550px] xl:max-w-[400px] lg:order-2 lg:mb-[80px]'>
          <h3 className='text-[48px] font-[700] leading-[1] 2xl:text-[36px]'>
            Ready To Get Started?
          </h3>
          <span className='text-[18px] font-[400] 2xl:text-[16px] 2xl:max-w-[70%]'>
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </span>
          <a
            className='flex items-center gap-[12px] p-[12px_22px] bg-[#fff] max-w-fit rounded-[4px]'
            href='https://www.apple.com/in/app-store/'
            target='_blank'
          >
            <span className='text-[#000] text-[18px]'>Download App</span>
            <img src='/apple-icon.svg' alt='apple' />
          </a>
        </div>

        <img
          src='/get-started-left.svg'
          alt='left'
          className='absolute bottom-0 left-0 xl:w-[300px]'
        />
        <img
          src='/star-white-small.svg'
          alt='star'
          className='absolute bottom-[20%] left-[40%]'
        />

        <div className='absolute z-0 top-0 right-0 lg:relative lg:z-0 lg:top-0 lg:right-0 lg:order-1 lg:flex lg:justify-end'>
          <img
            src='/star-white-large.svg'
            alt='star'
            className='absolute top-[30px] left-[60px]'
          />
          <img
            src='/get-started-right-1.svg'
            alt='right'
            className='xl:w-[400px] lg:relative lg:right-0 lg:w-[300px]'
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
