import { MySubscriptionTable } from 'components/MySubscription';
import { GetStaticProps } from 'next';

export default MySubscriptionTable;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
