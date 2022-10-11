import BannerInfluencerImage from "public/assets/img/sin-cover.png";
import BannerInfluencer from "components/BannerInfluencer";
import { Navbar } from "views/shared";
import SubscribeInfluencer from "components/SubscribeInfluencer";
import TipModal from "components/TipModal";
import { authService } from "services";

export default function LayoutInfluencer({ children }: any) {
  const user = authService.userValue;
  return (
    <>
      <BannerInfluencer influencer={BannerInfluencerImage} />
      <SubscribeInfluencer />
      <Navbar
        user={user}
        routes={[
          { title: "FEED", path: "influencers/id/feed" },
          { title: "Clips", path: "influencers/id/clips/all" },
          { title: "PHOTOS", path: "influencers/id/photos" },
          { title: "TIP ME", path: "influencers/id/tipme" },
        ]}
      />
      {children}
      <TipModal />
    </>
  );
}
