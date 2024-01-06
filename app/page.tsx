import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "คอร์สเรียน Power BI , Power Automate , Power Apps , Copilots ,LineOA และที่ปรึกษาทางด้าน Data ,Digital Markeing และ  Low Code Technology",
  description:
    " อัพสกิลตัวเองและพัฒนาองค์กรของคุณให้ตอบโจทย์การทำงานในอนาคต  ด้วยคอร์สเรียนเกี่ยวกับ Digital – Data – Low Code พร้อมตอบโจทย์ยุคใหม่ที่ทันสมัย  ได้แล้ววันนี้  ไม่จำเป็นต้องมีพื้นฐาน สามารถเรียนเข้าใจง่าย และนำไปใช้ได้จริงสอนโดยวิศวกรเป็ดที่มีประสบการณ์จริง  (Microsoft Power Platform , Power BI ,Microsoft Fabric , DAX, Power Query , Power Automate , Power Apps , Model Driven App  ) คอร์สออนไลน์ คอร์สเรียน คอร์ส Power Platform  Data Analytics  , Data Analyst     ",
  keywords:
    "Power BI, DAX, Power Query, Microsoft Fabric, Power Automate, PowerApps, Power Platform, Copilot Studio, Data Analytics, Data Science, Python, SQL, RPA, Low Code, Excel, Excel Automation, Line Official Account, Digital Marketing, Lean Six Sigma, คอร์สออนไลน์, คอร์สเรียน, การศึกษา, เทคโนโลยีสารสนเทศ, พัฒนาทักษะ , Citizen Developer , คอร์สดาต้า , คอร์ส AI ",
  openGraph: {
    title: "คอร์สเรียน Power BI , Power Automate , Power Apps , Copilots ,LineOA และที่ปรึกษาทางด้าน Data ,Digital Markeing และ  Low Code Technology ",
    description: " อัพสกิลตัวเองและพัฒนาองค์กรของคุณให้ตอบโจทย์การทำงานในอนาคต  ด้วยคอร์สเรียนเกี่ยวกับ Digital – Data – Low Code พร้อมตอบโจทย์ยุคใหม่ที่ทันสมัย  ได้แล้ววันนี้  ไม่จำเป็นต้องมีพื้นฐาน สามารถเรียนเข้าใจง่าย และนำไปใช้ได้จริงสอนโดยวิศวกรเป็ดที่มีประสบการณ์จริง  (Microsoft Power Platform , Power BI ,Microsoft Fabric , DAX, Power Query , Power Automate , Power Apps , Model Driven App  ) คอร์สออนไลน์ คอร์สเรียน คอร์ส Power Platform  Data Analytics  , Data Analyst     ",
    url: "https://www.duckyengineer.com",

    siteName: "Duckyengineer",
    images: [
      {
        url: "https://res.cloudinary.com/doqbge8fv/image/upload/v1702357995/ft9rhzvtetxfzcv9asks.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "th-TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "คอร์สเรียน Power BI , Power Automate , Power Apps , Copilots ,LineOA และที่ปรึกษาทางด้าน Data ,Digital Markeing และ  Low Code Technology",
    description:
         " อัพสกิลตัวเองและพัฒนาองค์กรของคุณให้ตอบโจทย์การทำงานในอนาคต  ด้วยคอร์สเรียนเกี่ยวกับ Digital – Data – Low Code พร้อมตอบโจทย์ยุคใหม่ที่ทันสมัย  ได้แล้ววันนี้  ไม่จำเป็นต้องมีพื้นฐาน สามารถเรียนเข้าใจง่าย และนำไปใช้ได้จริงสอนโดยวิศวกรเป็ดที่มีประสบการณ์จริง  (Microsoft Power Platform , Power BI ,Microsoft Fabric , DAX, Power Query , Power Automate , Power Apps , Model Driven App  ) คอร์สออนไลน์ คอร์สเรียน คอร์ส Power Platform  Data Analytics  , Data Analyst          ",
    images: [
      "https://res.cloudinary.com/doqbge8fv/image/upload/v1702357995/ft9rhzvtetxfzcv9asks.jpg",
    ],
  },
};

export const revalidate = 180;

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log("porcess env =>", process.env.NEXT_PUBLIC_SERVER_URI);

  const pmBanner = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`,
    {}
  );
  const pmCategory = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`,
    {}
  );

  const pmKnowledge = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-all-knowledge`,
    {}
  );
  const [resBanner, resCategory, rsKnowedge] = await Promise.all([pmBanner, pmCategory, pmKnowledge]);
  const banner = await resBanner.json();
  const category = await resCategory.json();
  const knowedge = await rsKnowedge.json();

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
    knowedge: knowedge?.result || [],
  };

  return <Home webInfo={webInfo} />;
};

export default Page;
