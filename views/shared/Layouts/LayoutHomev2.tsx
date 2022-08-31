import { BannerDouble, Stories } from "views/shared";

import { ReactElement } from "react";

interface LayoutHomeProps {
  children: ReactElement | any;
  models: any;
}

export const LayoutHomev2 = ({ children, models }: LayoutHomeProps) => {
  return (
    <section>
      <BannerDouble />

      <Stories models={models} />
      {children}
    </section>
  );
};
