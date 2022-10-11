import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MyEditor from './MyEditor';
import MyEditorAvatar from './MyEditorAvatar';
import { AiFillStar } from 'react-icons/ai';
import { AiFillCamera } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

const VentanaAvatar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [foto, setFoto] = useState('https://randomuser.me/api/portraits/med/women/80.jpg');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  
  useEffect(() => {  
    /*let avatarWomen:any = localStorage.getItem('newImage')        
    if(avatarWomen) setFoto(avatarWomen)*/
    
    let var1 = localStorage.getItem('variable1') 
    console.log("!!!!!!!",var1)
    if(var1!=null) setUsername(var1)
    let var2 = localStorage.getItem('avatar') 
    if(var2!=null) setAvatar(var2)
    console.log("AVATAR", var2)
    
  }, [])

  function guardar(){
    let avatarWomen:any = localStorage.getItem('newImage')        
    if(avatarWomen) setFoto(avatarWomen)
      
    console.log("Canvas after"+foto)
    router.push('/admin/model/profile');
    onCloseModal()
  }
  
  return (
    <div>
      <div className='flex items-center sm:gap-3 gap-2 ' >                            
          <div className="relative rounded-full w-[112px]  md:w-40 h-[112px] lg:w-[179px] lg:h-[179px] md:h-40 border-4 border-blue-450 md:mb-8 md:ml-5 mb-0 ml-0 ">
              <img className="relative border-[2px] border-white rounded-full p-0.5 lg:w-[170px] lg:h-[170px] md:w-[175px] md:h-[155px] w-56 h-49" src={avatar} />
              <button onClick={onOpenModal} className='w-fit rounded-full border-blue-500 bg-blue-500
               transition outline outline-0 p-1.5 absolute md:right-2 md:bottom-2 right-0 bottom-0'><AiFillCamera className='w-5 h-5 md:w-9 md:h-9 fill-white' /></button>
          </div>
          <span className='font-bold sm:text-3xl text-white text-xl'>{username}</span>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className='myriad text-xl font-semibold'>Edit avatar image</h2>
        
        <MyEditorAvatar pic={foto} />
        <div className='flex justify-end'>
            <button className='bg-blue-500 py-1 px-6 text-white' onClick={guardar}>Guardar</button>
        </div>
        
      </Modal>
    </div>
  );
};

export default VentanaAvatar