import Image from 'next/image';
import Banner1 from 'public/banner/banners-01.png';

export const BannerDouble = () => {
  return (
    <div
      className="relative h-24 sm:h-[20vh] md:h-5 visible md:invisible"
      style={{ marginTop: '3px' }}
    >
      <Image
        src={Banner1}
        alt="banner"
        layout="fill"
        className="object-fill"
        priority={true}
      />
    </div>
  );
};
