const IndividualStudio = () => {
    return (
        <section className='StudioPageDetail container'>
            <h1 className='home-heading mb-[2.813rem]'>
                <h1 className='child-heading text-[2.5rem] mb-[1.1rem]'>Studio A</h1>
            </h1>
            <figure className='mb-[3.75rem]'>
                <img src='/images/studio-detail-1.jpg' className="w-full" />
            </figure>
            <div className="grid grid-cols sm:grid-cols-2 gap-7 mb-[3.75rem]">
                <div className="text-[1.375rem] leading-7 mr-0 md:mr-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </div>
                <div className="text-[1.375rem] leading-7 mr-0 md:mr-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </div>
            </div>
            <div className="grid grid-cols md:grid-cols-3 gap-6">
                <figure className='mb-[2rem] md:mb-0'>
                    <img src='/images/studio-detail-2.jpg' className="w-full" />
                </figure>
                <figure className='col-span-1 md:col-span-2'>
                    <img src='/images/studio-detail-3.jpg' className="w-full" />
                </figure>
            </div>
        </section>
    )
}

export default IndividualStudio
