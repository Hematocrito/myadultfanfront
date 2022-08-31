import { MySubscribersTable } from 'components/MySubscribers';
import { GetStaticProps } from 'next';

export default MySubscribersTable;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
