import Link from 'next/link'

const AllStudio = () => {
    return (
        <section className='AllStudioPage container'>
            <div className="mb-[3.125rem] max-w-[100%] lg:max-w-[45%]">
                <h1 className='child-heading text-[2.5rem] mb-[1.1rem]'>ALL STUDIOS</h1>
                <p className="text-[1.375rem] leading-7">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
            </div>

            <div className='mb-[5rem]'>
                <h1 className='text-[2.5rem] mb-[0.938rem] font-RanuaTrialsMedium'>Studio Types</h1>
                <div className='flex flex-wrap flex-col md:flex-row mb-[1.875rem]'>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium mr-[1.25rem] leading-10'>01</div>
                    <div className='text-[1.375rem] mr-0 md:mr-[1.875rem]'>
                        <div className='font-RanuaTrialsMedium'>Studio A</div>
                        <div className='leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium mx-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>25m<sup>2</sup></div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 md:leading-9 mr-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>Lorem<br/>ipsum</div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 md:leading-9 mr-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>Lorem <br/>ipsum</div>
                </div>
                <div className='flex flex-wrap flex-col md:flex-row mb-[1.875rem]'>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium mr-[1.25rem] leading-10'>02</div>
                    <div className='text-[1.375rem] mr-[1.875rem]'>
                        <div className='font-RanuaTrialsMedium'>Studio B</div>
                        <div className='leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium mx-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>35m<sup>2</sup></div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 md:leading-9 mr-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>Lorem<br/>ipsum</div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 md:leading-9 mr-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>Lorem <br/>ipsum</div>
                </div>
                <div className='flex flex-wrap flex-col md:flex-row mb-[1.875rem]'>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium mr-[1.25rem] leading-10'>03</div>
                    <div className='text-[1.375rem] mr-[1.875rem]'>
                        <div className='font-RanuaTrialsMedium'>Studio C</div>
                        <div className='leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium mx-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>45m<sup>2</sup></div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 md:leading-9 mr-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>Lorem<br/>ipsum</div>
                    <div className='text-[2.5rem] font-RanuaTrialsMedium leading-11 md:leading-9 mr-0 md:mx-[1.875rem] mb-[1rem] md:mb-0'>Lorem <br/>ipsum</div>
                </div>
            </div>

            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-7 mb-[3.375rem]">
                <div className='mb-4 sm:mb-0'>
                    <Link href='/'>
                        <a className='flex items-center mb-[1.6rem] text-arrow'>
                            <span className='mr-[6px] text-[1.375rem] font-RanuaTrialsMedium'>Studio A</span>
                            <figure className=''>
                                <img src='/images/arrow-black.png' className="w-full" />
                            </figure>
                        </a>
                    </Link>
                    <figure>
                        <img src='/images/all-studio-1.jpg' className="w-full" />
                    </figure>
                </div>
                <div className='mb-4 sm:mb-0'>
                    <Link href='/'>
                        <a className='flex items-center mb-[1.6rem] text-arrow'>
                            <span className='mr-[6px] text-[1.375rem] font-RanuaTrialsMedium'>Studio B</span>
                            <figure className=''>
                                <img src='/images/arrow-black.png' className="w-full" />
                            </figure>
                        </a>
                    </Link>
                    <figure>
                        <img src='/images/all-studio-2.jpg' className="w-full" />
                    </figure>
                </div>
                <div className='mb-4 sm:mb-0'>
                    <Link href='/'>
                        <a className='flex items-center mb-[1.6rem] text-arrow'>
                            <span className='mr-[6px] text-[1.375rem] font-RanuaTrialsMedium'>Studio C</span>
                            <figure className=''>
                                <img src='/images/arrow-black.png' className="w-full" />
                            </figure>
                        </a>
                    </Link>
                    <figure>
                        <img src='/images/all-studio-3.jpg' className="w-full" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default AllStudio
