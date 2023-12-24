import React from "react";
import { styles } from "../styles/style";
import Image from "next/image";

const About = () => { 
  return (
    <div className="text-white pb-[50px] bg-[#0f0f0f]">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        {/* What is <span className="text-gradient">Ducky Engineer</span> */}
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto text-[#fdfdfd]">
        <div className="w-full flex justify-center flex-col md:flex-row items-center">
          <Image src={'/profile.jpg'} height={300} width={300} alt="" />
          <div className="pt-5 pl-5">
            <span className="text-[24px] font-semibold text-gradient">ประวัติวิทยากร</span>
            <p className="text-[22px] mt-1 mb-1">
              ชื่อ - นามสกุล :ณพล เฮงบํารุง  (ก๊อฟ)
            </p>
            <p className="text-[16px]">Admin Page Facebook : วิศวกรเป็ด (Ducky Engineer) </p>
            <p className="text-[16px]">YouTube Channel   : วิศวกรเป็ด (Ducky Engineer) </p>
            <p className="text-[16px]">Microsoft Certified Trainer (MCT)  </p>
            <p className="text-[16px]">Google Certified Trainer (GCT) </p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[24px] font-semibold text-gradient">Specialize Topic</span>
            <p className="li-item text-[14px] md:text-[16px]">Power Platform (Power BI, Power Automate, Power Apps, Power Virtual Agents) </p>
            <p className="li-item text-[14px] md:text-[16px]">Digital Marketing (Google, Bing, Facebook, LinkedIn) </p>
            <p className="li-item text-[14px] md:text-[16px]">Data Analytics (Python & R)  </p>
            <p className="li-item text-[14px] md:text-[16px]">Lean Six Sigma  </p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[24px] font-semibold text-gradient">Education</span>
            <p className="li-item text-[14px] md:text-[16px]">2021-2022 &emsp; : Business Analytic - The Wharton School of the University of Pennsylvania</p>
            <p className="li-item text-[14px] md:text-[16px]">2008-2012 &emsp; : Bachelor of Mechanical Engineering – Chulalongkorn University</p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[24px] font-semibold text-gradient">ประสบการณ์ทํางาน (Professional Experience)</span>
            <div className="flex">
              <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">2021 - Present</p>
              <p>: Digital & Data Analytic Mentor – Athena Global </p>
            </div>
            <div className="flex">
              <p className="min-w-[126px]"></p>
              <p>: Microsoft Power BI & Power Platform Instructor –  Knowledge Hut upGrad </p>
            </div>
            <div className="flex">
              <p className="min-w-[126px]"></p>
              <p>: Business Analytics Excel / Power BI Instructor – Simplilearn </p>
            </div>
            <div className="flex">
              <p className="min-w-[126px]"></p>
              <p>: Assistance Data Driven Manager (Digital) – SCGC  </p>
            </div>
            <div className="flex">
              <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">2020 – 2021</p>
              <p>: Focus Improvement Leader (HR Share Service) – SCGC    </p>
            </div>
            <div className="flex">
              <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">2019 – 2020    </p>
              <p>: FAssistance Financial Validation Manager (CIC) – SCGC     </p>
            </div>
            <div className="flex">
              <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">2012 – 2018        </p>
              <p>: Construction Project Manager – REPCO (Engineer Experience) วิศวกรเป็ด (Ducky Engineer)    </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[24px] font-semibold text-gradient">ประสบการณ์สอน</span>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรบรรยาย หัวข้อ Beginner Guide to Power automate จัดโดย Styava.Dev & Microsoft
              Asia Pacific (APAC) (Virtual – English)
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมในหัวข้อ “Maximizing Productivity with Power Automate Integrating M365”
              ให้กับ IVICT Thailand  (Subsidiary of Mitsubishi Corporation)
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรม และ Mentor งาน Power Platform Bootcamp 1 st  Generation ที SCGC (มี
              ผู้สมัครกว่า 200+ คน) โดยเป็น Co-Founder และ Mentor Specialize Track “ Data Analyst
              Automation” (เน้นการใช้ Advance Power BI & Power Automate และช่วยดูแลเนื้อหาการอบรม
              ทั้งหมดตลอด Bootcamp)
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรม หัวข้อ Auto send report from Power BI data to email with Power Automate
              ที Power Platform Community Meetup จัดโดย Microsoft Thailand
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรม หัวข้อ Power Automate Session ที Power Platform Bootcamp Thailand จัด
              โดย Microsoft Thailand  on Thailand Developer Day
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรบรรยาย หัวข้อ Power Platform Fundamentals(PL-900) จัดโดย Styava.Dev &
              Microsoft Asia Pacific (APAC) (Virtual – English)
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมให้กับ FutureSkills ในหัวข้อ Business Process Automation with Power
              Automate
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมให้กับ FutureSkills ในหัวข้อ Power Virtual Agents   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมให้กับ KnowdledgeHut upGrad ในหัวข้อ PL-300 Power BI Certification </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมให้กับ Simplilearn ในหัวข้อ Business Analytic with Excel & Power BI  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรม หัวข้อ Advance Power BI for Business Analytics ที่ SCGC - 5 รุ่น (ผู้เข้า
              เรียนรวมกว่า 100คน)
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมหัวข้อ Power Platform Integrations workshop (Power BI – Power Apps –
              Power Automate – Power Virtual Agent) ที่ SCGC - 7 รุ่น (ผู้เข้าเรียนกว่า 140 คน)
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมหัวข้อ Basic Power Automate ที่ SCGC - 10 รุ่น (ผู้เข้าเรียนกว่า 200 คน)  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากร และ Mentor ด้าน Digital & Data Analytic ให้กับโครงการ EGCO Innergy 2022
              จํานวน 2 ทีม ซึ่ง ทั้ง 2 ทีมสามารถแข่งขัน และได้รางวัลชนะเลิศ และรองชนะเลิศในโครงการ
              EGCO Innergy 2022  (KEGCO & HRSG)
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมให้กับ Master Black Belt ,Blackbelt , Greenbelt  ทีÉ SCGC   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมในหัวข้อ Financial Validation in Practice ให้กับ SCGC กว่า 20 รุ่นพร้อมทัÊง
              พัฒนา VDO คอร์สออนไลน์ไว้เรียนภายในองค์กร
            </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">วิทยากรฝึกอบรมในหัวข้อ Intro to Financial Validation ให้กับ SCGC กว่า 20 รุ่นพร้อมทัÊงพัฒนา
              VDO คอร์สออนไลน์ไว้เรียนภายในองค์กร
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-5">
            <span className="text-[24px] font-semibold text-gradient">Highlight Certificate</span>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Microsoft Certified Trainer (MCT)   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">PL-200 Microsoft Certified: Power Platform Functional Consultant   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">PL-300 Microsoft Certified: Power BI data Analyst   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">PL-900 Microsoft Certified: Power Platform Fundamentals    </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">MACP Microsoft Advertising Certified Professionals   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Advanced Analytics Certificate  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Business Intelligence Professional Certificate  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Certified Educator Level 1 – 2   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Digital Marketing & E- Commerce Certificate   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Analytics Certification (GA4)   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google UX Design Professional Certificate  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Data Analytics Professional Certificate  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Project Management Professional Certificate    </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Tag Manager Fundamentals Certificate  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Ads Measurement | Search Ads 360 | Creative Certification   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Google Ads Display, Search, Video Certification   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">LinkedIn Marketing Strategy Certificate  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">SAP Analytics Cloud Certificate  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">IBM Data Science Professional Certificate (V2)  </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">IBM Data Analyst Professional Certificate (V2)   </p>
            <p className="li-item text-[14px] md:text-[16px] min-w-[126px]">Lean Six Sigma Blackbelt – Greenbelt Certificate </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
