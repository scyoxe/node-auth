'use client';
import { useState } from 'react';
import Image from 'next/image';

interface AuthMethod {
    methodIcon: string;
    methodName: string;
    count: number;
}

export default function AuthMethod({
    methodIcon,
    methodName,
    count,
    children,
}: AuthMethod & { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChildrenVisibility = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col justify-center items-start gap-3'>
            <div
                className='flex flex-row justify-start items-center gap-3 w-full cursor-pointer'
                onClick={toggleChildrenVisibility}>
                <Image
                    src={methodIcon}
                    width={20}
                    height={20}
                    alt='Auth Method Icon'
                />
                <p className='font-bold'>
                    {methodName}{' '}
                    <span className='text-sm font-black'>
                        {'(' + count + ')'}
                    </span>
                </p>
            </div>
            {isOpen && (
                <div className='edges w-full flex flex-col'>{children}</div>
            )}
        </div>
    );
}
