import { ButtonCpn } from "src/components/elements"

const OurWorks = () => {
  return (
    <section className='OurWorksPage container'>
      <h1 className='child-heading text-[2.5rem] pb-[2.5rem]'>Our Works</h1>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-7 mb-[3.375rem]">
        <div>
          <figure className='mb-[1.8rem]'>
            <img src='/images/our-works-1.jpg' className="w-full" />
          </figure>
          <h2 className="text-[1.375rem] font-RanuaTrialsMedium ">Project A</h2>
          <p className="text-[1.375rem] leading-7">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>
        </div>
        <div>
          <figure className='mb-[1.8rem]'>
            <img src='/images/our-works-2.jpg' className="w-full" />
          </figure>
          <h2 className="text-[1.375rem] font-RanuaTrialsMedium ">Project B</h2>
          <p className="text-[1.375rem] leading-7">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>
        </div>
        <div>
          <figure className='mb-[1.8rem]'>
            <img src='/images/our-works-3.jpg' className="w-full" />
          </figure>
          <h2 className="text-[1.375rem] font-RanuaTrialsMedium ">Project C</h2>
          <p className="text-[1.375rem] leading-7">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>
        </div>
        <div>
          <figure className='mb-[1.8rem]'>
            <img src='/images/our-works-4.jpg' className="w-full" />
          </figure>
          <h2 className="text-[1.375rem] font-RanuaTrialsMedium ">Project D</h2>
          <p className="text-[1.375rem] leading-7">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>
        </div>
        <div>
          <figure className='mb-[1.8rem]'>
            <img src='/images/our-works-5.jpg' className="w-full" />
          </figure>
          <h2 className="text-[1.375rem] font-RanuaTrialsMedium ">Project E</h2>
          <p className="text-[1.375rem] leading-7">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>
        </div>
        <div>
          <figure className='mb-[1.8rem]'>
            <img src='/images/our-works-6.jpg' className="w-full" />
          </figure>
          <h2 className="text-[1.375rem] font-RanuaTrialsMedium ">Project F</h2>
          <p className="text-[1.375rem] leading-7">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonCpn link="/" text="Load videos" outline />
      </div>
    </section>
  )
}

export default OurWorks
