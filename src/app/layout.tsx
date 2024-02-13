import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { inter } from '@/config/fonts';
import './globals.css';


export const metadata: Metadata = {
    title: {
        template: '%s - Teslo | Shop',
        default: 'Home',
    },
    description: 'Tienda virtual de productos',
};

export default function RootLayout( {
                                        children,
                                    }: Readonly<{
    children: ReactNode
}> ) {
    return (
        <html lang="en">
        <body className={ inter.className }>{ children }</body>
        </html>
    );
}
