const IndividualWorks = () => {
    return (
        <section className='OurWorksPageDetail container'>
            <div className='flex flex-col lg:flex-row md:mb-[5.938rem] mb-[2rem]'>
                <div className='w-full md:px-0 lg:w-1/2 max-w-[100%] lg:max-w-[40%] mb-[20px] lg:mb-0'>
                    <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[15px]'>
                        <span className='sub text-[1.375rem]'>Project A</span>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </h1>
                    <div className='text-[1.375rem] mb-[1rem] md:mb-0'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </div>
                </div>
                <figure className='w-full lg:w-1/2 ml-auto'>
                    <img src='/images/works-detail.jpg' className="w-full" />
                </figure>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center cursor-pointer">
                    <figure className='w-full max-w-[2rem]'>
                        <img src='/images/arrow-left.png' className="w-full" />
                    </figure>
                    <span className="text-[1rem] text-[#45635f] pl-[6px]">Previous Work</span>
                </div>
                <div className="flex items-center cursor-pointer">
                    <span className="text-[1rem] text-[#45635f] pr-[6px]">Next Work</span>
                    <figure className='w-full max-w-[2rem]'>
                        <img src='/images/arrow-right.png' className="w-full" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default IndividualWorks
