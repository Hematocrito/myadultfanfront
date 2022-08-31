import type { GetServerSideProps} from "next";
import dynamic from 'next/dynamic';

const InfluencersView =  dynamic(()=>import('components/InfluencersView'),{
  loading : ()=> <p>Loading...</p>
});



export default InfluencersView;

