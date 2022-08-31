import { BasicInfo } from 'components/ProfileModel';
import { GetStaticProps } from 'next';

export default BasicInfo;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};