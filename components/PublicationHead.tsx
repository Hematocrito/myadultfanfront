import { format } from 'date-fns';
import Image from 'next/image';
import moment from 'moment';
export default function PublicationHead({ file }: any) {
  const avatar =  file?.fromSourceId?.avatarId?.absolutePath?file?.fromSourceId?.avatarId?.absolutePath:(file?.fromSourceId?.gender === "male")?'/assets/img/MALE.png':'/assets/img/FEMALE.png'; 
  
  return (
    <div className="flex items-center mb-0.5 px-2  ">
      <div className="relative rounded-full w-12 h-12 border-2 border-blue-250">
        <Image
          src={avatar}
          alt={file?.fromSourceId.name}
          className="rounded-full"
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-start text-gray-400">
        <h2 className="font-normal mx-1 text-sm">
          {file?.fromSourceId.name}
          {' · '}
          <span className="text-xs font-light">{moment(file.createdAt).format(
                "ddd MMM DD YYYY"
              )}</span>
        </h2>
        <h2 className="font-extrabold mx-1 text-sm text-black">
          Riding Pink Dildo With Spank Ass
        </h2>
      </div>
    </div>
  );
}
