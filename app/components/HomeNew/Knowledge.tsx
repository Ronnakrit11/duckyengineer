import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";
import { useGetAllBlogQuery } from "@/redux/features/blog/blogsApi";
import BlogCard from "../Admin/Blog/BlogCard";
import KnowledgeCard from "../Admin/Knowledge/KnowledgeCard";

type Props = {};

const Knowledge = ({ knowedge = [] }) => {
    console.log("🚀 ~ file: Knowledge.tsx:11 ~ Knowledge ~ knowedge:", knowedge)
    return (
        <div className="w-[100%] bg-[#0f0f0f] pb-5">
            <div className={`w-[90%] 800px:w-[80%] m-auto pt-10`}>
                <h1 data-aos="fade-down" className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-[#000] font-[700] tracking-tight">
                    <span className="text-gradient">knowledge</span>{" "}
                    <br />
                </h1>
                <br />
                <br />
                <div data-aos="fade-right" className="grid grid-cols-1 gap-[20px] md:grid-cols-1 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px]1500px:gap-[35px] mb-12 border-0">
                    {knowedge &&
                        knowedge.map((item: any, index: number) => (
                            <KnowledgeCard item={item} key={`knowledge-${index}`} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
