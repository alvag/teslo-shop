import { ReactNode } from 'react';
import { Footer, Sidebar, TopMenu } from '@/components';


export default function ShopLayout( {
                                        children,
                                    }: Readonly<{
    children: ReactNode
}> ) {
    return (
        <main className="min-h-screen">
            <TopMenu/>
            <Sidebar/>
            <div className="px-0 sm:px-10">
                { children }
            </div>

            <Footer/>
        </main>
    );
}
