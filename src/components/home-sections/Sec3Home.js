import Slider from 'react-slick/lib/slider';
import { ButtonCpn } from 'src/components/elements';

const Sec3Home = () => {

    const settingsSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 5000
    };

    return (
        <section className='home-section container mx-auto px-0 md:px-[1rem] mb-0 lg:mt-[180px] lg:mb-[150px]'>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full px-[1rem] md:px-0 lg:w-1/2 max-w-[100%] lg:max-w-[35%] mb-[20px] lg:mb-0'>
                    <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[10px]'>
                        <span className='sub text-[1.375rem]'>Work</span>
                        Where concepts are crafted with care and creativity
                    </h1>
                    <div className='text-[1.375rem] mb-[2rem] md:mb-[4.063rem]'>Our space and our services were designed to empower brands, directors, and other industry partners to share their stories
                        with creativity, style, and substance.</div>
                    <ButtonCpn link="/works" text="More videos" outline />
                </div>
                <div className='w-full lg:w-1/2 ml-auto slider-dots-green'>
                    <Slider  {...settingsSlider}>
                        <img src='/images/home-sec-3.jpg' className="w-full" />
                        <img src='/images/home-sec-3.jpg' className="w-full" />
                        <img src='/images/home-sec-3.jpg' className="w-full" />
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Sec3Home