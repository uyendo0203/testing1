import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Form, Input, Button, Checkbox, Alert, Spin, Select, Calendar } from 'antd';
import { Loading } from 'src/components/elements';
// import { PostContact } from '@/redux/actions/ficActions';

const { Option } = Select;

const BookStudio = () => {
    const [form] = Form.useForm();
    // const reducers = useSelector((state) => state.BlogsReducer)
    // const dispatch = useDispatch()

    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submitContact = (data) => {
        // const params = {
        //     "email": data.email,
        //     "message": data.message,
        //     "name": data.name
        // }
        // // dispatch(PostContact(params))
        // setIsLoading(true)
    }
    const handleChange = (data) => {

    }
    const onPanelChange = (data) => {

    }


    // useEffect(() => {
    //     if (reducers &&reducers.PostContact) {
    //         if (reducers.PostContact.id) {
    //             setIsLoading(false)
    //             setIsSuccess(true)
    //             form.setFieldsValue({
    //                 email: '',
    //                 message: '',
    //                 name: ''
    //             })
    //         }

    //         setTimeout(() => {
    //             setIsSuccess(false)
    //         }, 3000);
    //     }
    // }, [reducers])

    return (
        <section className='BookStudioPage container'>
            <div className="grid grid-cols sm:grid-cols-2 mb-[3.375rem]">
                <div className="mb-[3.125rem] max-w-[100%] lg:max-w-[90%]">
                    <h1 className='child-heading text-[2.5rem] mb-[1.1rem]'>BOOK A STUDIO</h1>
                    <p className="text-[1.375rem] leading-7">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </p>
                </div>
                <div className="">
                    <Form layout="vertical" className="form-booking mx-auto max-w-[280px] md:max-w-[350px] flex flex-col justify-center" form={form} onFinish={submitContact} name="basic" >
                        <Form.Item rules={[{ required: true }]} name="type" className='mb-2 typeAndDate' label="Studio Type">
                            <Select defaultValue="CycloramaStudio" onChange={handleChange}>
                                <Option value="CycloramaStudio">Cyclorama Studio</Option>
                                <Option value="WholeStudio">Whole Studio</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item rules={[{ required: true }]} name="date" className='mb-2 typeAndDate' label="Pick a date">
                            <Select defaultValue="1" onChange={handleChange}>
                                <Option value="1">Jan</Option>
                                <Option value="2">Fed</Option>
                                <Option value="3">Mar</Option>
                                <Option value="4">Apr</Option>
                                <Option value="5">May</Option>
                                <Option value="6">Jun</Option>
                                <Option value="7">Jul</Option>
                                <Option value="8">Aug</Option>
                                <Option value="9">Sept</Option>
                                <Option value="10">Oct</Option>
                                <Option value="11">Nov</Option>
                                <Option value="12">Dec</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item rules={[{ required: true }]} name="date" className='mb-2 calendar'>
                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                        </Form.Item>
                        <Form.Item rules={[{ required: true }]} name="name" className='mb-2 nameAndEmail'>
                            <Input placeholder="Full Name" className="" />
                        </Form.Item>
                        <Form.Item rules={[{ required: true }, { type: 'email' }]} name="email" className='mb-2 nameAndEmail'>
                            <Input placeholder="Email" className="" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className=" 
                            text-green-dark border border-green-dark border-solid 
                            w-[14.375rem] h-[4.063rem] text-[1.25rem] rounded-[31px]
                            hover:shadow-none hover:text-white hover:border-green-dark hover:bg-green-dark">
                                Submit
                            </Button>
                        </Form.Item>
                        {isSuccess && <Alert message="Submit Success" type="success" />}
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default BookStudio
