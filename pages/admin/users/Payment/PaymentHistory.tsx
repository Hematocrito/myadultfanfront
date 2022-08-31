import Loading from 'components/Loading';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const PaymentHistory = dynamic(()=>import('components/PaymentHistory'),
{loading: ()=><Loading/>})

export default PaymentHistory;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
