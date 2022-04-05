import React from 'react';
import Link from 'next/link'
import { Button } from 'antd';

// type:outline/has bg 

const ButtonCpn = ({ text, link, outline, size }) => {
    const temp = `
        ${size ? size : 'w-[14.375rem] min-h-[3.375rem] text-[1rem]'} flex items-center justify-center rounded-[27px] text-[#fff] 
        ${outline ? 'text-green-dark border border-green-dark hover:border-green-dark border-solid hover:text-[#fff] hover:border-green-dark hover:bg-green-dark' : 'hover:text-[#fff] bg-green-dark mx-auto hover:bg-green-dark-hover'}
        `
    return (
        link
            ? <Link href={link}><a className={temp}>{text}</a></Link>
            : <Button className={temp}>{text}</Button>
    );
};
export default ButtonCpn;