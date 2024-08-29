import Image from 'next/image';

export default function Fonts() {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3 font-bold'>
                <Image
                    src={'./images/fonts.svg'}
                    width={20}
                    height={20}
                    alt='Fonts Icon'
                />
                <p>Fonts</p>
            </div>
            <div className='edges w-full flex flex-col gap-3'>
                <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Search'
                    className='p-4 rounded-xl w-full border-gray-100 border-2 focus:outline-gray-300'
                />
                <ul className='flex flex-col gap-3 edges text-sm'>
                    <li>Font 1</li>
                    <li>Font 2</li>
                    <li>Font 3</li>
                </ul>
            </div>
        </div>
    );
}
