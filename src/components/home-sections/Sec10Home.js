import { ButtonCpn } from 'src/components/elements';
import { Button, Form, Input } from 'antd';
import { useNav } from '@/hooks/useNav';

const Sec10Home = () => {
    const contactRef = useNav('contact')

    const settingsSlider = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 5000
    };

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <section ref={contactRef} id="contactContainer" className='home-section mx-auto mt-[3.125rem] lg:mt-0'>
        <div className='flex flex-col lg:flex-row'>
          <div className='container lg:container-fluid w-full lg:w-1/2 lg:pb-[40px] lg:pt-[100px] lg:pl-[85px] flex flex-col justify-center'>
            <div className='mb-[20px] lg:mb-[50px]  max-w-[100%] md:max-w-[50%]'>
              <h1 className='home-heading text-[2.188rem] mb-[5px] lg:mb-[20px]'>
                <span className='sub text-[1.375rem]'>Contact</span>
                A space for
                connection and
                collaboration
              </h1>
              <div className='text-[1.375rem] mb-[15px] lg:mb-[40px] leading-7'>
                Have a story you care about?
                Let us help you bring it to life.
              </div>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='fic-form'
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input placeholder="Mail" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <Input placeholder="Message" />
                </Form.Item>
                <Form.Item className='mt-[2.5rem]'>
                  <Button type="primary" htmlType="submit" className=" 
                            text-green-dark border border-green-dark border-solid 
                            w-[14.375rem] h-[4.063rem] text-[1.25rem] rounded-[31px]
                            hover:shadow-none hover:text-white hover:border-green-dark hover:bg-green-dark">
                    Submit
                  </Button>
                  {/* <ButtonCpn outline type="primary" htmlType="submit" text="Submit" size="w-[14.375rem] h-[4.063rem] text-[1.25rem] rounded-[31px]" /> */}
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className='w-full lg:w-1/2 ml-auto slider-dots-green'>
            <img src='/images/home-sec-9.jpg' className="w-full" />
          </div>
        </div>
      </section>
    );
};

export default Sec10Home