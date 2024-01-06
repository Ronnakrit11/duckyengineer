import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from 'next/navigation'

type Props = {
  item: any;
  isProfile?: boolean;
};

const KnowledgeCard: FC<Props> = ({ item, isProfile }) => {

  return (
    <div className="w-full flex flex-col md:flex-row bg-white dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg shadow-sm dark:shadow-inner">
      <div className="w-full dark:bg-slate-500 dark:bg-opacity-20  dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg shadow-sm dark:shadow-inner">
        <div className="md:h-[250] md:w-[300px]">
          {!!item.thumbnail.url && (
            <Image
              src={item.thumbnail.url}
              width={500}
              height={300}
              objectFit="contain"
              className="rounded md:min-h-[250px]"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between h-[100%] pb-2">
        <h1 className=" cursor-pointer font-Poppins font-bold text-center p-[10px] text-[12px] md:text-[16px] text-black dark:text-[#fff]">
          {item.title}
        </h1>
        <h2 className=" font-Poppins p-[10px] text-[12px] md:text-[14px] text-[#777]">
          {
            add3Dots(item.description, 100)
          }
        </h2>
        {/* data-aos="fade-up" data-aos-delay="600"  */}
        <div>
          <div onClick={() => { window.open(item.link, '_blank')?.focus() }} className="flex justify-center items-center h-[30px] w-[150px]  ml-4 md:h-[40px] md:w-[200px] font-size-[12px]  md:font-size-[12px] text-[12px] font-medium leading-[56px] bg-[#FFFFFF] text-[#000000]  border-solid border-2 border-[#ffcf66] box-shadow-grow hover:text-black cursor-pointer hover:border-[#ffcf66]  rounded-lg text-center">
           <span>{'อ่านข้อมูลเพิ่มเติม >'}</span> 
          </div>
        </div>
      </div>

    </div>
  );
};

function add3Dots(string: string, limit: number) {
  let dots = "...";
  if (string.length > limit) {
    string = string.substring(0, limit) + dots;
  }

  return string;
}


export default KnowledgeCard;
