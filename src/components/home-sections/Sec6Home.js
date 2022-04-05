import Slider from 'react-slick/lib/slider';

const Sec6Home = () => {
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
        <section className='home-section home-sec-6 relative text-[0px]'>
        <Slider  {...settingsSlider}>
          <div className='relative'>
            <div className='absolute md:translate-x-[0] translate-x-[-50%] top-[10%] left-[50%] md:top-[32%] md:left-[80px] text-[2rem] md:text-[3rem] text-fic-white leading-[normal]'>Lorem ipsum <br /> dolor sit amet</div>
            <img src='/images/home-sec-6.jpg' className="w-full" />
          </div>
          <div className='relative'>
            <div className='absolute md:translate-x-[0] translate-x-[-50%] top-[10%] left-[50%] md:top-[32%] md:left-[80px] text-[2rem] md:text-[3rem] text-fic-white leading-[normal]'>Lorem ipsum <br /> dolor sit amet</div>
            <img src='/images/home-sec-6.jpg' className="w-full" />
          </div>
          <div className='relative'>
            <div className='absolute md:translate-x-[0] translate-x-[-50%] top-[10%] left-[50%] md:top-[32%] md:left-[80px] text-[2rem] md:text-[3rem] text-fic-white leading-[normal]'>Lorem ipsum <br /> dolor sit amet</div>
            <img src='/images/home-sec-6.jpg' className="w-full" />
          </div>
        </Slider>
      </section>
    );
};

export default Sec6Home