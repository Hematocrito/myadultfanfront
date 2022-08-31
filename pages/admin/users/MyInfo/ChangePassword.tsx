import { ChangePassword } from 'components/ChangePassword';
import { GetStaticProps } from 'next';

export default ChangePassword;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
