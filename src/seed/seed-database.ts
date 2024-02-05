import prisma from '../lib/prisma';
import { initialData } from './seed';

async function main() {

    /*await Promise.all( [
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ] );*/

    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const { categories, products } = initialData;

    const categoriesData = categories.map( ( category ) => ( {
        name: category,
    } ) );

    await prisma.category.createMany( {
        data: categoriesData,
    } );

    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce( ( acc, category ) => {
        acc[ category.name.toLowerCase() ] = category.id;
        return acc;
    }, {} as Record<string, string> );


    for ( const product of products ) {
        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create( {
            data: {
                ...rest,
                categoryId: categoriesMap[ type.toLowerCase() ],
            },
        } );

        const imagesData = images.map( ( image ) => ( {
            url: image,
            productId: dbProduct.id,
        } ) );

        await prisma.productImage.createMany( {
            data: imagesData,
        } );
    }

    console.log( 'Seed ejecutado correctamente' );
}

( () => {
    if ( process.env.NODE_ENV === 'production' ) return;

    main();
} )();
