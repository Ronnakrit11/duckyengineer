import React from "react";
import { styles } from "../styles/style";


type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg-[#0f0f0f] font-Poppins min-h-[70vh]">
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-white px-3"}>
        <h1 className={`${styles.title} text-white pt-2`}>
          บริษัท เอ็มเอสดี (ประเทศไทย) จํากัด
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            999/9 อาคารดิออฟฟิศเศส แอท เซ็นทรัลเวิลด์ ชั้น 37 ยูนิต เอ็มเอช 3701-3712
            ถนน พระราม 1 แขวงปทุมวัน เขตปทุมวัน
            กรุงเทพมหานคร 10330 ประเทศไทย
            02- 262-5700
          </p>
          <br />

          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            MSD (Thailand) Ltd.

            999/9 The Offices at Central World 37th Floor,
            Unit MH 3701-3712 Rama I Road,
            Pathumwan Bangkok 10330, Thailand
            Tel: 02- 262-5700
          </p>
          <br />


        </ul>
      </div>
    </div>
  );
};

export default Contact;
