import { Dispatch, ReactElement, SetStateAction } from 'react';
import { Navbar } from 'views/shared';
import LayoutPrice from './LayoutPrice';

interface IFilter {
  name:string;
  gender:string;
  sort:string;
  price:string;
}
interface ILayout {
  children: ReactElement | any;
  filter: IFilter;
  setFilter: Dispatch<SetStateAction<IFilter>>;
  getFiles: () => Promise<void>
}
export default function LayoutMediaHome({filter,setFilter,getFiles, children }: ILayout) {
  return (
    <>
      <LayoutPrice filter={filter} setFilter={setFilter} getFiles={getFiles} >
        <div className="mb-2  md:mb-8">
          <Navbar
            routes={[
              { title: 'Photos', path: 'media/all' },
              { title: 'Videos', path: 'media/photos' },
              //  { title: 'TOP VIEW', path: 'media/topview' },
            ]}
          />
        </div>
        {children}
      </LayoutPrice>
    </>
  );
}
