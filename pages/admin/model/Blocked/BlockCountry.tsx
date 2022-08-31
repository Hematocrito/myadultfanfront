import { CountryBlocked } from 'components/CountryBlocked';
import { GetStaticProps } from 'next';

export default CountryBlocked;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
