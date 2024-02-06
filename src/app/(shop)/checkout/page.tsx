import { FC } from 'react';
import { Title } from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { initialData } from '@/seed/seed';

const productsInCart = [
    initialData.products[ 0 ],
    initialData.products[ 1 ],
    initialData.products[ 2 ],
];

interface CheckoutProps {
}

const CheckoutPage: FC<CheckoutProps> = () => {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar orden"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Ajustar elementos</span>
                        <Link href="/" className="underline mb-5">Editar carrito</Link>

                        {
                            productsInCart.map( ( product ) => (
                                <div key={ product.slug } className="flex">
                                    <Image src={ `/products/${ product.images[ 0 ] }` }
                                           width={ 100 }
                                           height={ 100 }
                                           style={ {
                                               width: 100,
                                               height: 100,
                                           } }
                                           className="mr-5 rounded-none"
                                           alt={ product.title }/>

                                    <div>
                                        <p>{ product.title }</p>
                                        <p>${ product.price } x 3</p>
                                        <p className="font-bold">Subtotal: ${ product.price * 3 }</p>

                                        <button className="underline">Remover</button>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>

                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl mb-2">Direccion de entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">Max Alva</p>
                            <p>Av. Lima 123</p>
                            <p>Ciudad de Lamas</p>
                            <p>San Martin, Peru</p>
                        </div>

                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>

                        <h2 className="text-2xl mb-2">Resumen de orden</h2>

                        <div className="grid grid-cols-2">
                            <span>Nro. Productos</span>
                            <span className="text-right">3 articulos</span>

                            <span>Subtotal</span>
                            <span className="text-right">$ 100</span>

                            <span>Impuestos (15%)</span>
                            <span className="text-right">$ 100</span>

                            <span className="text-2xl mt-5">Total</span>
                            <span className="text-right mt-5 text-2xl">$ 100</span>
                        </div>

                        <div className="mt-5 mb-2 w-full">
                            <p className="mb-5">
                                <span className="text-xs">
                                    Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros <a href="#"
                                                                                                    className="underline">términos y condiciones</a> y <a
                                    href="#" className="underline">política de privacidad</a>
                                </span>
                            </p>

                            <Link className="flex btn-primary justify-center" href="/orders/123">Colocar
                                orden</Link>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default CheckoutPage;
