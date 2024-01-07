import { FC } from 'react';
import { notFound } from 'next/navigation';

interface CategoryProps {
    params: {
        id: string;
    };
}

const CategoryPage: FC<CategoryProps> = ( { params } ) => {
    const { id } = params;

    if ( id === 'kids' ) {
        notFound();
    }

    return (
        <div>Category Page { id }</div>
    );
};

export default CategoryPage;
