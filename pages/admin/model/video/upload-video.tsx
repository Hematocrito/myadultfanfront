import { UploadVideo } from 'components/UploadVideo';
import { GetStaticProps } from 'next';

export default UploadVideo;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};