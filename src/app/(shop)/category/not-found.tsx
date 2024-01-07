import { FC } from 'react';
import { PageNotFound } from '@/components';

interface NotFoundProps {
}

const NotFoundPage: FC<NotFoundProps> = () => {
    return (
        <PageNotFound/>
    );
};

export default NotFoundPage;
