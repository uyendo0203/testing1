import React from 'react';
import Link from 'next/link'

const FooterCpn = () => {
  return (
    <footer className='bg-[#f4f4f4]'>
      <div className='container lg:pt-[3.125rem] py-[3.125rem]'>
        <h1 className="logo text-[#000] text-[32px] mb-[20px] flex items-center font-RanuaTrialsMedium">fiction</h1>
        <div className='flex flex-col lg:flex-row pb-[2.5rem] border-b border-[#717170]'>
          <div className='w-full sm:w-1/5 flex flex-col max-w-[100%] lg:max-w-[32%] mb-[20px] lg:mb-0'>
            <Link href="/">
              <a className='text-[14px] hover:text-[#000] hover:underline font-RanuaTrialsRegular mb-[15px]'>About</a>
            </Link>
            <Link href="/">
              <a className='text-[14px] hover:text-[#000] hover:underline font-RanuaTrialsRegular mb-[15px]'>Works</a>
            </Link>
            <Link href="/">
              <a className='text-[14px] hover:text-[#000] hover:underline font-RanuaTrialsRegular mb-[15px]'>Reservations</a>
            </Link>
          </div>
          <div className='w-full sm:w-1/5 flex flex-col max-w-[100%] lg:max-w-[32%] mb-[20px] lg:mb-0'>
            <Link href="/">
              <a className='text-[14px] hover:text-[#000] hover:underline font-RanuaTrialsRegular mb-[15px]'>Support</a>
            </Link>
            <Link href="/">
              <a className='text-[14px] hover:text-[#000] hover:underline font-RanuaTrialsRegular mb-[15px]'>FAQ</a>
            </Link>
            <Link href="/">
              <a className='text-[14px] hover:text-[#000] hover:underline font-RanuaTrialsRegular'>info@fiction.com</a>
            </Link>
          </div>
        </div>
        <div className='flex mt-[20px] justify-between items-baseline sm:flex-row flex-col'>
          <div className='flex lg:flex-row flex-col mb-7 md:mb-0'>
            <Link href="/">
              <a className='text-[14px] mr-[3.75rem] hover:text-[#000] hover:underline font-RanuaTrialsRegular mb-[15px]'>Terms and Conditioins</a>
            </Link>
            <Link href="/">
              <a className='text-[14px] mr-[3.75rem] hover:text-[#000] hover:underline font-RanuaTrialsRegular mb-[15px]'>Trademarks and Copyright</a>
            </Link>
            <div className='text-[14px] font-RanuaTrialsRegular'>2022 Fictioin. All rights reserved</div>
          </div>
          <div className='flex'>
            <div className='mr-[30px]'>Find us on</div>
            <div className='flex'>
              <Link href="/">
                <a className='mx-[2px]'><img src='/images/social-ins.jpg' className="w-full" /></a>
              </Link>
              <Link href="/">
                <a className='mx-[2px]'><img src='/images/social-fb.jpg' className="w-full" /></a>
              </Link>
              <Link href="/">
                <a className='mx-[2px]'><img src='/images/social-wt.jpg' className="w-full" /></a>
              </Link>
              <Link href="/">
                <a className='mx-[2px]'><img src='/images/social-yt.jpg' className="w-full" /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterCpn;