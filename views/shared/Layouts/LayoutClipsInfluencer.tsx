import { Navbar } from 'views/shared';
import LayoutInfluencer from 'views/shared/Layouts/LayoutInfluencer';

export default function LayoutClips({ children, models }: any) {
  return (
    <>
      <LayoutInfluencer models={models}>
        <div className="ml-2 my-4 font-semibold md:mx-[10%]">Categories:</div>
        <div className="mb-2">
          <Navbar
            routes={[
              { title: 'FREE CONTENT VIDEO', path: 'influencers/id/clips/all' },
              { title: 'PREMIUM CONTENT VIDEO', path: 'influencers/id/clips/free' },
            /*  { title: 'ON DEMAND', path: 'influencers/id/clips/ondemand' },
              { title: 'TOP VIEW', path: 'influencers/id/clips/topview' },*/
            ]}
          />
        </div>
        {children}
      </LayoutInfluencer>
    </>
  );
}
