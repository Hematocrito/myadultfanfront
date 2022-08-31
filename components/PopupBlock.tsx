import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MyEditor from './MyEditor';
import { Label } from '@headlessui/react/dist/components/label/label';
import SelectUser from './SelectUser';
import { AiFillStar } from 'react-icons/ai';

const PopupBlock = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal} className='h-[42px] bg-blue-450 rounded-lg text-white font-light w-28 text-xs md:text-base ml-11 md:ml-0'>Block Users</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div >
          <label className="block text-gray-800 text-lg font-extralight mt-3 mb-5">
            Block users
          </label>
          <label className="block text-gray-700 text-xs font-light mb-2">
            Please select user you want to block
          </label>
          <SelectUser /> 
          <div className='flex gap-1'>
              <AiFillStar className='w-2 h-2 text-orange-500' />
              <label className="block text-gray-700 text-xs font-light mb-2" >
                  Reason
              </label>              
          </div>
          <textarea rows={3} className='w-full border-2 text-sm rounded mb-3' placeholder=' Disturbing'/>
        </div>
        <div className='flex gap-1 justify-start'>
            <button className='bg-blue-450 rounded py-2 px-4 text-white text-sm font-light'>Submit</button>
            <button className='bg-maf-pink  rounded py-2 px-4 text-white text-sm font-light'>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupBlock