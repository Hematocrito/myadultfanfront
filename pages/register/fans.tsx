import Loading from 'components/Loading';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const RegisterView = dynamic(
  () => import('components/RegisterView'),
  { loading: () => <Loading/> }
)
export default RegisterView;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { register: 'fans' },
  };
};