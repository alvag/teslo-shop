import { ReactNode } from 'react';


export default function AuthLayout( {
                                        children,
                                    }: Readonly<{
    children: ReactNode
}> ) {
    return (
        <main className="flex justify-center">
            <div className="w-full sm:w-[300px]">
                { children }
            </div>
        </main>
    );
}
