import { MyFavourite } from 'components/MyWishlist';
import { GetStaticProps } from 'next';

export default MyFavourite;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
