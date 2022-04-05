import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCpn } from 'src/components/elements';
import { GetListStudio } from '@/redux/actions/ficActions'

const Sec7Home = () => {
  const dispatch = useDispatch()
  const { DataListStudio } = useSelector((state) => state.FicReducers)


  const [apiRes, setApiRes] = useState()
  // const fetchData = async () => {
  //   const response = await fetch('https://staging.tmrw.com.sg/fiction/cms/web/api/rooms');
  //   // const response = await fetch(process.env.DOMAIN_API + '/rooms');
  //   console.log({ response });
  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }
  //   const data = await response.json();
  //   return setApiRes(data);
  // };

  useEffect(() => {
    console.log(1,process.env.NODE_ENV,process.env.DOMAIN_API);
    dispatch(GetListStudio())
    // fetchData()
  }, [dispatch])

  useEffect(() => {
    if (apiRes) {
      console.log(apiRes);
    }
  }, [apiRes])

  return (
    <section className='home-section flex flex-col sm:flex-row' >
      <div className='bg-[#f4f4f4] pt-[5.938rem] pb-[6.25rem] px-[5%] text-center w-full sm:w-1/3'>
        <h2 className='text-center text-[2.188rem] text-[#000] mb-[5.938rem]'>
          <span className='block text-[1.375rem]'>lorem ipsum</span>
          Studio one
        </h2>
        <img src='/images/home-sec-7-img-1.png' className="w-full mb-[5.938rem] mx-auto max-w-[230px]" />
        <div className='text-[18px] mb-[45px]'>Lorem ipsum dolor sit amet, consectetur.</div>
        <ButtonCpn link="/studio/1" text="Check studio" />
      </div>
      <div className='bg-[#b6b0a6] pt-[5.938rem] pb-[6.25rem] px-[5%] text-center w-full sm:w-1/3'>
        <h2 className='text-center text-[2.188rem] text-fic-white mb-[5.938rem]'>
          <span className='block text-[1.375rem] text-fic-white'>lorem ipsum</span>
          Studio two
        </h2>
        <img src='/images/home-sec-7-img-2.png' className="w-full mb-[5.938rem] mx-auto max-w-[205px]" />
        <div className='text-[18px] mb-[45px] text-fic-white'>Lorem ipsum dolor sit amet, consectetur.</div>
        <ButtonCpn link="/studio/1" text="Check studio" />
      </div>
      <div className='bg-[#f4f4f4] pt-[5.938rem] pb-[6.25rem] px-[5%] text-center w-full sm:w-1/3'>
        <h2 className='text-center text-[2.188rem] text-[#000] mb-[5.938rem]'>
          <span className='block text-[1.375rem]'>lorem ipsum</span>
          Studio three
        </h2>
        <img src='/images/home-sec-7-img-3.png' className="w-full mb-[5.938rem] mx-auto max-w-[230px]" />
        <div className='text-[18px] mb-[45px]'>Lorem ipsum dolor sit amet, consectetur.</div>
        <ButtonCpn link="/studio/1" text="Check studio" />
      </div>
    </section>
  );
};

export default Sec7Home