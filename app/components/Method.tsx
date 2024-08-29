import Image from 'next/image';

interface method {
    methodIcon: string;
    methodName: string;
}

export default function Method({ methodIcon, methodName }: method) {
    return (
        <div className='flex flex-row items-center justify-start p-4 rounded-xl gap-3 w-full hover:bg-slate-50 hover:cursor-pointer'>
            <Image
                src={methodIcon}
                width={20}
                height={20}
                alt='Auth Method Icon'
                className='h-5 w-5'
            />
            <p className='text-sm'>{methodName}</p>
        </div>
    );
}
