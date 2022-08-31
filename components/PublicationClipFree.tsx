import { format } from 'date-fns';
import Image from 'next/image';
import Lock from 'public/assets/icons/ICONS-05.png';
import Play from 'public/assets/icons/ICONS-06.png';
import UpIcon from 'public/assets/icons/ICONS-07.png';
import MessageIcon from 'public/assets/icons/ICONS-08.png';
import ViewIcon from 'public/assets/icons/ICONS-09.png';
import PublicationHead from './PublicationHead';
import { useState } from 'react';
import Model from 'public/post/post1.jpg';


export default function PublicationClipFree({ model }: any) {
  const [isVideo, setIsVideo] = useState(true);
  const [isImage, setIsImage] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [isFree, setIsFree] = useState(true);
  const [showModal, setShowModal] = useState(true);

  function openModal(modalId: any) {
    let modal: any = document.getElementById(modalId);
    modal.classList.remove('hidden');
    const body = document.body;
    body.style.overflow = 'hidden';
  }

  return (
    <>
      <PublicationHead model={model} />
      <div className="w-60 h-40 mb-8 md:mt-2">
        <div className="w-60 h-40 relative">
          <Image
            src={Model}
            alt={model.id}
            layout="fill"
            className={`object-cover ${isSubscribe ? 'blur-[2px]' : ''}`}
          />
          
          {isVideo && (
            <>
              <div className="absolute right-14 px-2 text-white font-medium text-xs bg-gray-500">
                Full HD
              </div>
              <div className="absolute right-2 px-2 text-white font-medium text-xs bg-gray-500">
                02:41
              </div>
              {isPayment && (
                <div className="absolute right-4 top-6 rounded-md border-2 border-gray-500 text-gray-500">
                  <i className="fas fa-play flex items-end px-2 py-1 text-xs" />
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="flex items-center my-2 px-4 justify-between text-semibold text-gray-400">
          <div className="flex items-center">
            <Image src={UpIcon} height={15} width={20} alt="1" />{' '}
            <span className="ml-3 text-sm">2</span>
          </div>
          <div className="flex items-center">
            <Image src={MessageIcon} height={15} width={20} alt="1" />{' '}
            <span className="ml-3 text-sm">1</span>
          </div>
          <div className="flex items-center">
            <Image src={ViewIcon} height={15} width={20} alt="1" />{' '}
            <span className="ml-3 text-sm">25</span>
          </div>
        </div>
        
      </div>
      </>
  );
}
