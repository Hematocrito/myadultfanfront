import { BankingInfo } from 'components/BankingInfo';
import { GetStaticProps } from 'next';

export default BankingInfo;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
