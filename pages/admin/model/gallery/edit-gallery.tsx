import { EditGallery } from 'components/EditGallery';
import { GetStaticProps } from 'next';

export default EditGallery;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};