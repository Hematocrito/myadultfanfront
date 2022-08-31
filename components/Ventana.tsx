import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MyEditor from './MyEditor';

const Ventana = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal} className='bg-blue-500 rounded-full py-1 px-4 text-white'>Edit cover</button>
      <Modal open={open} onClose={onCloseModal} center>
      <h2 className='myriad text-xl font-semibold'>Edit cover image</h2>
        <div>
          <MyEditor />
        </div>
        <div className='flex justify-end'>
            <button className='bg-blue-500 py-1 px-6 text-white'>OK</button>
        </div>
      </Modal>
    </div>
  );
};

export default Ventana