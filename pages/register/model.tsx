import Loading from 'components/Loading';
import dynamic from 'next/dynamic';

const RegisterViewModel = dynamic(
  () => import('components/RegisterViewModel'),
  { loading: () => <Loading/> }
)
export default RegisterViewModel;

export async function getStaticProps() {
  // TO DO change endpoint for a environment var
  // const resquest = await fetch(`http://localhost:8080/countries/list`);
  // const response = await resquest.json();

  return {
    props: {
      register: "model",
      // countryList: response.data
    },
  };
}