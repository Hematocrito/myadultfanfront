import StoriesModal from 'components/StoriesModal';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import LayoutHome from 'views/shared/Layouts/LayoutHome';
import dynamic from 'next/dynamic';
import Loading from 'components/Loading';
import Navbar from 'components/Navbar';


interface IFilter {
  name:string;
  gender:string;
  sort:string;
}


const PreviewProfileCard = dynamic(()=>import('components/PreviewProfileCard'),
{loading:()=><Loading/>});


export default function Stories() {
  // const { womens } = useFakeWomens();
  /* const [model, setModel] = useState(models[0]); */

 /*  const openModal = (e: MouseEvent, modalId: any, model: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('model :>> ', model);

    let modal: any = document.getElementById(modalId);
    setModel(model);
    modal.classList.remove('hidden');
    const body = document.body;
    body.style.overflow = 'hidden';
  }; */
  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState<IFilter>({
    name:"",
    gender:"all",
    sort:"mostPopular"
  })
  
  const {name,gender,sort} = filter;

  const getFiles = async()=>{  
    let filterName = name == ""?"none":name
   const response = await fetch(`http://api.myadultfan.com/platform/performers/${filterName}/${gender}/${sort}`)
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
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-6 justify-items-center md:mx-[13%]">
          {files?.map((model: any) => (
            <div
              className="w-full"
              key={model.id}
             /*  onClick={(e: any) => openModal(e, 'modal', model)} */
            >
              <PreviewProfileCard model={model} />
            </div>
          ))}
        </div>
        {/* <StoriesModal model={model} /> */}
      </LayoutHome>
    </>
  );
}

