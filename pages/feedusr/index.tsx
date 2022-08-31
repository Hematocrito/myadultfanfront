import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { LayoutHomev2 } from "views/shared/Layouts/LayoutHomev2";
import Link from "next/link";
import Publication from "components/Publication";
import NavbarUsr from "components/NavbarUsr";
import PublicationUsr from "components/PublicationUsr";

const Home = ({ models }: any) => {
  const [model, setModel] = useState(models[0]);
  const openModal = (e: MouseEvent, modalId: any, model: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("model :>> ", model);
    const body = document.body;
    body.style.overflow = "hidden";

    let modal: any = document.getElementById(modalId);
    setModel(model);
    modal.classList.remove("hidden");
  };
  return (
    <div>
      <NavbarUsr />
      <LayoutHomev2 models={models}>
        {/* {models.map((model: any) => (
            <Link href={"/influencers/id/feed"} key={model.id}>
              <a className="w-full">
                <PreviewProfileCard model={model} openModal={openModal} />
              </a>
            </Link>
          ))} */}
        {models.map((model: any) => (
          <div key={model.id} className="md:mx-[20%]">
            <PublicationUsr model={model} />
          </div>
        ))}
      </LayoutHomev2>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://randomuser.me/api/?gender=female&results=20"
  );
  let data: any = await res.json();

  const models = data.results.map((result: any) => {
    let newResult: any = {};
    newResult.name = result.name.first;
    newResult.lastName = result.name.last;
    newResult.url = result.picture.medium;
    newResult.largeUrl = result.picture.large;
    newResult.id = result.login.uuid;
    newResult.createdAt = new Date().toDateString();
    return newResult;
  });

  return {
    props: {
      models,
    },
  };
};
