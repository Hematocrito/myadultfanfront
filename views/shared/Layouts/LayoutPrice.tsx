import { Button, Input, Select } from "components";
import RangeDouble from "components/RangeDouble";
import { BannerDouble, Navbar, Stories, Filter } from "views/shared";
import Image from "next/image";
import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";
import { MdStarOutline } from "react-icons/md";
import Male from "public/assets/icons/ICONS-01.png";
import Female from "public/assets/icons/ICONS-02.png";
import Bi from "public/assets/icons/ICONS-03.png";

interface IFilter {
  name:string;
  gender:string;
  sort:string;
  price:string;
}
interface ILayout {
  children: ReactElement | any;
  filter: IFilter;
  setFilter: Dispatch<SetStateAction<IFilter>>;
  getFiles: () => Promise<void>
}

const LayoutPrice = ({filter,setFilter,getFiles, children }: ILayout) => {
  const reset = ()=>{
    setFilter({
      name:"",
      gender:"all",
      sort:"mostPopular",
      price: "0"
    })
    getFiles();
  }
  return (
    <section>
      <BannerDouble />
      <Navbar
        routes={[
          { title: "Influencers", path: "influencers" },
          { title: "Clips", path: "clips/all" },
          { title: "Media", path: "media/all" },
          { title: "Stories", path: "stories" },
          { title: "Feed", path: "feed" },
          // { title: "Live", path: "live" },
        ]}
      />
      {/* <div className="flex items-center justify-end py-1 px-2 text-blue-450 text-sm">
        <i className="fas fa-filter mx-2"></i>
        <span className="flex items-center justify-center">Filter</span>
        <i className="fas fa-chevron-down mt-1 mx-2"></i>
      </div> */}
      <Filter className="flex items-center justify-end text-xs">
        <form className="md:mx-[35%]">
          <div className="flex content-center">
            <MdStarOutline className="text-3xl text-blue-450 mr-2" />
            <strong>
              500 <span className="text-blue-450">Models</span>
            </strong>
          </div>a
          <div className="grid grid-cols-3 gap-3 my-3">
            {/* <div className="flex items-center"> */}
            <input
              className="border-2 self-center border-blue-450 h-8 px-2 text-black w-full text-sm font-medium   outline-none rounded-lg appearance-none"
              autoComplete="off"
              placeholder="Enter Ke.."
              name="name"
              onChange={({target})=>setFilter({...filter,[target.name]:target.value})}
            />
            {/* </div> */}
            {/* <Input name="password" formGroup={FormGroup}>
              {['Enter Ke..', 'The password is required']}
            </Input> */}
            {/* <Select name="male" formGroup={FormGroup}>
              {['', '', ['All']]}
            </Select> */}
            <select className="w-full px-2 py-1 h-8 bg-transparent text-sm font-medium focus:ring-2 rounded-lg border-2 self-center border-blue-450 outline-none text-black" name="gender" value={filter.gender} onChange={({target})=>setFilter({...filter,[target.name]:target.value})}>
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender" >Trans</option>
            </select>
            <select className="w-full px-2 py-1 h-8 bg-transparent text-sm font-medium focus:ring-2 rounded-lg border-2 self-center border-blue-450 outline-none text-black" name="sort" value={filter.sort} onChange={({target})=>setFilter({...filter,[target.name]:target.value})}>
              <option value="sort">Sort</option>
              <option value="latest">Latest</option>
              <option value="oldes">Oldes</option>
              <option value="mostPopular">Most Popular</option>
            </select>
            {/* <Select name="male" formGroup={FormGroup}>
              {['', '', ['Sort', 'Latest', 'Oldes', 'Most Popular']]}
            </Select> */}
          </div>
          <div className="mx-[17%] md:mx-0">
            <div className="grid grid-cols-3 gap-2 mx-3 mt-8 mb-5">              
                <button className="bg-blue-450 text-white font-medium  rounded-lg my-3 px-5 py-2 text-sm md:text-base">
                  Male
                </button>
                <button className="bg-slate-100 text-black font-medium  rounded-lg my-3 px-5 py-2 text-sm md:text-base">
                  Female
                </button>
                <button className="bg-slate-100 text-black font-medium  rounded-lg my-3 px-5 py-2 text-sm md:text-base">
                  Trans
                </button>
            </div>
          </div>
          <div className="mx-[17%] md:mx-0">
            {/* <p className="my-2">
              <strong>Price up to</strong>
            </p> */}
            {/* <input type="range" name="" className="w-full" /> */}
            <RangeDouble
              initialMin={0}
              initialMax={7500}
              min={0}
              max={10000}
              step={100}
              price={0}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          
          <div className="flex justify-around">
            {/* <Button width="100px" type=''>Reset</Button> */}
            <button type="button" className="bg-slate-100 font-medium  rounded-lg my-2 px-8 py-2 text-sm md:text-base" onClick={()=>reset()}>
              Reset
            </button>
            <button type="button" className="bg-blue-450 text-white font-medium  rounded-lg my-2 px-8 py-2 text-sm md:text-base"  onClick={()=>getFiles()}>
              Apply
            </button>
          </div>
        </form>
      </Filter>

     {/*  <Stories models={models} /> */}
      {children}
    </section>
  );
};

export default LayoutPrice;
