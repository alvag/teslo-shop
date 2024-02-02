import { FC } from 'react';
import { IoCartOutline } from '@react-icons/all-files/io5/IoCartOutline';
import Link from 'next/link';

interface EmptyProps {
}

const EmptyPage: FC<EmptyProps> = () => {
    return (
        <div className="flex items-center justify-center h-[800px]">
            <IoCartOutline size={ 80 }/>

            <div className="flex flex-col items-center">
                <h1 className="text-xl font-semibold">Tu carrito esta vacio</h1>

                <Link href="/" className="text-blue-500 mt-2 text-4xl">Regresar</Link>
            </div>
        </div>
    );
};

export default EmptyPage;
