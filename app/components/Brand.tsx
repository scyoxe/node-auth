import Image from 'next/image';

export default function Brand() {
    return (
        <div className='col-span-4 flex flex-row justify-start items-center gap-2 font-black text-lg mt-8'>
            <Image
                src={'./next-auth.svg'}
                width={35}
                height={35}
                alt='Brand Icon'
                className='w-7 h-7'
            />
            <p>Next Auth</p>
        </div>
    );
}
