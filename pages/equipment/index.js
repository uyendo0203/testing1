import Link from 'next/link'

const Equipment = () => {
    return (
        <section className='AllStudioPage container'>
            <h1 className='child-heading text-[2.5rem] mb-[1.1rem]'>Equipment</h1>
            <div className="grid grid-cols sm:grid-cols-2 gap-7 mb-[3.438rem]">
                <p className="text-[1.375rem] leading-7">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <div className='flex justify-center flex-wrap -translate-y-10'>
                    <div className='mx-5 text-center'>
                        <div className='text-[5.313rem]'>xx</div>
                        <div className='text-[1.5rem] uppercase'>lights</div>
                    </div>
                    <div className='mx-5 text-center'>
                        <div className='text-[5.313rem]'>xx</div>
                        <div className='text-[1.5rem] uppercase'>CAMERAS</div>
                    </div>
                    <div className='mx-5 text-center'>
                        <div className='text-[5.313rem]'>xx</div>
                        <div className='text-[1.5rem] uppercase'>PROPERTIES</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols sm:grid-cols-2 sm:gap-7">
                <figure className='mb-[3rem]'>
                    <img src='/images/equipment-1.jpg' className="w-full" />
                </figure>
                <figure className='mb-[3rem]'>
                    <img src='/images/equipment-2.jpg' className="w-full" />
                </figure>
            </div>

            <div className="text-[1.375rem]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </div>

        </section>
    )
}

export default Equipment
