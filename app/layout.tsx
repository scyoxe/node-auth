import { Space_Grotesk as font } from 'next/font/google';
import './globals.css';

const trispace = font({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={[trispace.className, 'h-lvh flex flex-row'].join(
                    ' '
                )}>
                {children}
            </body>
        </html>
    );
}
