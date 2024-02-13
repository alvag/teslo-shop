'use client';

import { getStockBySlug } from '@/actions';
import { titleFont } from '@/config/fonts';
import { useEffect, useState } from 'react';

interface StockLabelProps {
    slug: string;
}

export const StockLabel = ( { slug }: StockLabelProps ) => {
    const [ stock, setStock ] = useState( 0 );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        getStock();
    }, [] );

    const getStock = async () => {
        const stock = await getStockBySlug( slug );
        setStock( stock );
    };

    return (
        <h1 className={ `${ titleFont.className } antialiased font-bold text-lg` }>
            Stock: { stock }
        </h1>
    );
};
