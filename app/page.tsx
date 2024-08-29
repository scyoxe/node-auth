import type { Metadata } from 'next';
import Brand from './components/Brand';
import AuthMethod from './components/AuthMethod';
import Method from './components/Method';
import Fonts from './components/Fonts';

export const metadata: Metadata = {
    title: 'Next Auth | Landing',
    description: '',
};

export default function Landing() {
    return (
        <>
            <header className='h-full w-60 flex flex-col border-r-gray-100 border-r-2 gap-16 '>
                <Brand />
                <div className='flex flex-col overflow-y-scroll overflow-x-hidden h-full gap-6'>
                    <div className='flex flex-col gap-6'>
                        <AuthMethod
                            count={2}
                            methodIcon='./images/manual.svg'
                            methodName='Local'>
                            <Method
                                methodIcon='./images/postgres.svg'
                                methodName='Postgres'
                            />
                            <Method
                                methodIcon='./images/mysql.svg'
                                methodName='MySql'
                            />
                        </AuthMethod>
                        <AuthMethod
                            count={5}
                            methodIcon='./images/auto.svg'
                            methodName='Auto'>
                            <Method
                                methodIcon='./images/google.svg'
                                methodName='Google'
                            />
                            <Method
                                methodIcon='./images/github.svg'
                                methodName='GitHub'
                            />
                            <Method
                                methodIcon='./images/facebook.svg'
                                methodName='Facebook'
                            />
                            <Method
                                methodIcon='./images/microsoft.svg'
                                methodName='Microsoft'
                            />
                        </AuthMethod>
                    </div>
                    {/* <hr /> */}
                    <Fonts />
                </div>
            </header>
            <main className='grow'></main>
        </>
    );
}
