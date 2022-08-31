// import { useFakeWomens } from 'hooks';
import LayoutHome from 'views/shared/Layouts/LayoutHome';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';

const Publication = dynamic(()=>import('components/Publication'),
{loading:()=><p>Loading...</p>});


interface IFilter {
  name:string;
  gender:string;
  sort:string;
}

export default function Feed() {

  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState<IFilter>({
    name:"",
    gender:"all",
    sort:"mostPopular"
  })
  
  const {name,gender,sort} = filter;

  const getFiles = async()=>{  
    let filterName = name == ""?"none":name
   const response = await fetch(`http://localhost:8080/platform/feeds/${filterName}/${gender}/${sort}`)
   const data = await response.json();
   setFiles(data);  
  }

  useEffect(() => {
    getFiles();
  }, [])


  return (
    <>
      <Navbar />
      <LayoutHome filter={filter} setFilter={setFilter} getFiles={getFiles} files={files}>
        {files.map((file: any) => (
          <div key={file.id} className="md:mx-[20%]">
            <Publication file={file} />
          </div>
        ))}
      </LayoutHome>
    </>
  );
}

