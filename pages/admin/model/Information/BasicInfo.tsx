import { BasicInfo } from 'components/BasicInfo';
import { GetStaticProps } from 'next';

export default BasicInfo;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};