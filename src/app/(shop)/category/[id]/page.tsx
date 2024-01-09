import { FC } from 'react';
import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
import { Category } from '@/interfaces';

interface CategoryProps {
    params: {
        id: Category;
    };
}

const CategoryPage: FC<CategoryProps> = ( { params } ) => {
    const { id } = params;

    const products = initialData.products.filter( product => product.gender === id );

    const labels: Record<Category, string> = {
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
            <Title title={ `Artículos de ${ labels[ id ] }` }
                   subtitle="Todos los productos"
                   className="mb-2"
            />

            <ProductGrid products={ products }/>
        </>
    );
};

export default CategoryPage;
