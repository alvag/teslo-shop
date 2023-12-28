import { ReactNode } from 'react';


export default function ShopLayout( {
                                        children,
                                    }: Readonly<{
    children: ReactNode
}> ) {
    return (
        <main className="min-h-screen bg-red-500">
            { children }
        </main>
    );
}
