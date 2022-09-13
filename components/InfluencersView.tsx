import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import StoriesModal from './StoriesModal';
import LayoutHome from 'views/shared/Layouts/LayoutHome';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';

interface Props {
    name : string;
    lastName : string;
    url : string;
    largeUrl: string;
    id : string;
    createdAt: Date
}

interface IFilter {
  name:string;
  gender:string;
  sort:string;
}


const PreviewProfileCard = dynamic(()=>import('./PreviewProfileCard'));

const InfluencersView = () => {
   
    const [files, setFiles] = useState([]);
    const [filter, setFilter] = useState<IFilter>({
      name:"",
      gender:"all",
      sort:"mostPopular"
    })
    
    const {name,gender,sort} = filter;
    
   /*  const openModal = (e: MouseEvent, modalId: any, model: any) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('model :>> ', model);
      const body = document.body;
      body.style.overflow = 'hidden';
  
      let modal: any = document.getElementById(modalId);
      setModel(model);
      modal.classList.remove('hidden');
    };
 */
    const getFiles = async()=>{  
      let filterName = name == ""?"none":name
     const response = await fetch(`http://api-temp.myadultfan.com/platform/performers/${filterName}/${gender}/${sort}`)
     const data = await response.json();
     setFiles(data);  
     console.log("DATA "+data)
    }

    useEffect(() => {
      getFiles();
      console.log("FILES "+files)
    }, [])

    
    
    return (
      <div>
        <Navbar />
        <LayoutHome filter={filter} setFilter={setFilter} getFiles={getFiles} files={files}>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-2  lg:grid-cols-4   justify-items-center md:mx-[13%] md:mb-4">

            {files?.map((model: any) => (
              <Link href='/influencers/id/feed' key={model.id}>
                <a className="w-full">
                  <PreviewProfileCard model={model} />
                </a>
              </Link>
            ))}
          </div>
          {/* <StoriesModal model={model} /> */}
        </LayoutHome>
      </div>
    );
}

export default InfluencersView;