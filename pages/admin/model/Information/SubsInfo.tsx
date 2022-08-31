import { SubsInfo } from 'components/SubsInfo';
import { GetStaticProps } from 'next';

export default SubsInfo;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
