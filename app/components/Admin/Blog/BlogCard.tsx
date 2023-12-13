import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useRouter } from 'next/navigation'

type Props = {
  item: any;
  isProfile?: boolean;
};

const BlogCard: FC<Props> = ({ item, isProfile }) => {
  const router = useRouter()
  const linkUrl = `/blog/${item.slug}` 

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(linkUrl)
  }

  return (
    <div className="w-full dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg shadow-sm dark:shadow-inner">
        <div onClick={handleClick} className="w-full cursor-pointer dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg shadow-sm dark:shadow-inner">
        {!!item.thumbnail.url && (
          <Image
            src={item.thumbnail.url}
            width={500}
            height={300}
            objectFit="contain"
            className="rounded w-full"
            alt=""
          />
        )}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50" >
          <span className="left-0 right-0 mx-auto w-[120px] absolute bottom-10 text-white border rounded-xl border-white p-2">Click to view</span>
        </div>
      </div>
      <br />
      <h1 onClick={handleClick} className=" cursor-pointer font-Poppins font-bold text-center p-[10px] text-[12px] md:text-[16px] text-black dark:text-[#fff]">
        {item.title}
      </h1>
      <h2 className=" font-Poppins text-center p-[10px] text-[12px] md:text-[14px] text-[#2d2d2d]">
        {
          add3Dots(item.description, 100)
        }      
      </h2>
      <div className="w-full flex items-center justify-center pt-3 pb-2">
        {/* <div className="flex">
          <h3 className="text-black font-semibold dark:text-[#fff]">
            {item.price === 0 ? "Free" : item.price?.toLocaleString() + "฿"}
          </h3>
          <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
            {item.estimatedPrice?.toLocaleString()}฿
          </h5>
        </div> */}
      </div>
    </div>
  );
};

function add3Dots(string: string, limit: number)
{
  let dots = "...";
  if(string.length > limit)
  {
    string = string.substring(0,limit) + dots;
  }

    return string;
}


export default BlogCard;
