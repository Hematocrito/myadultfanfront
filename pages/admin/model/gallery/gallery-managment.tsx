import { GalleryManagment } from 'components/GalleryManagment';
import { GetStaticProps } from 'next';

export default GalleryManagment;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
