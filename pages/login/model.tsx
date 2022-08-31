import Loading from 'components/Loading';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const LoginModel = dynamic(
  () => import('components/LoginModel'),
  { loading: () => <Loading/> }
)
export default LoginModel;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { login: 'model' },
  };
};