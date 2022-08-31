import { Navbar } from 'views/shared';
import LayoutHome from 'views/shared/Layouts/LayoutHome';
import LayoutPrice from './LayoutPrice';


export default function LayoutClipsHome({filter,setFilter,getFiles, children }: any) {
  return (
    <>
      <LayoutPrice filter={filter} setFilter={setFilter}  getFiles={getFiles}>
        <div className="ml-2 my-4 font-semibold">Categories:</div>
        <div className="mb-2 md:mb-8">
          <Navbar
            routes={[
              { title: 'FREE CONTENT VIDEO', path: 'clips/all' },
              { title: 'PREMIUM CONTENT VIDEO', path: 'clips/ondemand' },
             
            ]}
          />
        </div>
        {children}
      </LayoutPrice>
    </>
  );
}
