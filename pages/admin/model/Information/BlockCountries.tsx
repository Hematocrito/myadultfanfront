import { BlockCountries } from 'components/BlockCountries';
import { GetStaticProps } from 'next';

export default BlockCountries;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
