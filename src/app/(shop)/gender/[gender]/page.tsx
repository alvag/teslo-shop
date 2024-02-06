export const revalidate = 60;

import { FC } from 'react';
import { Pagination, ProductGrid, Title } from '@/components';
import { getPaginatedProductsWithImages } from '@/actions';
import { redirect } from 'next/navigation';
import { Gender } from '@prisma/client';

interface CategoryProps {
    params: {
        gender: string;
    };
    searchParams: {
        page?: string;
    };
}

const CategoryPage: FC<CategoryProps> = async ( { params, searchParams } ) => {
    const page = searchParams.page ? parseInt( searchParams.page ) : 1;
    const { gender } = params;

    const { products, totalPages } = await getPaginatedProductsWithImages( {
        page,
        gender: gender as Gender,
    } );

    if ( products.length === 0 ) {
        redirect( `/gender/${ gender }` );
    }

    const labels: Record<string, string> = {
        men: 'para hombres',
        women: 'para mujeres',
        kid: 'para niños',
        unisex: 'para todos',
    };

    /*if ( id === 'kids' ) {
        notFound();
    }*/

    return (
        <>
            <Title title={ `Artículos de ${ labels[ gender ] }` }
                   subtitle="Todos los productos"
                   className="mb-2"
            />

            <ProductGrid products={ products }/>

            <Pagination totalPages={ totalPages }/>
        </>
    );
};

export default CategoryPage;
