import { ReactNode } from 'react';


export default function AuthLayout( {
                                        children,
                                    }: Readonly<{
    children: ReactNode
}> ) {
    return (
        <main className="min-h-screen bg-gray-500">
            { children }
        </main>
    );
}
