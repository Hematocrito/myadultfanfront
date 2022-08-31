import Table, { Icolumn } from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';
import { tableStyling, columns, rows, columns1 } from './GalleryTableProps'
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import NavbarMod from './NavbarMod';

export const GalleryManagment = () => {
  const router = useRouter();
  let txtGal1,txtGal2,txtGal3,txtGal4,txtGal5,txtEar6,txtEar7;

  switch(router.locale) {    
    case "es":
      txtGal1 = 'Gestión de la galería';
      txtGal2 = 'Búsqueda';
      txtGal3 = 'Crear nuevo';
      txtGal4 = 'Nombre';
        break;
    case "en-US":
      txtGal1 = 'Gallery Managment';
      txtGal2 = 'Search';
      txtGal3 = 'Create New';
      txtGal4 = 'User photo';
      txtGal5 = 'Name';
        break;
    case "pt":
      txtGal1 = 'Gerenciamento de Galeria';
      txtGal2 = 'Procurar';
      txtGal3 = 'Crie um novo';
      txtGal4 = 'Foto do usuário';
      txtGal5 = 'Nome';
        break;
    case "ru":
      txtGal1 = 'Управление галереей';
      txtGal2 = 'Поиск';
      txtGal3 = 'Создавать новое';
      txtGal4 = 'Фото пользователя';
      txtGal5 = 'Имя';
    default:
        
  }

    return (
        <section> 
          <NavbarMod />
            <div className='w-full'>
                <div className='w-4/5 flex-1 m-auto mt-28 font-sans'>
                    <h1 className='font-base text-2xl font-semibold'>{txtGal1}</h1>
                    <div className='flex mt-5 w-full justify-between gap-4 sm:gap-0 overflow-scroll md:overflow-visible'>
                        <div className='flex gap-5'>
                            <input className='border-gray-400 rounded-lg border-[1px] p-3' type="text" placeholder='Enter Keyword' />
                            <button className='bg-blue-450 rounded-lg text-white font-semibold w-24'>{txtGal2}</button>
                        </div>
                        <div className='flex'>
                            <button className='flex items-center gap-3 bg-yellow-400 rounded-lg text-xl font-semibold p-1.5 text-black'> <AiOutlinePlus className='text-2xl text-white' /> {txtGal3}</button>
                        </div>
                    </div>
                    <Table styling={tableStyling} columns={columns} rows={rows} show_search={false} should_export={false} per_page={5} /> 
                </div>
            </div>
        </section>
    );
};