import Loading from 'components/Loading';
import dynamic from 'next/dynamic';

const RegisterViewModelFull = dynamic(
  () => import('components/RegisterViewModelFull'),
  { loading: () => <Loading/> }
)


export default RegisterViewModelFull;