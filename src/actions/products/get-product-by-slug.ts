import prisma from '@/lib/prisma';

export const getProductBySlug = async ( slug: string ) => {
    try {
        const product = await prisma.product.findFirst( {
            include: {
                images: {
                    select: {
                        url: true,
                    },
                },
            },
            where: {
                slug,
            },
        } );

        if ( !product ) {
            return null;
        }

        return {
            ...product,
            images: product.images.map( ( { url } ) => url ),
        };
    } catch ( error ) {
        console.error( error );
        throw new Error( 'Error al obtener producto por slug' );
    }
};
