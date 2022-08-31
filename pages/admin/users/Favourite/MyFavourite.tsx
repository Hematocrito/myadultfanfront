import Loading from 'components/Loading';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';


const MyFavourite = dynamic(()=>import('components/MyFavourite'),
{loading: ()=><Loading/>})

export default MyFavourite;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { admin: 'fans' },
  };
};
