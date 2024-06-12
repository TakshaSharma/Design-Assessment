import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) setNavToggle(false);
    });
  });

  return (
    <header className='container pt-[30px]'>
      <nav className='h-[60px] flex justify-between xl:h-[50px]'>
        <div className='flex items-center gap-[40px]'>
          <img src='/logo.svg' alt='uifry' width={117} />
          <ul className='flex gap-[40px] text-[20px] 2xl:text-[18px] xl:text-[16px] xl:gap-[16px] lg:hidden'>
            <li className='flex w-[30px] justify-center items-center'>
              <Link
                to='/'
                className={pathname === '/' ? 'font-[700] text-[#FF5555]' : ''}
              >
                Home
              </Link>
            </li>
            <li className='flex w-[100px] justify-center items-center'>
              <Link
                to='/about-us'
                className={
                  pathname === '/about-us' ? 'font-[700] text-[#FF5555]' : ''
                }
              >
                About Us
              </Link>
            </li>
            <li className='flex w-[40px] justify-center items-center'>
              <Link
                to='/pricing'
                className={
                  pathname === '/pricing' ? 'font-[700] text-[#FF5555]' : ''
                }
              >
                Pricing
              </Link>
            </li>
            <li className='flex w-[100px] justify-center items-center'>
              <Link
                to='/features'
                className={
                  pathname === '/features' ? 'font-[700] text-[#FF5555]' : ''
                }
              >
                Features
              </Link>
            </li>
          </ul>
        </div>

        <Link
          className='p-[16px_42px] bg-[#000] text-[#fff] text-[18px] flex items-center max-w-fit rounded-[4px] xl:text-[16px] lg:hidden'
          to='https://www.apple.com/in/app-store/'
          target='_blank'
        >
          Download
        </Link>

        <div className='hidden lg:block'>
          <button
            data-collapse-toggle='navbar-user'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100'
            aria-controls='navbar-user'
            aria-expanded='false'
            onClick={() => setNavToggle(!navToggle)}
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        {navToggle && (
          <div className='lg:absolute right-[25px] top-[80px] z-[15] rounded-[8px] bg-[#000] p-[30px_20px] pb-[20px] shadow-[1px_1px_100px_0px_#00000051]'>
            <ul className='flex flex-col gap-[30px] text-[#fff] text-[16px] '>
              <li className='flex justify-center items-center'>
                <Link
                  to='/'
                  className={
                    pathname === '/' ? 'font-[700] text-[#FF5555]' : ''
                  }
                >
                  Home
                </Link>
              </li>
              <li className='flex justify-center items-center'>
                <Link
                  to='/about-us'
                  className={
                    pathname === '/about-us' ? 'font-[700] text-[#FF5555]' : ''
                  }
                >
                  About Us
                </Link>
              </li>
              <li className='flex justify-center items-center'>
                <Link
                  to='/pricing'
                  className={
                    pathname === '/pricing' ? 'font-[700] text-[#FF5555]' : ''
                  }
                >
                  Pricing
                </Link>
              </li>
              <li className='flex justify-center items-center'>
                <Link
                  to='/features'
                  className={
                    pathname === '/features' ? 'font-[700] text-[#FF5555]' : ''
                  }
                >
                  Features
                </Link>
              </li>
            </ul>
            <Link
              className='bg-[#fff] text-[#000] text-[18px] flex justify-center items-center rounded-[4px] w-[160px] h-[60px] mt-[20px]'
              to='https://www.apple.com/in/app-store/'
              target='_blank'
            >
              Download
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
