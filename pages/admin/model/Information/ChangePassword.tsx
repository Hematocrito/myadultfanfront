import { ModelChangePassword } from 'components/ModelChangePassword';
import { GetStaticProps } from 'next';

export default ModelChangePassword;

export const getStaticProps: GetStaticProps = () => {
    return {
        props: { admin: 'fans' },
    };
};
