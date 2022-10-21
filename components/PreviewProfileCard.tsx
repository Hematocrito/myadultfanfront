// import { useFakeWomens } from 'hooks/useFakeWomens';
import Image from "next/image";
import Link from "next/link";
import StoriesModal from "./StoriesModal";

const PreviewProfileCard = ({  model }: any) => {

  const avatar =  model?.avatarId?.absolutePath?model?.avatarId?.absolutePath:(model?.gender === "male")?'/assets/img/MALE.png':'/assets/img/FEMALE.png'; 
  const cover =  model?.coverId?.absolutePath?model?.coverId?.absolutePath:'/assets/img/COVER.png';
  
  return (
    <div className="w-full justify-self-center text-center">
      <div
        className="mb-10 relative h-24 sm:h-60"
        style={{
          backgroundImage: `url(
            ${cover}
          )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="h-16 md:h-28 w-16 md:w-28 rounded-full absolute -bottom-10 left-[50%] -translate-x-[50%] p-0.5 border-2 border-blue-450">
          <Image
            className="rounded-full "
            src={avatar}
            alt={model.name}
            layout="fill"
          />
          {/* Icon Live */}
          {/* <div className="absolute rounded-[50%] h-[15px] w-[15px] right-0 bottom-0 md:right-2 md:bottom-1 bg-[#ff00a2]">
            <span className="absolute pl-3 top-0 text-xs font-extrabold">
              LIVE
            </span>
          </div> */}
        </div>
      </div>
      <strong className="text-gray-500 text-sm">{model.name}</strong>
    </div>
  );
};


export default PreviewProfileCard;