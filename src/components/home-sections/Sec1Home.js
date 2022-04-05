import { useNav } from '@/hooks/useNav';
import { ScrollToSec2 } from '@/redux/actions/ficActions';
import { HomeJson } from 'data';
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';

const Sec1Home = () => {
    const [dataHome, setDataHome] = useState(HomeJson)
    const homeRef = useNav('home')

    const settingsSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 5000
    };

    const dispatch = useDispatch()

    
  const ToNextSlide = () => {
    // console.log({ refSec });
    // window.scrollTo(0, refSec.current.offsetTop - 200);
    dispatch(ScrollToSec2(true))
  };

    return (
        <section ref={homeRef} id="homeContainer" className='home-section relative' >
            <Slider {...settingsSlider} className="h-screen bg-[url('/images/home-banner.jpg')] bg-no-repeat bg-cover bg-center" >
                {dataHome && dataHome.section1.length > 0 && dataHome.section1.map((item, index) => {
                    return (
                        <h3 key={index} className='text-[2.188rem] text-fic-white absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-[11] text-center max-w-[80%] md:max-w-[44%] leading-normal'>{item}</h3>
                    )
                })}
            </Slider>
            <figure onClick={()=>ToNextSlide()} className='absolute right-[60px] bottom-[40px] cursor-pointer animation-arrow'>
                <img src='/images/arrow-scroll-down.png' className="w-full" />
            </figure>
        </section >
    );
};

export default Sec1Home