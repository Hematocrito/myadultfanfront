import Loading from 'components/Loading';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const LoginView = dynamic(
  () => import('components/LoginView'),
  { loading: () => <Loading/> }
)

export default LoginView;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { login: 'fans' },
  };
};