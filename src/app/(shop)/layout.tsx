import { ReactNode } from 'react';
import { TopMenu } from '@/components';


export default function ShopLayout( {
                                        children,
                                    }: Readonly<{
    children: ReactNode
}> ) {
    return (
        <main className="min-h-screen">
            <TopMenu/>
            { children }
        </main>
    );
}
