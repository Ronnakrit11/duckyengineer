'use client'
import CourseContent from "@/app/components/Course/CourseContent";
import Loader from "@/app/components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import axios from "axios";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
    params:any;
}

const Page = ({params}: Props) => {
    const id = params.id;
  const { isLoading, error, data,refetch } = useLoadUserQuery(undefined, {});

  const searchParams = useSearchParams();
  const paymentToken = searchParams?.get("ptoken");

  useEffect(()=>{
    if(paymentToken){
      checkPaymentToken()
    }
  },[])

  const checkPaymentToken = async () =>{
    try{
      const result = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/create-order-postback?payment_token=${paymentToken}`)
    }catch(err){
    }
    window.location.href = `/course-access/${id}`
  }

  useEffect(() => {
    if(!paymentToken){
      if (data) {
        const isPurchased = data.user.courses.find(
          (item: any) => item._id === id
        );
        if (!isPurchased) {
          redirect("/");
        }
      }
      if (error) {
        redirect("/");
      }
    }
  }, [data,error]);

  return (
   <>
   {
    (paymentToken || isLoading) ? (
        <Loader />
    ) : (
        <div>
          <CourseContent id={id} user={data.user} />
        </div>
    )
   }
   </>
  )
}

export default Page