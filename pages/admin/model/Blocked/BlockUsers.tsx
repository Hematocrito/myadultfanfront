import { MyInfo } from 'components/UsrBlocked';
import { GetStaticProps } from 'next';

export default MyInfo;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
